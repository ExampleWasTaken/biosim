import INode from '../INode.ts';
import NodeType from '../NodeType.ts';
import SensingData from '../../SensingData.ts';

abstract class SensoryNode implements INode {
  abstract receiveSensingData(data: SensingData): number;
  abstract getName(): string;
  abstract getId(): number;

  getType(): NodeType {
    return NodeType.SENSORY;
  }
}

export default SensoryNode;
