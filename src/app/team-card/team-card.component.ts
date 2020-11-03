import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../model/team';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {

  @Input()
  team: Team;

  @Input()
  teamIndex: number;

  constructor() { }

  ngOnInit(): void {
  }

}
