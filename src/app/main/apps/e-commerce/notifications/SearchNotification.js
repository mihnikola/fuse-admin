import React from 'react';
import Filter from '../../UI/Filter';

function SearchNotification({ modalForm }) {
  return (
    <>
      <Filter placeholder="Pretrazi obavestenja... " title="SORTIRAJ" modal={modalForm} />
    </>
  );
}

export default SearchNotification;
