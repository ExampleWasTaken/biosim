import INode from '../INode.ts';
import NodeType from '../NodeType.ts';

class InnerNode implements INode {
  private readonly name: string;
  private readonly id: number;

  constructor(id: number) {
    this.name = id.toString();
    if (id < 0 || id > 127) {
      throw Error('Neuron/Node id must be a seven bit integer (0-127).');
    }
    this.id = id;
  }

  compute(): number {
    const sum = 0;
    return sum;
  }

  getName(): string {
    return this.name;
  }

  getId(): number {
    return this.id;
  }

  getType(): NodeType {
    return NodeType.INNER;
  }
}

export default InnerNode;
