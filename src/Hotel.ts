import {Room} from "./Room";


export class Hotel {
  public storedGuests: any[] = [];
  public storedRooms: Room[] = [];
  public _availableRooms: number;

  constructor(private hotelName: string, private roomNumber: number) {
    for(let i=1; i<=roomNumber; i++) {
      this.storedRooms.push(new Room(i))
    }
  }

    public findAvailableRooms() {
        return this.storedRooms
    }

 // createRooms() {
 //    for (let i = 1; i <= this.rooms; i++) {
 //      this.storedRooms.push({roomNumber: i, inService: true})
 //    }
 //  }
 //
 //  public newGuest (name: string, diet: string) {
 //    return {
 //    name,
 //      diet,
 //      hotel: this.hotelName,
 //    }
 //  }
 //
 //
 //  public checkInGuest(name, diet) {
 //    const guestToCheckIn = this.newGuest(name, diet);
 //    const checkExistingGuests = this.storedGuests.some(storedGuest => {
 //      return storedGuest.name === guestToCheckIn.name
 //    });
 //
 //    if (checkExistingGuests === true) {
 //      console.log(`You're already checked in!`);
 //    }
 //    else if (this.availableRooms === 0) {
 //      console.log(`Piss off!`);
 //    }
 //    else {
 //      this.availableRooms --;
 //      this.storedGuests.push(guestToCheckIn);
 //    }
 //  }
 //
 //  public checkOutGuest(guestName: string) {
 //    this.storedGuests = this.storedGuests.filter(guest => {
 //      return guest.name != guestName
 //    });
 //  }
}