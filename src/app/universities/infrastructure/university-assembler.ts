import { University } from '../domain/model/university.entity';
import { HipolabsUniversityResource } from './hipolabs-response';
import { LogoServiceApi } from '../../public/infrastructure/logo-service-api';
import { Url } from '../../public/domain/model/url';

export class UniversityAssembler {
  static logoServiceApi: LogoServiceApi;

  static withLogoApiService(logoServiceApi: LogoServiceApi): typeof UniversityAssembler {
    this.logoServiceApi = logoServiceApi;
    return this;
  }

  static toEntityFromResource(resource: HipolabsUniversityResource): University {
    const entity = new University();
    entity.name = resource.name;
    entity.country = resource.country;
    entity.countryCode = resource.alpha_two_code;
    entity.domain = resource.domains && resource.domains.length > 0 ? resource.domains[0] : '';

    // Extraemos la URL y creamos el Value Object
    const webUrl = resource.web_pages && resource.web_pages.length > 0 ? resource.web_pages[0] : '';
    entity.url = new Url(webUrl);

    // USAMOS TU MÉTODO EXACTO DE LOGO SERVICE
    entity.urlToLogo = new Url(this.logoServiceApi.getUrlToLogo(webUrl));

    return entity;
  }

  static toEntitiesFromResponse(resources: HipolabsUniversityResource[]): University[] {
    return resources.map((resource) => this.toEntityFromResource(resource));
  }
}
