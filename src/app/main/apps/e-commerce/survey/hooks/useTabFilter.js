import { useState } from 'react';

export const TabFilterOption = {
  ALL: {
    label: 'Sve ankete',
    value: 'all',
  },
  UPCOMING: {
    label: 'Nadolazece ankete',
    value: 'upcoming',
  },
  ARCHIVED: {
    label: 'Arhivirane ankete',
    value: 'archived',
  },
};

export const useTabFilter = () => {
  const [active, setActive] = useState(TabFilterOption.ALL.value);

  const onChange = (_, nextFilter) => {
    setActive(nextFilter);
  };

  return [active, onChange];
};