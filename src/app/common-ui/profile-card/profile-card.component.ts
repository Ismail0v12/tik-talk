import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/ionicons';
import { heroUsers } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-profile-card',
  imports: [ButtonComponent],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {}
