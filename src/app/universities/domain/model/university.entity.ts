import { Url } from '../../../public/domain/model/url';

/**
 * @summary Represents a university in the Universities bounded context.
 * This class holds the pure business data for a higher education institution.
 * @author Rodolfo Zavaleta U20241F733
 */
export class University {
  /** Stable identifier for the university. */
  id: string;
  /** Human-readable university name shown in the UI. */
  name: string;
  /**
   * The internet domain name of the university
   * @example e.g. upc.edu.pe.
   */
  domain: string;
  /** Canonical source website URL used to open external content. */
  url: Url;
  /** Resolved logo URL generated from the provider domain. */
  urlToLogo: Url;
  /** The country where the university is located. */
  country: string;
  /** The alpha-two code of the country
   * @example PE.
   * */
  countryCode: string;

  /**
   * Returns the URL as a string.
   * @returns The URL string.
   */
  get urlAsString(): string {
    return this.url.toString();
  }

  /**
   * Returns the logo URL as a string.
   * @returns The logo URL string.
   */
  get urlToLogoAsString(): string {
    return this.urlToLogo.toString();
  }

  /**
   * Creates an empty university placeholder.
   *
   * @remarks
   * The application layer fills this entity with provider data after hydration.
   */
  constructor() {
    this.id = '';
    this.name = '';
    this.domain = '';
    this.url = new Url('');
    this.urlToLogo = new Url('');
    this.country = '';
    this.countryCode = '';
  }
}
