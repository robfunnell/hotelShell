export class Room {
    public isRoomAvailable: boolean = true;
    public guestInfo: object;
    public roomID: number;
    constructor(roomID: number) {
        this.roomID = roomID;
    }
}