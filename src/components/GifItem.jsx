import Proptypes from 'prop-types';

export const GifItem = ({ url, title }) => {
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifItem.propTypes = {
  url: Proptypes.string.isRequired,
  title: Proptypes.string,
};
