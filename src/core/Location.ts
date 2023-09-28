import Grid from './grid/Grid.ts';

class Location {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  getX(): number {
    return this.x;
  }

  setX(x: number): void {
    this.x = x;
  }

  getY(): number {
    return this.y;
  }

  setY(y: number): void {
    this.y = y;
  }

  static exists(x: number, y: number, grid: Grid): boolean {
    return x <= grid.getWidthAndHeight() && y <= grid.getWidthAndHeight();
  }
}

export default Location;
