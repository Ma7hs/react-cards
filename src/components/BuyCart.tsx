import { IconCircleX } from "@tabler/icons-react";
import BuyCart from "../../model/Cart";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import Converter from "@/utils/Converter";

interface CartProps {
  items: BuyCart[];
}

export default function Cart(props: CartProps) {

    const total = props.items.reduce((sum, item) =>{
        return sum + item.qntd * item.game.price
    }, 0)

  return (
    <div className="flex w-4/5 flex-col border border-zinc-500 rounded-md overflow-hidden ">
      <div className="flex justify-between items-center bg-zinc-800 text-3xl p-3">
        <span>Buy Cart</span>
        <span>{Converter.showValue(total)}</span>
      </div>
      <div className="flex gap-5 p-3">
        {props.items.length === 0 ? (
          <EmptyCart/>
        ) : (
          props.items.map((i) => {
            return <CartItem key={i.game.id} {...i} />;
          })
        )}
      </div>
    </div>
  );
}
