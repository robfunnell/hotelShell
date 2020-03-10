export class Room {
    public isRoomAvailable: boolean = true;
    public guestInfo: object;
    constructor(public roomID: number) {
    }
    public roomCheck() {
        return this.isRoomAvailable;
        }
    }