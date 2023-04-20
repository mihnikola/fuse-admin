import React from 'react'
import Filter from '../../UI/Filter'
import SuggestionListSolved from './SuggestionListSolved'
import { Box } from '@mui/system'

function SuggestionSearch() {
  return (
    <>
        <Filter placeholder="Pretrazi predloge... " title="SORTIRAJ" />
        <Box sx={{overflow: 'auto', maxHeight: '490px', padding: '2rem'}}>
          <SuggestionListSolved />
        </Box>
    </>
  )
}

export default SuggestionSearch