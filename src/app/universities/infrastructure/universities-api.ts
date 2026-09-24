import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { University } from '../domain/model/university.entity';
import { HipolabsUniversityResource } from './hipolabs-response';
import { UniversityAssembler } from './university-assembler';
import { LogoServiceApi } from '../../public/infrastructure/logo-service-api';

@Injectable({ providedIn: 'root' })
export class UniversitiesApi {
  private baseUrl = environment.hipolabsApiBaseUrl;
  private endpoint = environment.universitiesHipolabsUniversitiesEndpointPath;

  constructor(
    private http: HttpClient,
    private logoServiceApi: LogoServiceApi,
  ) {}

  getScienceUniversities(): Observable<University[]> {
    const url = `${this.baseUrl}${this.endpoint}?name=ciencias`;

    return this.http
      .get<HipolabsUniversityResource[]>(url)
      .pipe(
        map((response) =>
          UniversityAssembler.withLogoApiService(this.logoServiceApi).toEntitiesFromResponse(
            response,
          ),
        ),
      );
  }
}
