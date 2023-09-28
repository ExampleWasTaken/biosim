import ConnectionType from './ConnectionType.ts';
import Calc from '../../../utils/Calc.ts';
import INode from '../nodes/INode.ts';

class Connection {
  private readonly type: ConnectionType;
  private readonly weight: number;
  private readonly source: INode;
  private readonly destination: INode;

  constructor(source: INode, destination: INode) {
    this.type =
      Calc.random(0, 1) === 0
        ? ConnectionType.EXCITATORY
        : ConnectionType.INHIBITORY;
    this.weight = Calc.random(-4, 4);
    this.source = source;
    this.destination = destination;
  }

  compute(input: number): number {
    return input * this.weight;
  }

  getType(): ConnectionType {
    return this.type;
  }

  getWeight(): number {
    return this.weight;
  }

  getSource(): INode {
    return this.source;
  }

  getDestination(): INode {
    return this.destination;
  }
}

export default Connection;
