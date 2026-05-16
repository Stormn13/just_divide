import Tile from "./Tile"
import type { TileData } from "../game/type"

type CellProp = {
	cell: TileData | null
}

export default function Cells({cell}:CellProp){
	if (!cell) {
	return <div></div>
}
	return(
	<div className="cell">
		<Tile value={cell.value}/>
	</div>
	)
}