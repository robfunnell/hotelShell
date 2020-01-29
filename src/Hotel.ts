export class Hotel {
  public guests: any[] = [];

  constructor(_rooms: number) {}

  public checkInGuest(guest: { name: string }){
    this.guests.push(guest);
  }
}