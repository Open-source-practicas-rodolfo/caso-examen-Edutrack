import { Injectable } from '@angular/core'; // 1. Agrega este import
import { environment } from '../../../environments/environment';

/**
 * Infraestructure gateway for generating source logo URs using logo.service
 */
@Injectable({
  providedIn: 'root',
})
export class LogoServiceApi {
  /** Base url for the logo provider API. */
  baseUrl = environment.logoHipolabsApiBaseUrl;
  /**Publishable API key required by the logo provider*/
  apiKey = environment.logoHipolabsPublishabledKey;

  constructor() {}

  /**
   * Builds the logo URL for a source website.
   *
   * @param url - A string value containing the website URL.
   */
  getUrlToLogo(url: string): string {
    return `${this.baseUrl}${new URL(url).hostname}?token=${this.apiKey}`;
  }
}
