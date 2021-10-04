import React, { useEffect, useState } from 'react';

interface IPokeImg{
    name?:string;
    index?:number;
    style?: {
        maxWidth: number;
    }
}

const PokeImg = ({name, index, style}:IPokeImg) => {
  return (
    <img
    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`}
    alt={name}
    style={style}
  />
    );
}

export default PokeImg;