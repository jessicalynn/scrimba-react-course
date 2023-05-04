import gridImg from '../assets/photo-grid.png';

export default function Hero() {
	return (
		<div className="hero">
			<div className="container">
				<img src={gridImg} alt="Grid displaying various AirBNB experiences" className="grid-img" />
				<div className="content">
					<h1>Online Experiences</h1>
					<p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
				</div>
			</div>
		</div>
	)
}