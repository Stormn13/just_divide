import Queue from "./Queue"
import TrashSlot from "./TrashSlot"
import KeepSlot from "./KeepSlot"
import type { TileData } from "../game/type"

type RightSlotProps = {
    queue: TileData[]
}

export default function RightSlot({queue}:RightSlotProps){
    return(
        <div className="right-slot">
            <KeepSlot />
            <Queue queue={queue} />
            <TrashSlot />
        </div>
    )
}