import { Component, input, output } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

@Component({
  selector: 'shared-ui',
  standalone: true,
  templateUrl: './ui.html',
})
export class Ui {
  label = input<string>('Click Me');
  variant = input<ButtonVariant>('primary');
  disabled = input<boolean>(false);

  clicked = output<void>();

  protected readonly baseClasses =
    'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

  protected readonly variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-blue-700 text-white hover:bg-blue-800 focus-visible:ring-blue-500',
    secondary: 'bg-slate-100 text-slate-800 hover:bg-slate-200 focus-visible:ring-slate-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
    success: 'bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-500',
  };
}