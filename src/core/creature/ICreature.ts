import IEntity from '../IEntity.ts';
import Gene from './genome/Gene.ts';

interface ICreature extends IEntity {
  getGenomes(): Gene[];
}

export default ICreature;
