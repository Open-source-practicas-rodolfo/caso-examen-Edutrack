import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { University } from '../../../domain/model/university.entity';
import { UniversityItem } from '../university-item/university-item';

@Component({
  selector: 'app-university-list',
  imports: [UniversityItem],
  templateUrl: './university-list.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './university-list.css',
})
/**
 * Presentation component that renders a list of university cards.
 */
export class UniversityList {
  /** Input collection of universities to display. */
  universities = input.required<Array<University>>();
}
