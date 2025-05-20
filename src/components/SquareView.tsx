import React from 'react';
import { Stack } from '../game/Board';
import { PieceType, Player } from '../game/types';

interface SquareProps {
  stack: Stack;
  onClick?: () => void;
}

function pieceColor(player: Player): string {
  return player === Player.White ? '#eee' : '#333';
}

export default function SquareView({ stack, onClick }: SquareProps) {
  const top = stack[stack.length - 1];
  const style: React.CSSProperties = {
    width: 50,
    height: 50,
    border: '1px solid #555',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: top ? pieceColor(top.player) : '#fafafa',
  };
  let content: React.ReactNode = null;
  if (top) {
    if (top.type === PieceType.Flat) {
      content = null;
    } else if (top.type === PieceType.Wall) {
      content = <div style={{ transform: 'rotate(45deg)', width: 20, height: 20, background: '#888' }} />;
    } else if (top.type === PieceType.Capstone) {
      content = <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#444' }} />;
    }
  }

  return (
    <div style={style} onClick={onClick}>
      {content}
      {stack.length > 1 && (
        <span style={{ position: 'absolute', fontSize: 12 }}>{stack.length}</span>
      )}
    </div>
  );
}
