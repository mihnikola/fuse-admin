import PropTypes from 'prop-types';
import { CardPanel, CardImage, CardIntro, CardControls, CardInfo, CardCell } from './index';

const UpcomingSurveyCard = ({ data }) => {
  const { image, title, description, date } = data;

  return (
    <CardPanel>
      <CardImage src={image} alt={`${title} survey illustration`} />
      <CardCell size={2} border="right">
        <CardIntro title={title} description={description} />
      </CardCell>
      <CardCell size={1} border="right">
        <CardInfo value={date} label="Anketa zakazana za:" />
      </CardCell>
      <CardCell size={1} noPadding>
        <CardControls />
      </CardCell>
    </CardPanel>
  );
};

UpcomingSurveyCard.propTypes = {
  data: PropTypes.object,
};

export default UpcomingSurveyCard;