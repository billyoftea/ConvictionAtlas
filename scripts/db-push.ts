import 'dotenv/config';
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import Database from 'better-sqlite3';

function resolveSqlitePath(databaseUrl: string) {
  if (!databaseUrl.startsWith('file:')) {
    throw new Error(`Only sqlite file URLs are supported, received: ${databaseUrl}`);
  }

  const relativePath = databaseUrl.replace(/^file:/, '').replace(/^\.\//, '');
  return path.resolve(process.cwd(), 'prisma', relativePath);
}

function main() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error('DATABASE_URL is required');
  }

  const databasePath = resolveSqlitePath(databaseUrl);
  const journalPath = `${databasePath}-journal`;
  const sql = execSync(
    'npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script',
    {
      cwd: process.cwd(),
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'inherit'],
    },
  );

  fs.mkdirSync(path.dirname(databasePath), { recursive: true });
  if (fs.existsSync(databasePath)) {
    fs.rmSync(databasePath, { force: true });
  }
  if (fs.existsSync(journalPath)) {
    fs.rmSync(journalPath, { force: true });
  }

  const database = new Database(databasePath);
  database.exec('PRAGMA foreign_keys = ON;');
  database.exec(sql);
  database.close();

  console.log(`SQLite database created at ${databasePath}`);
}

main();
