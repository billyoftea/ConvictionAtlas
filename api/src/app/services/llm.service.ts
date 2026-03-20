import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

type ChatMessage = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

type GenerateTextParams = {
  messages: ChatMessage[];
  temperature?: number;
};

@Injectable()
export class LlmService {
  private client: OpenAI | null = null;

  constructor(private readonly configService: ConfigService) {}

  isConfigured() {
    return Boolean(this.getApiKey() && this.getBaseUrl());
  }

  getProviderName() {
    return 'deepseek';
  }

  getModel() {
    return this.configService.get<string>('DEEPSEEK_MODEL') ?? 'deepseek-chat';
  }

  async generateText({ messages, temperature = 0.2 }: GenerateTextParams) {
    if (!this.isConfigured()) {
      return null;
    }

    try {
      const response = await this.getClient().chat.completions.create({
        model: this.getModel(),
        temperature,
        messages,
      });

      return response.choices[0]?.message?.content?.trim() ?? null;
    } catch (error) {
      console.error('LLM generation failed:', error);
      return null;
    }
  }

  async generateMarkdown(params: GenerateTextParams) {
    const content = await this.generateText(params);

    return content?.replace(/^```(?:markdown|md)?\s*/i, '').replace(/\s*```$/, '').trim() ?? null;
  }

  private getClient() {
    if (!this.client) {
      this.client = new OpenAI({
        apiKey: this.getApiKey(),
        baseURL: this.getBaseUrl(),
      });
    }

    return this.client;
  }

  private getApiKey() {
    return this.configService.get<string>('DEEPSEEK_API_KEY') ?? '';
  }

  private getBaseUrl() {
    return this.configService.get<string>('DEEPSEEK_BASE_URL') ?? '';
  }
}
