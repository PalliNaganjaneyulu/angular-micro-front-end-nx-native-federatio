import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  Ui,
  UiInput,
  UiDropdown,
} from '@my-mfe-workspace/ui';

import type { DropdownOption } from '@my-mfe-workspace/ui';

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    Ui,
    UiInput,
    UiDropdown,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'user-management';

  searchValue = '';
  selectedRole = '';

  roles: DropdownOption[] = [
    { label: 'Admin', value: 'admin' },
    { label: 'Provider', value: 'provider' },
    { label: 'Consumer', value: 'consumer' },
    { label: 'Bank', value: 'bank' },
  ];

  onAddUser(): void {
    console.log('Add User button clicked');
  }

  onSearch(value: string): void {
    this.searchValue = value;
    console.log('Search value:', value);
  }

  onRoleChange(value: string): void {
    this.selectedRole = value;
    console.log('Selected role:', value);
  }
}