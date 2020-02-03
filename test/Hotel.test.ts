import {expect} from 'chai';
import {Random} from "../utils/Random";
import {Hotel} from "../src/Hotel";

describe("Hotel", () => {
  let hotel;

  beforeEach(() => {
    hotel = new Hotel("testHotel", 100);
    console.log(hotel._rooms);
  });

  it ('should be created with no guests', () => {
    expect(hotel.storedGuests).to.eql([])
  });

  it ('should check in guests', () => {
    hotel.checkInGuest("John", "Seafood");
    hotel.checkInGuest("Derek", "Pineapple");
    expect(hotel.storedGuests).to.eql([{name: "John", diet: "Seafood", hotel: "testHotel"}, {name: "Derek", diet: "Pineapple", hotel: "testHotel"}]);
    });

  it ('should show an error when same guest checks in twice', () => {
    hotel.checkInGuest("John", "Purple");
    hotel.checkInGuest("John",  "Purple");
    expect(hotel.storedGuests).to.eql([{name: "John", diet: "Purple", hotel: "testHotel"}]);
  });

  it ('should not check in guests if there are not enough free rooms', () => {
    let smallHotel;
    smallHotel = new Hotel("testHotel", 0);
    const guestOne = Random.string();
    smallHotel.checkInGuest("Kenny", "Death");
    expect(smallHotel.storedGuests).to.eql([])
  });

  it ('will reduce available room count by 1 when a guest successfully checks in', () => {
    const guestOne = Random.string();
    hotel.checkInGuest("Billy", "Can't eat");
    console.log(hotel.availableRooms);
    expect(hotel.availableRooms).to.eql(99);
  });

  it ('will checkout a guest', () => {
    hotel.checkInGuest("John",  "Purple");
    console.log(hotel.storedGuests);
    hotel.checkOutGuest("John");
    console.log(hotel.storedGuests);
    expect(hotel.storedGuests).to.eql([]);
  })
});




