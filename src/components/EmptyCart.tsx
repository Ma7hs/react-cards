import { IconCircleX } from "@tabler/icons-react";

export default function EmptyCart(){
    return(
        <div className="flex justify-center text-zinc-500 gap-4">
            <IconCircleX />
            <span>No itens in cart</span>
          </div>
    )
}