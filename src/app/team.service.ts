import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Team } from './model/team';
import { TEAMS } from '../db-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teamsUrl = 'api/teams';  // URL to web api

  constructor(private http: HttpClient,) { 

    }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamsUrl)
  }
}
