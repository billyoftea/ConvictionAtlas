import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

type ChatMessage = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

type GenerateTextParams = {
  messages: ChatMessage[];
  temperature?: number;
};

/**
 * LlmService — Gongfeng AI (OpenAI-compatible, non-streaming axios call).
 *
 * Required headers for the Gongfeng gateway:
 *   Authorization: Bearer <GF_IDE_OAUTH_TOKEN>
 *   X-Username: <GF_IDE_USERNAME>
 *   OAUTH-TOKEN: <GF_IDE_OAUTH_TOKEN>
 *   DEVICE-ID: <CHE_WORKSPACE_ID>
 *   X-Model-Name: <model>
 */
@Injectable()
export class LlmService {
  constructor(private readonly configService: ConfigService) {}

  isConfigured() {
    return Boolean(this.resolveToken() && this.resolveBaseUrl());
  }

  getProviderName() {
    return 'gongfeng-ai';
  }

  getModel() {
    return (
      this.configService.get<string>('GONGFENG_MODEL') ??
      this.configService.get<string>('LLM_MODEL') ??
      'claude-sonnet-4-6'
    );
  }

  async generateText({ messages, temperature = 0.2 }: GenerateTextParams): Promise<string | null> {
    if (!this.isConfigured()) {
      return null;
    }

    const token = this.resolveToken();
    const model = this.getModel();

    try {
      const response = await axios.post(
        `${this.resolveBaseUrl()}/chat/completions`,
        {
          model,
          messages,
          temperature,
          max_tokens: 1200,
          stream: false,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
            'X-Username': this.resolveUsername(),
            'OAUTH-TOKEN': token,
            'DEVICE-ID': this.resolveDeviceId(),
            'X-Model-Name': model,
          },
          timeout: 45_000,
        },
      );

      return response.data?.choices?.[0]?.message?.content?.trim() ?? null;
    } catch (error: any) {
      console.error('LLM generation failed:', error?.response?.data ?? error?.message);
      return null;
    }
  }

  async generateMarkdown(params: GenerateTextParams): Promise<string | null> {
    const content = await this.generateText(params);
    return (
      content
        ?.replace(/^```(?:markdown|md)?\s*/i, '')
        .replace(/\s*```$/, '')
        .trim() ?? null
    );
  }

  private resolveToken() {
    return (
      this.configService.get<string>('GONGFENG_API_KEY') ??
      this.configService.get<string>('LLM_API_KEY') ??
      process.env['GF_IDE_OAUTH_TOKEN'] ??
      ''
    );
  }

  private resolveBaseUrl() {
    return (
      this.configService.get<string>('GONGFENG_BASE_URL') ??
      this.configService.get<string>('LLM_BASE_URL') ??
      'https://copilot.code.woa.com/server/openclaw/copilot-gateway/v1'
    );
  }

  private resolveUsername() {
    return (
      this.configService.get<string>('GONGFENG_USERNAME') ??
      process.env['GF_IDE_USERNAME'] ??
      'angeloxu'
    );
  }

  private resolveDeviceId() {
    return (
      this.configService.get<string>('GONGFENG_DEVICE_ID') ??
      process.env['CHE_WORKSPACE_ID'] ??
      'workspace0zgb8p429cbhvbbzg4'
    );
  }
}
