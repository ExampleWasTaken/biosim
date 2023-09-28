import Cell from './Cell.ts';
import Location from '../Location.ts';

class Grid {
  private readonly widthAndHeight: number;
  private readonly cells: Cell[];

  constructor(widthAndHeight: number) {
    this.widthAndHeight = widthAndHeight;
    this.cells = [];

    for (let i = 0; i <= widthAndHeight; i++) {
      for (let ii = 0; ii <= widthAndHeight; ii++) {
        this.cells.push(new Cell(new Location(i, ii)));
      }
    }
  }

  getWidthAndHeight(): number {
    return this.widthAndHeight;
  }

  getCell(location: Location): Cell {
    let cell = this.cells[0];
    for (const current of this.cells) {
      if (current.getLocation() === location) {
        cell = current;
        break;
      }
    }
    return cell;
  }

  getCells(): Cell[] {
    return this.cells;
  }
}

export default Grid;
