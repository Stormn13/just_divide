import Queue from "./Queue"
import TrashSlot from "./TrashSlot"
import KeepSlot from "./KeepSlot"
import type { TileData } from "../game/type"

type RightSlotProps = {
    queue: TileData[]
    keep: TileData
}

export default function RightSlot({queue, keep}:RightSlotProps){
    return(
        <div className="right-slot">
            <KeepSlot keep={keep}/>
            <Queue queue={queue} />
            <TrashSlot />
        </div>
    )
}