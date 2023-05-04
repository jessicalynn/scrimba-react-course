import logo from '../assets/airbnb-logo.png'

export default function Nav() {
	return (
		<nav className="top-nav">
			<div className="container">
				<img src={logo} alt="AirBNB Logo" className="logo" />
			</div>
		</nav>
	)
}