import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [CommonModule, FaIconComponent],
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent {
  message = '🚧 Coming Soon 🚧';
  description = 'This page is under construction. Stay tuned for updates!';
}
