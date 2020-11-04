import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Team } from './model/team';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const teams = [
      {
        id: 1,
        name: 'Mercedes-AMG Petronas Motorsport',
        country: 'Germany',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Mercedes_AMG_Petronas_F1_Logo.svg/512px-Mercedes_AMG_Petronas_F1_Logo.svg.png'
      }, 
      {
        id: 2,
        name: 'Scuderia Ferrari',
        country: 'Italy',
        imageURL: 'https://i.pinimg.com/originals/5f/04/74/5f0474364e4ba995fbb9e3cebb5c369a.png'
      },  
      {
        id: 3,
        name: 'Aston Martin Red Bull Racing Honda',
        country: 'Austria',
        imageURL: 'https://cdn.motorlat.com/administrator/uploads/5972_image1-1.png'
      }
    ];
    return {teams};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(teams: Team[]): number {
    return teams.length > 0 ? Math.max(...teams.map(team => team.id)) + 1 : 11;
  }
}
