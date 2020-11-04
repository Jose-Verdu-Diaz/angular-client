import { Injectable } from '@angular/core';
import { Team } from './model/team';
import { TEAMS } from '../db-data';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  getTeams(): Team[] {
    return TEAMS;
  }
}
