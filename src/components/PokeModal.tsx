import React, { useEffect, useState } from "react";
import { pokeapi } from "../services/pokeapi";
import PokeImg from "./PokeImg";

interface IMoves {
  move: {
    name: string;
  };
}
interface ITypes {
  type: {
    name: string;
  };
}

interface IProps {
  name?: string;
  modal: string;
  setModal: React.Dispatch<React.SetStateAction<string>>;
  index?: number;
}

const PokeModal = ({ name, modal, setModal, index }: IProps) => {
  const [moves, setMoves] = useState<IMoves[]>([]);
  const [types, setTypes] = useState<ITypes[]>([]);
  const [hover, setHover] = useState('#f8f8f8');

  useEffect(() => {
    const getMovesEndType = async () => {
      try {
        const { data } = await pokeapi.get(`pokemon/${name}`);
        setMoves(data.moves);
        setTypes(data.types);
      } catch (error) {
        console.log(error);
      }
    };
    getMovesEndType();
  }, [name]);
  return (
    <div
      style={{
        display: modal,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.7)",
        position: "fixed",
        top: 0,
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={() => setModal("none")}
    >
      <div
        style={{
          backgroundColor: "#fff",
          position: "relative",
          zIndex: 1,
          padding: "2rem",
          borderRadius: 8,
          height: "40%",
          width: "30%",
          textAlign: "center",
        }}
      >
        <strong>{name}</strong>
        <button
          onClick={() => setModal("none")}
          style={{
            top: 10,
            position: "absolute",
            right: 10,
            borderRadius: 4,
            border: "none",
            background: hover,
            padding: 4,
            transition: '0.5s',
            color: "#afafaf",
          }}
          onMouseLeave={()=>{setHover('#f8f8f8')}}
          onMouseEnter={() => {setHover('#e5e5e5')}}
        >
          X
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingTop: 20,
          }}
        >
          <div
            style={{
              overflow: "auto",
              height: "18rem",
              width: "10rem",
              textAlign: "start",
            }}
          >
            {moves.map((move) => (
              <p style={{ paddingTop: 10 }}>{move.move.name}</p>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ flexDirection: "row", display: "flex" }}>
              {types.map((type) => (
                <p style={{ paddingLeft: 10 }}>{type.type.name}</p>
              ))}
            </div>
            <div>
              <PokeImg name={name} style={{ maxWidth: 200 }} index={index} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeModal;
