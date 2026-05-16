import Tile from "./Tile"
import { useDraggable } from "@dnd-kit/core";
import type { TileData } from "../game/type"

type QueueProps = {
	queue: [TileData, TileData]
	activeId: string | null
}

export default function Queue({
	queue,
	activeId
}: QueueProps){

	const {
		setNodeRef,
		listeners,
		attributes
	} = useDraggable({
		id: queue[0].id
	});

	const isDragging = activeId === queue[0].id;

	return(
		<div className="queue-slot">

			<div
				ref={setNodeRef}
				{...listeners}
				{...attributes}
				style={{
	visibility: isDragging ? "hidden" : "visible"
}}
			>
				<Tile value={queue[0].value}/>
			</div>

			<Tile value={queue[1].value}/>

		</div>
	)
}