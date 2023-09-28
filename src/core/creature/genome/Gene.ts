import Calc from '../../utils/Calc.ts';
import Brain from '../brain/Brain.ts';

class Gene {
  private readonly sourceType: number; // 0 = input; 1 = inner
  private readonly sourceId: number;
  private readonly destinationType: number; // 0 = inner; 1 = output
  private readonly destinationId: number;
  private readonly weight: number;

  /**
   * Binary representation of the genome.
   * @private
   */
  private binGenome: string;

  /**
   * Hex representation of the genome.
   * @private
   */
  private hexGenome: string;

  private brain: Brain;

  constructor(brain: Brain) {
    this.sourceType = Calc.randomInt(0, 1);
    this.sourceId = Calc.randomInt(
      0,
      brain.getInputNodes().length + brain.getInnerNodes().length
    );
    this.destinationType = Calc.randomInt(0, 1);
    this.destinationId = Calc.randomInt(
      0,
      brain.getInnerNodes().length + brain.getOutputNodes().length
    );
    this.weight = Calc.random(-4, 4);
    this.binGenome = '';
    this.hexGenome = '';
    this.calculateGenome();

    this.brain = brain;
  }

  getBinGenome(): string {
    return this.binGenome;
  }

  getHexGenome(): string {
    return this.hexGenome;
  }

  private calculateGenome(): void {
    this.binGenome =
      this.sourceType.toString(2) +
      this.sourceId.toString(2) +
      this.destinationType.toString(2) +
      this.destinationId.toString(2) +
      this.weight.toString(2);

    this.hexGenome = parseInt(this.binGenome, 2).toString(16);
  }
}

export default Gene;
