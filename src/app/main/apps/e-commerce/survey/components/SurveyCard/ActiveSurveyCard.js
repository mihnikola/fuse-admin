import PropTypes from 'prop-types';
import { CardPanel, CardImage, CardIntro, CardStat, CardControls, CardCell } from './index';

const ActiveSurveyCard = ({ data }) => {
  const { image, title, description, remainingDays, votes } = data;

  return (
    <CardPanel>
      <CardImage src={image} alt={`${title} survey illustration`} />
      <CardCell size={5} border="right">
        <CardIntro title={title} description={description} />
      </CardCell>
      <CardCell size={2} border="right">
        <CardStat stat={remainingDays} label="dana do isteka" />
      </CardCell>
      <CardCell size={2} alignment="left">
        <CardStat stat={votes} label="glasalo do sada" />
      </CardCell>
      <CardCell size={1} noPadding>
        <CardControls />
      </CardCell>
    </CardPanel>
  );
};

ActiveSurveyCard.propTypes = {
  data: PropTypes.object,
};

export default ActiveSurveyCard;