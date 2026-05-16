import { useState } from "react";
import Tile from "./Tile";


export default function Grid(){
	const [tiles, setTiles] = useState(Array(16).fill(4))

	return(
		<div className="grid">
			{tiles.map((tile, index) => (
				<Tile key = {index} value={tile}/>
			))}
		</div>
	)
}