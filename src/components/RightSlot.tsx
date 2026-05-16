import Queue from "./Queue";
import KeepSlot from "./KeepSlot";
import TrashSlot from "./TrashSlot";

import type { TileData } from "../game/type";

type RightSlotProps = {
	queue: [TileData, TileData]
	keep: TileData
	activeId: string | null
}

export default function RightSlot({
	queue,
	keep,
	activeId
}: RightSlotProps){

	return(
		<div className="right-slot">

			<Queue
				queue={queue}
				activeId={activeId}
			/>

			<KeepSlot keep={keep} />

			<TrashSlot />

		</div>
	)
}