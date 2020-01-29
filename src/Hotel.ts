export class Hotel {
  public storedGuests: any[] = [];

  constructor(_rooms: number) {}

  public checkInGuest(guest: { name: string }){
    const hotelGuest = this.storedGuests.some(storedGuest => {
      return storedGuest.name===guest.name} );

   if (hotelGuest) {
      console.log("You're already checked in!");
    }
    else {
      this.storedGuests.push(guest);
      }
  }
}