export class Hotel {
  public storedGuests: any[] = [];
  public _rooms: number;
  public _availableRooms: number;
  public _hotelName: string;

  constructor(hotelName: string, rooms: number) {
    this._rooms = rooms;
    this._availableRooms = rooms;
    this._hotelName = hotelName
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

  public newGuest (name: string, diet: string) {
    return {
    name,
      diet,
      hotel: this._hotelName,
    }
  }

  public checkInGuest(name, diet) {
    const guestToCheckIn = this.newGuest(name, diet);
    const checkExistingGuests = this.storedGuests.some(storedGuest => {
      return storedGuest.name === guestToCheckIn.name
    });

    if (checkExistingGuests === true) {
      console.log(`You're already checked in!`);
    }
    else if (this.availableRooms === 0) {
      console.log(`Piss off!`);
    }
    else {
      this.availableRooms --;
      this.storedGuests.push(guestToCheckIn);
    }
  }

  public checkOutGuest(guestName: string) {
    this.storedGuests = this.storedGuests.filter(guest => {
      return guest.name != guestName
    });
  }
}