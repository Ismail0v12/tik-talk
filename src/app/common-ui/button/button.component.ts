import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() variant: 'primary' | 'outline' | 'link' = 'primary';
  @Input() disabled: boolean = false;
  @Input() leftSection: string | undefined = '';
  @Input() rightSection: string | undefined = '';

  @Output() clickBtn = new EventEmitter<void>();

  variants = {
    primary: 'btn btn-primary',
    outline: 'btn btn-outline',
    link: 'btn btn-link',
  };

  onClick() {
    if (!this.disabled) {
      this.clickBtn.emit();
    }
  }
}
