import SensoryNode from './SensoryNode.ts';
import SensingData from '../../SensingData.ts';

class BottomBorderDistanceNode extends SensoryNode {
  private readonly name: string;
  private readonly id: number;

  constructor(id: number) {
    super();
    this.name = 'BDb';
    if (id < 0 || id > 127) {
      throw Error('Neuron/Node id must be a seven bit integer (0-127).');
    }
    this.id = id;
  }

  receiveSensingData(data: SensingData): number {
    const distance =
      data.getGrid().getWidthAndHeight() -
      data.getEntity().getLocation().getY();
    return Math.tanh(distance);
  }

  getName(): string {
    return this.name;
  }

  getId(): number {
    return this.id;
  }
}

export default BottomBorderDistanceNode;
