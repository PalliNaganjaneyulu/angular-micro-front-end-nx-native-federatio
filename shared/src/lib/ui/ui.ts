import { Component, input, output } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

@Component({
  selector: 'shared-ui',
  standalone: true,
  templateUrl: './ui.html',
  styleUrl: './ui.scss',
})
export class Ui {
  label = input<string>('Click Me');
  variant = input<ButtonVariant>('primary');
  disabled = input<boolean>(false);

  clicked = output<void>();
}