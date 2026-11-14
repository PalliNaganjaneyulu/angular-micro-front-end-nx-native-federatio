import { Component, input, output } from '@angular/core';

@Component({
    selector: 'shared-modal',
    standalone: true,
    templateUrl: './modal.html',
    styleUrl: './modal.scss',
})
export class UiModal {
    open = input<boolean>(false);
    title = input<string>('Modal');
    size = input<'small' | 'medium' | 'large'>('medium');

    closed = output<void>();

    onClose(): void {
        this.closed.emit();
    }

    onBackdropClick(event: MouseEvent): void {
        if (event.target === event.currentTarget) {
            this.onClose();
        }
    }
}