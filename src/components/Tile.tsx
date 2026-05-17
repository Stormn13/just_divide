import blueTile from "../assets/blue.png"
import redFile from "../assets/red.png"
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
	else if (value=== 16){
		image = pinkTile
	}
	else if (value == 32){
		image = redFile
	}
	return(
		<div className="tile" >
		<img src={image} />
		<p className="tile_text"> {value} </p>
		</div>
	)
	
}