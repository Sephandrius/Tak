export enum Player {
  White = 'W',
  Black = 'B',
}

export enum PieceType {
  Flat = 'flat',
  Wall = 'wall',
  Capstone = 'capstone',
}

export interface Piece {
  player: Player;
  type: PieceType;
}
