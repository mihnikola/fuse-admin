import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import SearchControl from './components/SearchControl';
import TabFilter from './components/TabFilter';
import MOCK_SURVEYS, { Status } from './mock/surveys';
import ActiveSurveyCard from './components/SurveyCard/ActiveSurveyCard';
import CardSection from './components/CardSection';
import PastSurveyCard from './components/SurveyCard/PastSurveyCard';
import DraftSurveyCard from './components/SurveyCard/DraftSurveyCard';
import UpcomingSurveyCard from './components/SurveyCard/UpcomingSurveyCard';
import { useTabFilter, TabFilterOption } from './hooks/useTabFilter';
import useSearch from './hooks/useSearch';
import useSearchQuery from './hooks/useSearchQuery';

const renderSection = ({ data, title, status }, renderCard) => {
  return (
    data[status].length > 0 && (
      <CardSection title={title}>{data[status].map((survey) => renderCard(survey))}</CardSection>
    )
  );
};

function SurveyPage() {
  const surveys = MOCK_SURVEYS;
  const [filter, onFilterChange] = useTabFilter();
  const [query, onQueryChange] = useSearchQuery();
  const data = useSearch({ query, filter }, surveys);

  return (
    <div className="w-4/5 pl-32 pt-32 pb-56 min-w-[1020px]">
      <div className="flex justify-between">
        <Typography variant="h3" component="h1">
          Ankete
        </Typography>
        <Button variant="outlined" startIcon={<AddIcon />}>
          Kreiraj novu
        </Button>
      </div>
      <div className="w-full mb-16">
        <TabFilter
          active={filter}
          onChange={onFilterChange}
          items={[TabFilterOption.ALL, TabFilterOption.UPCOMING, TabFilterOption.ARCHIVED]}
        />
      </div>
      <div className="flex justify-between mb-32">
        <div className="w-1/2">
          <SearchControl onChange={onQueryChange} />
        </div>
        <Button variant="contained">Sortiraj</Button>
      </div>
      <div className="mb-32">
        {data[Status.ACTIVE].map((survey) => (
          <ActiveSurveyCard key={survey.title} data={survey} />
        ))}

        {renderSection({ data, title: 'Prethodne ankete', status: Status.PAST }, (survey) => (
          <PastSurveyCard key={survey.title} data={survey} />
        ))}
        {renderSection({ data, title: 'Ankete u izradi', status: Status.DRAFT }, (survey) => (
          <DraftSurveyCard key={survey.title} data={survey} />
        ))}
        {renderSection({ data, title: 'Nadolazece ankete', status: Status.UPCOMING }, (survey) => (
          <UpcomingSurveyCard key={survey.title} data={survey} />
        ))}
      </div>
    </div>
  );
}

export default SurveyPage;