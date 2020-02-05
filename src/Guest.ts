import {Hotel} from "../src/Hotel"

export class Guest {

    constructor(guestName: string, private dietaryRequirements: string) {}

    canEatFish() : boolean {
        return this.dietaryRequirements === 'pescetarian' || this.dietaryRequirements === 'none';
    }
}