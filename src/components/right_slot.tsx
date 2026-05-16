import Queue from "./Queue"
import TrashSlot from "./TrashSlot"
import KeepSlot from "./KeepSlot"


export default function right_slot(){
    return(
        <div className="right_slot" >
            <KeepSlot />
            <Queue />
            <TrashSlot />
        </div>
    )
}