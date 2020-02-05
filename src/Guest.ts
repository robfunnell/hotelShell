import {Hotel} from "../src/Hotel"

export class Guest {

    constructor(guestName: string, private dietaryRequirements: any []) {}

    canEatFish() : boolean {
        const cannotEatFish = ['fish allergy', 'vegetarian', 'vegan'];
        return !(this.dietaryRequirements.some(r => cannotEatFish.includes(r)));
    }

    canEatMeat() : boolean {
        const cannotEatMeat = ['meat allergy', 'vegetarian', 'vegan'];
        return !(this.dietaryRequirements.some(r => cannotEatMeat.includes(r)));
    }
}