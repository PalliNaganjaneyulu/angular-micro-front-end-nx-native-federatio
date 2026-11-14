import { Component, input, output } from '@angular/core';

@Component({
  selector: 'shared-input',
  standalone: true,
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class UiInput {
  id = input<string>('shared-input');
  label = input<string>('');
  type = input<string>('text');
  placeholder = input<string>('Enter value');
  value = input<string>('');
  disabled = input<boolean>(false);
  required = input<boolean>(false);

  valueChange = output<string>();

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }
}