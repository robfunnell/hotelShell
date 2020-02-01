export class Hotel {
  public storedGuests: any[] = [];
  public _rooms: number;

  constructor(rooms: number) {
    this._rooms = rooms;
  }

  get rooms() {
    return this._rooms;
  }

  set rooms(num) {
    if (this._rooms > 0) {
      this._rooms --
    }
    else {
      console.log(`Piss off!`);
    }
  }


  public checkInGuest(guest: { name: string }) {
    const hotelGuest = this.storedGuests.some(storedGuest => {
      return storedGuest.name === guest.name
    });

    if (hotelGuest === true) {
      console.log(`You're already checked in!`);
    }
    else if (this.rooms === 0) {
      console.log(`Fuck off!`);
    }
    else {
      this.rooms --;
      this.storedGuests.push(guest);
    }
  }
}