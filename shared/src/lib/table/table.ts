import { Component, input } from '@angular/core';

export interface TableColumn {
    key: string;
    label: string;
}

export type TableRow = Record<string, string | number>;

@Component({
    selector: 'shared-table',
    standalone: true,
    templateUrl: './table.html',
    styleUrl: './table.scss',
})
export class UiTable {
    columns = input<TableColumn[]>([]);
    rows = input<TableRow[]>([]);
    emptyMessage = input<string>('No records found');
}