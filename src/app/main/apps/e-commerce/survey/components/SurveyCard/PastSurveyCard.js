import PropTypes from 'prop-types';
import { CardCell, CardImage, CardInfo, CardIntro, CardPanel, CardStat } from './index';

const PastSurveyCard = ({ data }) => {
  const { title, description, image, date, votes } = data;

  return (
    <CardPanel>
      <CardImage src={image} />
      <CardCell size={5} border="right">
        <CardIntro title={title} description={description} />
      </CardCell>
      <CardCell size={2} border="right">
        <CardInfo value={date} label="Anketa je zavrsena:" />
      </CardCell>
      <CardCell size={2} alignment="left">
        <CardStat stat={votes} label="ukupno glasova" />
      </CardCell>
      <CardCell size={1} />
    </CardPanel>
  );
};

PastSurveyCard.propTypes = {
  data: PropTypes.object,
};

export default PastSurveyCard;