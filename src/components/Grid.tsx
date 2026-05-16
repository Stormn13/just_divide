import type { TileData } from "../game/type"
import Cells from "./Cell";

type GridProps = {
	grid: TileData[]
}
export default function Grid({grid}: GridProps){

	return(
		<div className="grid" >

			{grid.map((tile) => (
	<Cells
		key={tile.id}
		cell={tile}
	/>
))}
		</div>
	)
}