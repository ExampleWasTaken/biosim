import ActionNode from './ActionNode.ts';

class MoveRandomActionNode extends ActionNode {
  private readonly name: string;
  private readonly id: number;

  constructor(id: number) {
    super();
    this.name = 'Mrn';
    if (id < 0 || id > 127) {
      throw Error('Neuron/Node id must be a seven bit integer (0-127).');
    }
    this.id = id;
  }

  getName(): string {
    return this.name;
  }

  getId(): number {
    return this.id;
  }
}

export default MoveRandomActionNode;
