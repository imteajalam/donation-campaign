import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
  const { id, category, categoryBgColor, categoryButtonBgColor, image, title, titleColor } = card;
  return (
    <Link to={`/donation-details/${id}`}>
      <div style={{ backgroundColor: categoryBgColor }} className='rounded-xl pb-8 '>
        <img className='mx-auto w-full' src={image} alt="Image" />
        <div className='mx-4'>
          <h3 className='text-lg inline-block px-2 mt-3 rounded-lg' style={{ backgroundColor: categoryButtonBgColor }}>{category}</h3>
          <h3 className='text-xl font-bold mt-2' style={{ color: titleColor }}>{title}</h3>
        </div>
      </div>
    </Link>
  );
};
Card.propTypes = {
  card: PropTypes.object.isRequired
}
export default Card;