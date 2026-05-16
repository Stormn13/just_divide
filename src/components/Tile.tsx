import blueTile from "../assets/blue.png"

import orangeTile from "../assets/orange.png"
import purpleTile from "../assets/purpule.png"
import pinkTile from "../assets/pink.png"


type Tileprops = {
	value: number
}

export default function Tile({value}: Tileprops){
	
	let image
	if (value === 0){
		return(
			<div></div>
		)
	}
	if (value === 2) {
		image = blueTile
	}
	else if (value === 4) {
		image = orangeTile
	}
	else if (value === 8) {
		image = purpleTile
	}
	else {
		image = pinkTile
	}
	return(
		<div className="tile" >
		<img src={image} />
		<p className="tile_text"> {value} </p>
		</div>
	)
	
}