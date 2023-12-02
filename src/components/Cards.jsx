import Card from "./Card";
import PropTypes from 'prop-types';


const Cards = ({ cards }) => {
  return (
    <div className="lg:container lg:mx-auto grid lg:grid-cols-4 md:grid-rows-2 grid-cols-1 mx-5  gap-6 my-6">
      {
        cards.map((card) => <Card key={card.id} card={card}></Card>)
      }


    </div>
  );
};
Cards.propTypes = {
  cards: PropTypes.array.isRequired
}

export default Cards;