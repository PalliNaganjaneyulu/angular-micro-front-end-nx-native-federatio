
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonDirective } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { UserCard, Ui } from '@my-mfe-workspace/ui';

@Component({
  selector: 'app-root',
  imports: [RouterModule, ButtonDirective, InputText, UserCard, Ui],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App { }
