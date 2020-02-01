export class Hotel {
  public storedGuests: any[] = [];
  public _rooms: number;
  public _availableRooms: number;

  constructor(rooms: number) {
    this._rooms = rooms;
    this._availableRooms = rooms;
  }

  get availableRooms() {
    return this._availableRooms;
  }

  set availableRooms(num) {
    if (this.availableRooms > 0 && this.availableRooms <= this._rooms) {
      this._availableRooms --;
    }
    else {
      console.log(`No room left!`);
    }
  }


  public checkInGuest(guest: { name: string }) {
    const hotelGuest = this.storedGuests.some(storedGuest => {
      return storedGuest.name === guest.name
    });

    if (hotelGuest === true) {
      console.log(`You're already checked in!`);
    }
    else if (this.availableRooms === 0) {
      console.log(`Piss off!`);
    }
    else {
      this.availableRooms --;
      this.storedGuests.push(guest);
    }
  }
}