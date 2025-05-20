import { Board } from './Board';
import { Player, PieceType, Piece } from './types';

export class Game {
  board: Board;
  current: Player = Player.White;
  flats: Record<Player, number>;
  capstones: Record<Player, number>;

  constructor(size: number) {
    this.board = new Board(size);
    this.flats = {
      [Player.White]: size * size,
      [Player.Black]: size * size,
    };
    this.capstones = {
      [Player.White]: 1,
      [Player.Black]: 1,
    };
  }

  clone(): Game {
    const g = new Game(this.board.size);
    g.board = this.board.clone();
    g.current = this.current;
    g.flats = { ...this.flats };
    g.capstones = { ...this.capstones };
    return g;
  }

  place(x: number, y: number, type: PieceType): boolean {
    const stack = this.board.getStack(x, y);
    if (stack.length > 0) return false;
    if (type === PieceType.Capstone && this.capstones[this.current] === 0) return false;
    if (type !== PieceType.Capstone && this.flats[this.current] === 0) return false;

    const piece: Piece = { player: this.current, type };
    stack.push(piece);
    if (type === PieceType.Capstone) {
      this.capstones[this.current]--;
    } else {
      this.flats[this.current]--;
    }
    this.toggle();
    return true;
  }

  toggle() {
    this.current = this.current === Player.White ? Player.Black : Player.White;
  }
}

export { Player, PieceType } from './types';
