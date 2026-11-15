import { Component, input } from '@angular/core';
import { Card } from 'primeng/card';

@Component({
  selector: 'shared-user-card',
  standalone: true,
  imports: [Card],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  name = input<string>('John Doe');
  email = input<string>('john@example.com');
  role = input<string>('Admin');
  status = input<string>('Active');
}