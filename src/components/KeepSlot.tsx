import type { TileData } from "../game/type"
import Tile from "./Tile"
import { useDraggable } from "@dnd-kit/core";

type KeepProp = {
    keep: TileData
}

export default function KeepSlot({keep}:KeepProp){
    const {setNodeRef, listeners, attributes, transform} = useDraggable({id: `queue-${keep.id}`});
    return(
        <div className="keep-slot" ref={setNodeRef} {...listeners} {...attributes} 
		style={{
		transform: transform
			? `translate3d(${transform.x}px, ${transform.y}px, 0)`
			: undefined
	}}> 
    <Tile value={keep.value}/>
    </div>
    )
}