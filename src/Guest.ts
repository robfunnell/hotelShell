export class Guest {
    public guestBill: number;
    constructor(public guestName: string, public stayDuration: number) {
        this.guestBill = stayDuration * 100;
    }
}