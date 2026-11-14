
import { Component, input, output } from '@angular/core';

export type ConfirmationType = 'danger' | 'warning' | 'info';

@Component({
    selector: 'shared-confirmation-dialog',
    standalone: true,
    templateUrl: './confirmation-dialog.html',
    styleUrl: './confirmation-dialog.scss',
})
export class ConfirmationDialog {
    open = input<boolean>(false);
    title = input<string>('Are you sure?');
    message = input<string>('Please confirm this action.');
    confirmText = input<string>('Confirm');
    cancelText = input<string>('Cancel');
    type = input<ConfirmationType>('warning');

    confirmed = output<void>();
    cancelled = output<void>();

    onConfirm(): void {
        this.confirmed.emit();
    }

    onCancel(): void {
        this.cancelled.emit();
    }
}
