import blueTile from "../assets/blue.png"
import redTile from "../assets/red.png"
import orangeTile from "../assets/orange.png"
import purpleTile from "../assets/purpule.png"
import pinkTile from "../assets/pink.png"


type Tileprops = {
	value: number
}

export default function Tile({value}: Tileprops){

	if (value = 2){
		return(
		<div>
		<img src={blueTile} />
		<p className="tile_text"> {value} </p>
		</div>
	)
	}
	if (value = 4)
	
}