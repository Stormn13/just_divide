import Tile from "./Tile"
import type { TileData } from "../game/type"
import { useDroppable } from "@dnd-kit/core"

type CellProp = {
	cell: TileData
}

export default function Cells({cell}:CellProp){
	const { setNodeRef } = useDroppable({
	id: cell.id
})
	if (!cell) {
	return <div className="cell" ref={setNodeRef}></div>
}

	return(
	<div className="cell">
		<Tile value={cell.value}/>
	</div>
	)
}