import { Piece } from './types';

export type Stack = Piece[];

export class Board {
  size: number;
  grid: Stack[][];

  constructor(size: number) {
    this.size = size;
    this.grid = [];
    for (let y = 0; y < size; y++) {
      const row: Stack[] = [];
      for (let x = 0; x < size; x++) {
        row.push([]);
      }
      this.grid.push(row);
    }
  }

  clone(): Board {
    const b = new Board(this.size);
    b.grid = this.grid.map(row => row.map(stack => [...stack]));
    return b;
  }

  getStack(x: number, y: number): Stack {
    return this.grid[y][x];
  }
}
