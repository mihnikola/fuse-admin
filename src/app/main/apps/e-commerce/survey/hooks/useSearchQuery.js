import { useRef, useState } from 'react';

const DEBOUNCE_TIME = 1000; // ms

const useSearchQuery = () => {
  const timeoutRef = useRef(null);
  const [query, setQuery] = useState('');

  const onChange = (e) => {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setQuery(e.target.value.trim());
    }, DEBOUNCE_TIME);
  };

  return [query, onChange];
};

export default useSearchQuery;
