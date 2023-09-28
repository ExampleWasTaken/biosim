import IEntity from '../../IEntity.ts';
import Grid from '../../grid/Grid.ts';

class SensingData {
  private readonly entity: IEntity;
  private readonly grid: Grid;

  constructor(entity: IEntity, grid: Grid) {
    this.entity = entity;
    this.grid = grid;
  }

  getEntity(): IEntity {
    return this.entity;
  }

  getGrid(): Grid {
    return this.grid;
  }
}

export default SensingData;
