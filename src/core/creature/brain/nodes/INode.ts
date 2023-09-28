import NodeType from './NodeType.ts';

interface INode {
  getType(): NodeType;
  getName(): string;
  getId(): number;
}

export default INode;
