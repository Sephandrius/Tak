import React from 'react';
import { Board, Stack } from '../game/Board';
import SquareView from './SquareView';

interface BoardViewProps {
  board: Board;
  onPlace: (x: number, y: number) => void;
}

export default function BoardView({ board, onPlace }: BoardViewProps) {
  return (
    <div style={{ display: 'inline-block' }}>
      {board.grid.map((row, y) => (
        <div key={y} style={{ display: 'flex' }}>
          {row.map((stack, x) => (
            <SquareView key={x} stack={stack} onClick={() => onPlace(x, y)} />
          ))}
        </div>
      ))}
    </div>
  );
}
