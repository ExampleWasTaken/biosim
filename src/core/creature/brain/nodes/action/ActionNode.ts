import INode from '../INode.ts';
import NodeType from '../NodeType.ts';

abstract class ActionNode implements INode {
  protected compute(): number {
    const sum = 0;
    return Math.tanh(sum);
  }

  abstract getName(): string;
  abstract getId(): number;

  getType(): NodeType {
    return NodeType.ACTION;
  }
}

export default ActionNode;
