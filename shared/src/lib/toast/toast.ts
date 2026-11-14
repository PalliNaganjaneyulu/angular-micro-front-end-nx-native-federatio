
import { Component, effect, input, output } from '@angular/core';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export type ToastPosition =
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left';

@Component({
    selector: 'shared-toast',
    standalone: true,
    templateUrl: './toast.html',
    styleUrl: './toast.scss',
})
export class UiToast {
    show = input<boolean>(false);
    message = input<string>('');
    type = input<ToastType>('success');
    duration = input<number>(3000);
    position = input<ToastPosition>('top-right');

    dismissed = output<void>();

    constructor() {
        effect((onCleanup) => {
            if (!this.show() || this.duration() <= 0) {
                return;
            }

            const timeoutId = setTimeout(() => {
                this.dismissed.emit();
            }, this.duration());

            onCleanup(() => clearTimeout(timeoutId));
        });
    }

    onClose(): void {
        this.dismissed.emit();
    }
}
