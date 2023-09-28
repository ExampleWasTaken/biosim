import SensoryNode from './SensoryNode.ts';
import SensingData from '../../SensingData.ts';

class LeftBorderDistanceNode extends SensoryNode {
  private readonly name: string;
  private readonly id: number;

  constructor(id: number) {
    super();
    this.name = 'BDl';
    if (id < 0 || id > 127) {
      throw Error('Neuron/Node id must be a seven bit integer (0-127).');
    }
    this.id = id;
  }

  receiveSensingData(data: SensingData): number {
    const distance = data.getEntity().getLocation().getX();
    return Math.tanh(distance);
  }

  getName(): string {
    return this.name;
  }

  getId(): number {
    return this.id;
  }
}

export default LeftBorderDistanceNode;
