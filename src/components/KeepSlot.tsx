import type { TileData } from "../game/type"
import Tile from "./Tile"
import { useDroppable } from "@dnd-kit/core";

type KeepProp = {
	keep: TileData
}

export default function KeepSlot({ keep }: KeepProp){

	const { setNodeRef } = useDroppable({
		id: "keep-slot"
	});

	return(
		<div
			className="keep-slot"
			ref={setNodeRef}
		>

			{
				keep.value !== 0 &&
				<Tile value={keep.value}/>
			}

		</div>
	)
}