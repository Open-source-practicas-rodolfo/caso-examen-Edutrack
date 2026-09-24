import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { UniversitiesStore } from '../../../../universities/application/universities.store';
import { Toolbar } from '../toolbar/toolbar';
import { Footer } from '../footer/footer';
import { UniversityList } from '../../../../universities/presentation/components/university-list/university-list';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [Toolbar, UniversityList, Footer],
  templateUrl: './layout.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './layout.css',
})
/**
 * @summary Main shell component that orchestrates university content.
 * @author Rodolfo Zavaleta U20241F733
 */
export class Layout implements OnInit {
  /** Injected application store for the Universities bounded context. */
  protected store = inject(UniversitiesStore);

  /** Reactive university list consumed by the UI. */
  protected readonly universities = this.store.universities;

  /** Initializes university data when the layout is mounted. */
  ngOnInit(): void {
    this.store.loadUniversities();
  }
}
