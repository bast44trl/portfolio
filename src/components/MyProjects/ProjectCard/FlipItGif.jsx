import React from 'react';

import turn from '../../../assets/projets/turn.gif';

export default function FlipItGif() {
  return (
    <img
      style={{
        position: 'absolute',
        zIndex: '5',
        height: '20%',
        borderRadius: '10px',
        boxShadow: '2px 2px 0 black',
        transform: 'translate(0, -280%)',
      }}
      src={turn}
      alt="turn around"
    />
  );
}
