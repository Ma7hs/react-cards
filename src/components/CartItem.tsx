import Converter from "@/utils/Converter";
import BuyCart from "../../model/Cart";

export default function CartItem(props: BuyCart) {
 

  return (
    <div className="flex items-center gap-2 rounded-full bg-blue-500">
      <span className=" flex justify-center items-center
                w-7 h-7 rounded-full p-2 bg-blue-700">
        {props.qntd}
      </span>
      <span>{props.game.name}</span>
      <span className="pl-5 pr-5">{Converter.showValue(props.qntd * props.game.price)}</span>
    </div>
  );
}
