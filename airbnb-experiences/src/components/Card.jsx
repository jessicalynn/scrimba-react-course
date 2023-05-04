import starImg from '../assets/star.png'

export default function Card( props ) {
	return (
		<div className="single-card">
			<div className="img-wrapper">
				{props.openSpots == 0 && <span>Sold Out</span>}
				{props.location == 'Online' && props.openSpots > 0 && <span>Online</span>}
				<img src={`/public/images/${props.coverImg}`} />
			</div>

			<div className="exp-info">
				<p>
					<img src={starImg} />
					{props.stats.rating} <span>({props.stats.reviewCount}) &bull; {props.location}</span>
				</p>
				<p>{props.title}</p>
				<p><strong>From ${props.price}</strong> / person</p>
			</div>
		</div>
	);
}