import {Room} from "./Room";


export class Hotel {
  public storedRooms: Room[] = [];

  constructor(private hotelName: string, private roomNumber: number) {
    for(let i=1; i<=roomNumber; i++) {
      this.storedRooms.push(new Room(i))
    }
  }

    public findAvailableRooms() {
        return this.storedRooms.filter(room => room.isRoomAvailable)
    }

    public checkIn(name: string) {
    let freeRooms = this.storedRooms.filter(room => room.isRoomAvailable);
    if (freeRooms.length > 0) {
        let allocatedRoom = (freeRooms[0].roomID - 1);
        this.storedRooms[allocatedRoom].guestName = name;
        this.storedRooms[allocatedRoom].isRoomAvailable = false;
      }
      else {
        console.log("No room!")
      }
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