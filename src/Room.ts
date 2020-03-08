export class Room {
    public isRoomAvailable: boolean = true;
    public guestName: string = "";
    public roomID: number;
    constructor(roomID: number) {
        this.roomID = roomID;
    }
}