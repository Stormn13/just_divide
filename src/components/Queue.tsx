import Tile from "./Tile"

export default function Queue(){
    return(
        <div className="queue-slot">
            <Tile value = {2} />
            <Tile value = {2} />
        </div>
    )
}