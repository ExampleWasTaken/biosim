import Gene from './creature/genome/Gene.ts';
import Brain from './creature/brain/Brain.ts';
import Location from './Location.ts';
import ICreature from './creature/ICreature.ts';

class Dog implements ICreature {
  private readonly brain: Brain;
  private readonly genome: Gene[];
  private location: Location;

  constructor(brain: Brain, genome: Gene[], spawnLocation: Location) {
    this.brain = brain;
    this.genome = genome;
    this.location = spawnLocation;
  }

  getBrain(): Brain {
    return this.brain;
  }
  getGenomes(): Gene[] {
    return this.genome;
  }

  getLocation(): Location {
    return this.location;
  }

  move(location: Location): void {
    this.location = location;
  }
}

export default Dog;
