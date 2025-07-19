import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-dropdown',
  imports: [CommonModule],
  template: `
    <div class="relative inline-block"
         (mouseenter)="isHovering = true"
         (mouseleave)="isHovering = false">
      <button
        class="transition px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
        (click)="onToggle($event)"
        [class.underline]="isHovering || isOpen"
        [attr.aria-expanded]="isHovering || isOpen">
        {{ label }}
      </button>

      <ul *ngIf="isHovering || isOpen"
        class="absolute left-0 mt-2 w-48 rounded shadow-lg p-2 bg-white dark:bg-gray-800 dark:text-white z-[9999] border border-gray-200 dark:border-gray-700"
        role="menu">
        <ng-content></ng-content>
      </ul>
    </div>
  `,
  styles: [':host { display: block; }']
})
export class DropdownComponent {
  @Input() label!: string;
  @Input() isOpen = false;
  @Output() toggle = new EventEmitter<MouseEvent>();

  isHovering = false;

  onToggle(event: MouseEvent) {
    event.stopPropagation();
    this.toggle.emit(event);
  }
}
