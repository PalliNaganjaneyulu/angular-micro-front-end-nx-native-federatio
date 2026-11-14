import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  Ui,
  UiInput,
  UiDropdown,
  UiTable,
  UiModal,
  ConfirmationDialog
} from '@my-mfe-workspace/ui';

import type {
  DropdownOption,
  TableColumn,
  TableRow,
} from '@my-mfe-workspace/ui';

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    Ui,
    UiInput,
    UiDropdown,
    UiTable,
    UiModal,
    ConfirmationDialog
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'user-management';
  isModalOpen = false;
  isConfirmationOpen = false;
  searchValue = '';
  selectedRole = '';

  roles: DropdownOption[] = [
    { label: 'Admin', value: 'admin' },
    { label: 'Provider', value: 'provider' },
    { label: 'Consumer', value: 'consumer' },
    { label: 'Bank', value: 'bank' },
  ];

  userColumns: TableColumn[] = [
    { key: 'userId', label: 'User ID' },
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' },
  ];

  users: TableRow[] = [
    {
      userId: 'USR001',
      name: 'Rahul',
      role: 'Admin',
      status: 'Active',
    },
    {
      userId: 'USR002',
      name: 'Priya',
      role: 'Provider',
      status: 'Active',
    },
    {
      userId: 'USR003',
      name: 'Arun',
      role: 'Consumer',
      status: 'Inactive',
    },
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



  openAddUserModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  saveUser(): void {
    console.log('User saved successfully');

    this.closeModal();
  }
  openDeleteConfirmation(): void {
    this.isConfirmationOpen = true;
  }

  closeDeleteConfirmation(): void {
    this.isConfirmationOpen = false;
  }

  deleteUser(): void {
    console.log('User deletion confirmed');

    this.closeDeleteConfirmation();
  }
}