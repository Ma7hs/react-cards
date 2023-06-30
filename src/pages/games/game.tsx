import ListGames from "@/components/ListGames";
import { ListGame } from "@/data/game";
import { useState } from "react";
import BuyCart from "../../../model/Cart";
import Games from "../../../model/Games";
import Cart from "@/components/BuyCart";

export default function GamePage() {
  const [items, setItems] = useState<BuyCart[]>([]);

  const addItem = (game: Games) => {
    const foundItem = items.find((item) => item.game.id === game.id);
    if (foundItem) {
      const updatedItem = { ...foundItem, qntd: foundItem.qntd + 1 };
      const updatedItems = items.map((item) =>
        item.game.id === game.id ? updatedItem : item
      );
      setItems(updatedItems);
    } else {
      const newItem: BuyCart = { qntd: 1, game };
      setItems([...items, newItem]);
    }
  };

  return (
    <div className="flex justify-center h-screen items-center gap-10 flex-col">
      <Cart items={items}/>
      <ListGames product={ListGame} buy={addItem} />
    </div>
  );
}
