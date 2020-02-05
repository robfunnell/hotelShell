import { expect } from "chai";
import {Guest} from "../src/Guest";

describe('Guest', () => {
    const guest1 = new Guest('jeremy', 'pescetarian');
    const guest2 = new Guest('edgar', 'vegan');
    const guest3 = new Guest('albert', 'none');

    it('should return true if they can eat fish', () => {
      expect(guest1.canEatFish()).to.eql(true);
      expect(guest3.canEatFish()).to.eql(true);
  });

  it('should return false if they cannot eat fish', () => {
      expect(guest2.canEatFish()).to.eql(false);
  });
});