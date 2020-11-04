import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../model/team';
import {TeamService} from '../team.service';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {

  teams: Team[];

  @Input()
  team: Team;

  @Input()
  teamIndex: number;

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams()
      .subscribe(teams => this.teams = teams);
    
  }
}
