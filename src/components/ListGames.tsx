import Games from "../../model/Games"
import Card from "./CardGame"

interface ListGames{
    product: Games[],
    buy: (product: Games) => void
}


export default function ListGames(props:ListGames){
    return(
        <div className="flex flex-wrap gap-5">
            {props.product.map(game => {
                return <Card key={game.id} game={game} selected={props.buy}/>
            })}
        </div>
    )

}