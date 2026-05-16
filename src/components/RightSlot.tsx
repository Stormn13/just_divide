import Queue from "./Queue"
import TrashSlot from "./TrashSlot"
import KeepSlot from "./KeepSlot"


export default function RightSlot(){
    return(
        <div className="right-slot">
            <KeepSlot />
            <Queue />
            <TrashSlot />
        </div>
    )
}