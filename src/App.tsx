import React, { useState } from 'react';
import { Game, Player, PieceType } from './game/Game';
import BoardView from './components/BoardView';

const DEFAULT_SIZE = 5;

export default function App() {
  const [game, setGame] = useState(() => new Game(DEFAULT_SIZE));
  const [selectedPiece, setSelectedPiece] = useState<PieceType>(PieceType.Flat);

  const handlePlace = (x: number, y: number) => {
    if (game.place(x, y, selectedPiece)) {
      setGame(game.clone());
    }
  };

  return (
    <div>
      <h1>Tak</h1>
      <BoardView board={game.board} onPlace={handlePlace} />
    </div>
  );
}
