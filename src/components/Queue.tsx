import Tile from "./Tile"
import { useDraggable } from "@dnd-kit/core";
import type { TileData } from "../game/type"

type QueueProps = {
	queue: TileData[]
}
export default function Queue( {queue}: QueueProps){
    const {setNodeRef, listeners, attributes, transform} = useDraggable({id: `queue-${queue[0].id}`});
    return(
        <div className="queue-slot">
            <div ref={setNodeRef} {...listeners} {...attributes} 
		style={{
		transform: transform
			? `translate3d(${transform.x}px, ${transform.y}px, 0)`
			: undefined
	}}>
            <Tile value = {queue[0].value}/>
            </div>
            <Tile value = {queue[1].value}/>
        </div>
    )
}