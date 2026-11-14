import { Component, input, output } from '@angular/core';

export interface DropdownOption {
    label: string;
    value: string;
}

@Component({
    selector: 'shared-dropdown',
    standalone: true,
    templateUrl: './dropdown.html',
    styleUrl: './dropdown.scss',
})
export class UiDropdown {
    id = input<string>('shared-dropdown');
    label = input<string>('');
    placeholder = input<string>('Select an option');
    options = input<DropdownOption[]>([]);
    value = input<string>('');
    disabled = input<boolean>(false);
    required = input<boolean>(false);

    valueChange = output<string>();

    onChange(event: Event): void {
        const target = event.target as HTMLSelectElement;
        this.valueChange.emit(target.value);
    }
}