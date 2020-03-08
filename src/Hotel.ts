import {Room} from "./Room";


export class Hotel {
  public storedRooms: Room[] = [];

  constructor(private hotelName: string, private roomNumber: number) {
    for(let i=1; i<=roomNumber; i++) {
      this.storedRooms.push(new Room(i))
    }
  }

    public findFreeRoom() {
      let freeRoom =  this.storedRooms.find( ({isRoomAvailable}) => isRoomAvailable === true);
      return freeRoom.roomID;
    }



    public findAvailableRooms() {
        let freeRooms = this.storedRooms.filter(room => room.isRoomAvailable);
        if (freeRooms.length > 0) {
          return freeRooms
        }
        else {
          console.log("No room in the inn!");
        }
    }



    public checkIn(name: string) {
      let freeRoomID = this.findFreeRoom();
      for (let i in this.storedRooms) {
        if (this.storedRooms[i].roomID === freeRoomID) {
          this.storedRooms[i].guestName = name;
          this.storedRooms[i].isRoomAvailable = false;
        }
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