// import expImg from '../assets/katie-zaferes.png'
import starImg from '../assets/star.png'

export default function Card( props ) {
	return (
		<div className="single-card">
			<div className="img-wrapper">
				{props.banner && <span>{props.banner}</span>}
				<img src={`/src/assets/${props.image}`} />
			</div>

			<div className="exp-info">
				<p>
					<img src={starImg} />
					{props.rating} <span>({props.reviewCount}) &bull; {props.country}</span>
				</p>
				<p>{props.name}</p>
				<p><strong>From ${props.price}</strong> / person</p>
			</div>
		</div>
	);
}