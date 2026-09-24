import { Component, Input } from '@angular/core';
import { University } from '../../../domain/model/university.entity';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';
/**
 * @summary Presentation component that displays a single University in a card format.
 * @author Rodolfo Zavaleta U20241F733
 */
@Component({
  selector: 'app-university-item',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, TranslatePipe],
  templateUrl: './university-item.html',
  styleUrl: './university-item.css',
})
export class UniversityItem {
  /** The university data passed from the parent list component. */
  @Input() university!: University;
}
