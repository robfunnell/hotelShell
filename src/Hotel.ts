import {Room} from "./Room";
import {Guest} from "./Guest"


export class Hotel {
  public storedRooms: Room[] = [];

  constructor(private hotelName: string, public roomNumber: number) {
    for(let i=1; i<=roomNumber; i++) {
      this.storedRooms.push(new Room(i))
    }
  }

  public areThereRooms() {
    for (let i in this.storedRooms) {
      if (this.storedRooms[i].roomCheck()) {
        return true
      }
    }
    return false
  }

  public findFreeRoom() {
    if (!this.areThereRooms()) {
      return false
    }
    let freeRoom =  this.storedRooms.find( ({isRoomAvailable}) => isRoomAvailable === true);
    return freeRoom.roomID;
  }

  public checkIn(name: string, lengthOfStay: number) {
    let freeRoomID = this.findFreeRoom();
    if (!freeRoomID) {
      console.log("Error: no available rooms.");
      return
    }
    for (let i in this.storedRooms) {
      if (this.storedRooms[i].roomID === freeRoomID) {
        this.storedRooms[i].guestInfo = new Guest(name, lengthOfStay);
        this.storedRooms[i].isRoomAvailable = false;
      }
    }
  }

  public checkOut(roomNumber: number) {
    for (let i in this.storedRooms) {
      if (this.storedRooms[i].roomID === roomNumber) {
        console.log(this.storedRooms[i]);
        this.storedRooms[i].isRoomAvailable = true;
        delete this.storedRooms[i].guestInfo;
      }
    }
  }

  public findAvailableRooms() {
    if (this.areThereRooms()) {
      return this.storedRooms.filter(room => room.isRoomAvailable)
    } else {
      console.log("No room in the inn!");
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