import { TabFilterOption } from './useTabFilter';
import MOCK_SURVEYS, { Status } from '../mock/surveys';

const applyFilter = (filter, survey) => {
  return {
    [TabFilterOption.ALL.value]: true,
    [TabFilterOption.UPCOMING.value]: survey.status === Status.UPCOMING,
    [TabFilterOption.ARCHIVED.value]: survey.status === Status.PAST,
  }[filter];
};

const searchByQuery = (query, survey) => {
  const searchItems = [survey.title, survey.description];

  return query
    ? searchItems.some((item) => item.toLowerCase().includes(query.toLowerCase()))
    : true;
};

const searchSurvey = (query, filter, survey) => {
  return applyFilter(filter, survey) && searchByQuery(query, survey);
};

const useSearch = ({ query, filter }, data = MOCK_SURVEYS) => {
  return data.reduce(
    (groups, survey) => {
      if (searchSurvey(query, filter, survey)) {
        groups[survey.status].push(survey);
      }

      return groups;
    },
    {
      [Status.ACTIVE]: [],
      [Status.DRAFT]: [],
      [Status.UPCOMING]: [],
      [Status.PAST]: [],
    }
  );
};

export default useSearch;