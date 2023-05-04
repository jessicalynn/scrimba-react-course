// import expImg from '../assets/katie-zaferes.png'
import starImg from '../assets/star.png'

export default function Card( props ) {
	return (
		<div className="single-card">
			<div className="img-wrapper">
				{props.openSpots == 0 && <span>Sold Out</span>}
				{props.location == 'Online' && props.openSpots > 0 && <span>Online</span>}
				<img src={`/src/assets/${props.image}`} />
			</div>

			<div className="exp-info">
				<p>
					<img src={starImg} />
					{props.rating} <span>({props.reviewCount}) &bull; {props.location}</span>
				</p>
				<p>{props.name}</p>
				<p><strong>From ${props.price}</strong> / person</p>
			</div>
		</div>
	);
}