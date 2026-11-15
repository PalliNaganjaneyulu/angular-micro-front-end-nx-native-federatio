import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ui } from '@my-mfe-workspace/ui';

@Component({
  selector: 'app-root',
  imports: [RouterModule, Ui],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'dashboard';

  onSave(): void {
    console.log('Save button clicked');
  }
  deleteUser() {
    console.log('Delete User button clicked');
  }
  approveUser() {
    console.log('Approve button clicked');
  }
}