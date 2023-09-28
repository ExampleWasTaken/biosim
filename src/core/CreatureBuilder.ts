import Location from './Location.ts';
import Dog from './Dog.ts';
import Gene from './creature/genome/Gene.ts';
import Brain from './creature/brain/Brain.ts';
import { Settings } from '../global/settings.ts';
import Grid from './grid/Grid.ts';
import Calc from './utils/Calc.ts';

class CreatureBuilder {
  private grid: Grid;

  constructor(grid: Grid) {
    this.grid = grid;
  }
  dog(): Dog {
    const brain = new Brain();
    const genome = this.generateGenomes(brain);
    const spawnLocation = this.findSpawnLocation(this.grid);

    return new Dog(brain, genome, spawnLocation);
  }

  getGrid(): Grid {
    return this.grid;
  }

  setGrid(grid: Grid): void {
    this.grid = grid;
  }

  private generateGenomes(brain: Brain): Gene[] {
    const genome: Gene[] = [];
    for (let i = 0; i <= Settings.genomeLength; i++) {
      genome.push(new Gene(brain));
    }
    return genome;
  }

  private findSpawnLocation(grid: Grid): Location {
    const location = new Location(0, 0);
    do {
      const x = Calc.randomInt(0, grid.getWidthAndHeight());
      const y = Calc.randomInt(0, grid.getWidthAndHeight());
      location.setX(x);
      location.setY(y);
    } while (grid.getCell(location).getOccupier() !== null);
    return location;
  }
}

export default CreatureBuilder;
