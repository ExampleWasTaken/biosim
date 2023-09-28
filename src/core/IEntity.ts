import Location from './Location.ts';
import IMovable from './IMovable.ts';

interface IEntity extends IMovable {
  getLocation(): Location;
}

export default IEntity;
