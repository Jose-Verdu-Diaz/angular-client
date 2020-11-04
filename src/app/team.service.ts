import { Injectable } from '@angular/core';
import { Team } from './model/team';
import { TEAMS } from '../db-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  getTeams(): Observable<Team[]> {
    return of(TEAMS);
  }
}
