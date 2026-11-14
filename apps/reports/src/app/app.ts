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
  protected title = 'reports';

  onDownloadReport(): void {
    console.log('Download Report button clicked');
  }
}