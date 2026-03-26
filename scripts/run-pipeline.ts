const baseUrl = process.env.APP_URL ?? 'http://localhost:3001';
const skipMemos =
  process.env.SKIP_MEMOS === '1' || process.argv.includes('--skip-memos');

async function main() {
  const step = '/api/internal/bootstrap';
  const response = await fetch(`${baseUrl}${step}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      withMemos: !skipMemos,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`${step} failed: ${response.status} ${body}`);
  }

  const data = await response.json();
  console.log(step, JSON.stringify(data, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
