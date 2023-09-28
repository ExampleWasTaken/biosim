import { ReactNode } from 'react';
import IEntity from '../../../core/IEntity.ts';

interface GridProps {
  width: number;
  height: number;
  entities: IEntity[];
  children: ReactNode;
}

export const Grid = ({ children }: GridProps) => {
  return <>{children}</>;
};
