import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-dropdown',
  imports: [CommonModule],
  template: `
    <div class="relative"
         (mouseenter)="onMouseEnter()"
         (mouseleave)="onMouseLeave()"
         (click)="toggleDropdown($event)">
      <button [class.underline]="isHovering || isClicked" class="transition">
        {{ label }}
      </button>
      <ul *ngIf="isHovering || isClicked"
          class="absolute bg-base-100 dark:bg-gray-800 dark:text-white rounded shadow-lg p-2 mt-2 w-48">
        <ng-content></ng-content>
      </ul>
    </div>
  `,
  styles: [':host { display: block; }']
})
export class DropdownComponent {
  @Input() label!: string;
  isHovering = false;
  isClicked = false;

  onMouseEnter() {
    if (!this.isClicked) this.isHovering = true;
  }

  onMouseLeave() {
    if (!this.isClicked) this.isHovering = false;
  }

  toggleDropdown(event: MouseEvent) {
    event.stopPropagation();
    this.isClicked = !this.isClicked;
    this.isHovering = this.isClicked;
  }

  @HostListener('document:click')
  closeDropdownOnClickOutside() {
    this.isClicked = false;
    this.isHovering = false;
  }
}
