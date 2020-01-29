import {expect} from 'chai';
import {Random} from "../utils/Random";
import {Hotel} from "../src/Hotel";

describe("Hotel", () => {
  let hotel;

  beforeEach(() => {
    hotel = new Hotel(100);
  });

  it ('should be created with no guests', () => {
    expect(hotel.guests).to.eql([])
  });

  it ('should check in guests', () => {
    const guestOne = Random.string();
    const guestTwo = Random.string();
    hotel.checkInGuest({name: guestOne});
    hotel.checkInGuest({name: guestTwo});
    expect(hotel.guests).to.eql([{name: guestOne}, {name: guestTwo}]);
    });
});
