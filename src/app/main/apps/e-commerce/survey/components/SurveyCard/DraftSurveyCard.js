import {CardCell, CardControls, CardImage, CardInfo, CardIntro, CardPanel} from "./index";
import PropTypes from "prop-types";

const DraftSurveyCard = ({ data }) => {
  const { image, title, description, date } = data;

  return (
    <CardPanel>
      <CardImage src={image} alt={`${title} survey illustration`} />
      <CardCell size={2} border="right">
        <CardIntro title={title} description={description} />
      </CardCell>
      <CardCell size={1} border="right">
        <CardInfo label="Nepotpuna anketa" />
      </CardCell>
      <CardCell size={1} noPadding>
        <CardControls />
      </CardCell>
    </CardPanel>
  );
};

DraftSurveyCard.propTypes = {
  data: PropTypes.object,
};

export default DraftSurveyCard;