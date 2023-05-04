import Hero from './components/Hero'
import Nav from './components/Nav'
import Card from './components/Card'
import cardData from './cardData'

export default function App() {
	const cardElements = cardData.map( card => {
        return <Card key="{card.id}"
			image={card.coverImg} 
			rating={card.stats.rating} 
			reviewCount={card.stats.reviewCount} 
			name={card.title}
			location={card.location} 
			price={card.price}
			openSpots={card.openSpots}
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