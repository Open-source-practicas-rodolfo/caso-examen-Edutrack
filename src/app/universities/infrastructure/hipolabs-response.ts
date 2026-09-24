/**
 * @summary Maps the JSON structure of a single university returned by the Hipolabs API.
 * @author Rodolfo Zavaleta U20241F733
 */
export interface HipolabsUniversityResource {
  name: string;
  country: string;
  alpha_two_code: string;
  domains: string[];
  web_pages: string[];
}
