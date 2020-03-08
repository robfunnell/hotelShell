import {expect} from 'chai';
import {Random} from "../utils/Random";
import {Hotel} from "../src/Hotel";
import {Room} from "../src/Room";

describe("Hotel", () => {
    let hotel;

    beforeEach(() => {
        hotel = new Hotel("testHotel", 2);
    });



    it ('should check in a guest', () => {
        hotel.checkIn("Kenny");
        expect(hotel.storedRooms[0]).to.eql({isRoomAvailable: false, roomID: 1, guestName: "Kenny"})
    });
});