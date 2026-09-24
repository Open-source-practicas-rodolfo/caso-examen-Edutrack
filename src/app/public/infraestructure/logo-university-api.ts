import { environment } from '../../../environments/environment';

export class LogoUniversityApi
{
  baseUrl = environment.logoHipolabsApiBaseUrl;
  apiKey = environment.logoHipolabsPublishabledKey;

  constructor() {}

  getUrlToLogo(url:string): string
  {
    return `${this.baseUrl}${new URL(url).hostname}?token=${this.apiKey}`;
  }
}
