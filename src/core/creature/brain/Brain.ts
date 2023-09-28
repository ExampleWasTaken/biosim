import SensoryNode from './nodes/sensory/SensoryNode.ts';
import InnerNode from './nodes/inner/InnerNode.ts';
import ActionNode from './nodes/action/ActionNode.ts';
import BottomBorderDistanceNode from './nodes/sensory/BottomBorderDistanceNode.ts';
import LeftBorderDistanceNode from './nodes/sensory/LeftBorderDistanceNode.ts';
import TopBorderDistanceNode from './nodes/sensory/TopBorderDistanceNode.ts';
import RightBorderDistanceNode from './nodes/sensory/RightBorderDistanceNode.ts';
import XLocationSensoryNode from './nodes/sensory/XLocationSensoryNode.ts';
import YLocationSensoryNode from './nodes/sensory/YLocationSensoryNode.ts';
import MoveDownActionNode from './nodes/action/MoveDownActionNode.ts';
import MoveLeftActionNode from './nodes/action/MoveLeftActionNode.ts';
import MoveRandomActionNode from './nodes/action/MoveRandomActionNode.ts';
import MoveRightActionNode from './nodes/action/MoveRightActionNode.ts';
import MoveUpActionNode from './nodes/action/MoveUpActionNode.ts';
import { Settings } from '../../../global/settings.ts';

class Brain {
  private readonly inputNodes: SensoryNode[];
  private readonly innerNodes: InnerNode[];
  private readonly outputNodes: ActionNode[];

  constructor() {
    this.inputNodes = [
      new BottomBorderDistanceNode(0x00),
      new LeftBorderDistanceNode(0x01),
      new TopBorderDistanceNode(0x02),
      new RightBorderDistanceNode(0x03),
      new XLocationSensoryNode(0x04),
      new YLocationSensoryNode(0x05),
    ];
    this.outputNodes = [
      new MoveDownActionNode(0x06),
      new MoveLeftActionNode(0x07),
      new MoveRandomActionNode(0x08),
      new MoveRightActionNode(0x09),
      new MoveUpActionNode(0x0a),
    ];

    this.innerNodes = [];
    for (let i = 0; i <= Settings.innerNeuronsSize; i++) {
      this.innerNodes.push(new InnerNode(i));
    }
  }

  getInputNodes(): SensoryNode[] {
    return this.inputNodes;
  }

  getInnerNodes(): InnerNode[] {
    return this.innerNodes;
  }

  getOutputNodes(): ActionNode[] {
    return this.outputNodes;
  }
}

export default Brain;
