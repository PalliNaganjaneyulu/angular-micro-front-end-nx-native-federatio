
import { Component, input } from '@angular/core';

export type LoaderSize = 'small' | 'medium' | 'large';

@Component({
    selector: 'shared-loader',
    standalone: true,
    templateUrl: './loader.html',
    styleUrl: './loader.scss',
})
export class UiLoader {
    show = input<boolean>(true);
    message = input<string>('Loading...');
    size = input<LoaderSize>('medium');
    overlay = input<boolean>(false);
}
