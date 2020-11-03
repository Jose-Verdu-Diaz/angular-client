export const TEAMS: any = [
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


export function findTeamById(teamId:number) {
    return TEAMS.find(team => team.id == teamId);
}