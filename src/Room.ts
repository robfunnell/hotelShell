export class Room {
    public isRoomAvailable: boolean = true;
    public roomID: number;
    constructor(roomID: number) {
        this.roomID = roomID;
    }
}