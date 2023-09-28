import Location from './Location.ts';

interface IMovable {
  move(location: Location): void;
}

export default IMovable;
