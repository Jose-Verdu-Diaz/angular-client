import { Component } from '@angular/core';
import { TEAMS } from 'src/db-data';
import { Team } from './model/team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  teams: Team[] = TEAMS;
}
