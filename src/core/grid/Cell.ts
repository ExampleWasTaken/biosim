import TOccupier from '../TOccupier.ts';
import Location from '../Location.ts';

class Cell {
  private occupier: TOccupier;
  private readonly location: Location;

  constructor(location: Location) {
    this.occupier = null;
    this.location = location;
  }

  getOccupier(): TOccupier {
    return this.occupier;
  }

  setOccupier(occupier: TOccupier): void {
    this.occupier = occupier;
  }

  getLocation(): Location {
    return this.location;
  }
}

export default Cell;
