import Hero from './components/Hero'
import Nav from './components/Nav'
import Card from './components/Card'
import cardData from './cardData'

export default function App() {
	const cardElements = cardData.map( card => {
        return <Card 
			key={card.id}
			{...card}
		/>
    })

	return (
		<div className="app">
			<Nav />
			<Hero />
			
			<div className="card-wrapper">
				{cardElements}
			</div>
		</div>
	);
}