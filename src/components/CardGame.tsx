import { IconShoppingCart } from "@tabler/icons-react";
import Games from "../../model/Games";
import Image from "next/image";
import Converter from "@/utils/Converter";

interface GameProps {
  game: Games;
  selected: (game:Games) => void
}

export default function Card(props: GameProps) {
  const gaming = props.game;

  return (
    <div className="flex flex-col border border-zinc-600 rounded-md p-2 w-72">
      <Image
        className="rounded-md"
        alt="Game image"
        src={gaming.image}
        height={100}
        width={300}
      />
      <div className="flex flex-col p-3 gap-3">
            <div className="flex items-center justify-between">
                <div className="text-2xl font-black">{gaming.name}</div>
                <div className="text-green-500 font-bold">{Converter.showValue(props.game.price)}</div>
            </div>
            <div>
                {gaming.description}
            </div>
            <button onClick={() => props.selected(gaming)}
            className="flex bg-blue-600 rounded-md p-1 cursor-pointer justify-center gap-3 font-black">
                <IconShoppingCart/> Comprar
            </button>
      </div>
    </div>
  );
}
