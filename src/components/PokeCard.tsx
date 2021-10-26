import { useState } from "react";
import PokeImg from "./PokeImg";
import PokeModal from "./PokeModal";

interface IPokeCard {
  name: string;
  index: number;
  // photo:string;
}

const PokeCard = ({ name, index }: IPokeCard) => {
  const [modal, setModal] = useState("none");

  return (
    <>
      <div
        style={{
          margin: 10,
          padding: 10,
          backgroundColor: "#fff",
          borderRadius: 8,
          boxShadow: "0 0 10px #bbb",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={() => {
          setModal("flex");
        }}
      >
        <strong style={{ color: "#999" }}>#{index}</strong>
        <div
          style={{
            height: 250,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <PokeImg name={name} index={index} style={{ maxWidth: 150 }} />
          <strong>{name}</strong>
        </div>
      </div>
      <PokeModal modal={modal} name={name} setModal={setModal} index={index} />
    </>
  );
};

export default PokeCard;
