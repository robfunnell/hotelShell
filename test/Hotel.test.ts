import {expect} from 'chai';
import {Random} from "../utils/Random";
import {Hotel} from "../src/Hotel";
import {Room} from "../src/Room";

describe("Hotel", () => {
  let hotel;

  const room = new Room(1);

  beforeEach(() => {
    hotel = new Hotel("testHotel", 2);
  });



  it ('should create an array with two rooms', () => {
    expect(hotel.findAvailableRooms()).to.eql([{isRoomAvailable: true, roomID: 1, guestName: ""}, {isRoomAvailable: true, roomID: 2, guestName: ""}])
  });

  it ('should check in a guest', () => {
    hotel.checkIn("Kenny");
    expect(hotel.storedRooms[0]).to.eql({isRoomAvailable: false, roomID: 1, guestName: "Kenny"})
  });

  it ('should not return occupied room', () => {
    hotel.checkIn("Kenny");
    expect(hotel.findAvailableRooms()).to.eql([{isRoomAvailable: true, roomID: 2, guestName: ""}])
  });

  it ('should fail to return any rooms', () => {
    hotel.checkIn("Kenny");
    hotel.checkIn("Stan");
    expect(hotel.findAvailableRooms()).to.eql(console.log("No room in the inn!"))
  });

  it ('should check out guest', () => {
    hotel.checkIn("Kenny");
    hotel.checkIn("Stan");
    hotel.checkOut(1);
    expect(hotel.findAvailableRooms()).to.eql([{isRoomAvailable: true, roomID: 1, guestName: ""}])
  });




//
//   it ('should be created with no guests', () => {
//     expect(hotel.storedGuests).to.eql([])
//   });
//
//   it ('should check in guests', () => {
//     hotel.checkInGuest("John", "Seafood");
//     hotel.checkInGuest("Derek", "Pineapple");
//     expect(hotel.storedGuests).to.eql([{name: "John", diet: "Seafood", hotel: "testHotel"}, {name: "Derek", diet: "Pineapple", hotel: "testHotel"}]);
//     });
//
//   it ('should show an error when same guest checks in twice', () => {
//     hotel.checkInGuest("John", "Purple");
//     hotel.checkInGuest("John",  "Purple");
//     expect(hotel.storedGuests).to.eql([{name: "John", diet: "Purple", hotel: "testHotel"}]);
//   });
//
//   it ('should not check in guests if there are not enough free rooms', () => {
//     let smallHotel;
//     smallHotel = new Hotel("testHotel", 0);
//     const guestOne = Random.string();
//     smallHotel.checkInGuest("Kenny", "Death");
//     expect(smallHotel.storedGuests).to.eql([])
//   });
//
//   it ('will reduce available room count by 1 when a guest successfully checks in', () => {
//     const guestOne = Random.string();
//     hotel.checkInGuest("Billy", "Can't eat");
//     console.log(hotel.availableRooms);
//     expect(hotel.availableRooms).to.eql(99);
//   });
//
//   it ('will checkout a guest', () => {
//     hotel.checkInGuest("John",  "Purple");
//     console.log(hotel.storedGuests);
//     hotel.checkOutGuest("John");
//     console.log(hotel.storedGuests);
//     expect(hotel.storedGuests).to.eql([]);
//   })
});




