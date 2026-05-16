import { useState } from "react";
import Tile from "./Tile";
import type { TileData } from "../game/type"

type GridProps = {
	grid: TileData[]
}
export default function Grid({grid}: GridProps){

	const [tiles, setTiles] = useState(grid)


	return(
		<div className="grid" >

			{tiles.map((tile, index) => (
				<Tile key = {index} value={grid[index].value} />
			))}
		</div>
	)
}