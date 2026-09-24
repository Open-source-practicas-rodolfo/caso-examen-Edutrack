import { computed, inject, Injectable, signal } from '@angular/core';
import { University } from '../domain/model/university.entity';
import { UniversitiesApi } from '../infrastructure/universities-api';

@Injectable({ providedIn: 'root' })
export class UniversitiesStore {
  private universitiesSignal = signal<University[]>([]);
  private universitiesApi = inject(UniversitiesApi);

  readonly universities = computed(() => this.universitiesSignal());

  loadUniversities() {
    if (this.universitiesSignal().length === 0) {
      this.universitiesApi.getScienceUniversities().subscribe((universities) => {
        this.universitiesSignal.set(universities);
      });
    }
  }
}
