import React from 'react';
import { motion } from 'framer-motion';
import { Button, Input, Paper } from '@mui/material';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

function SearchSidebar(props) {
  return (
    <div className="flex flex-col py-20 w-1/2 sm:w-auto space-y-16 sm:space-y-0 flex-1 items-center justify-start space-x-8 border-b-1 border-slate-200">
      <Paper
        component={motion.div}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        className="flex items-center w-full sm:max-w-512 space-x-8 px-16 border-1 shadow-0 rounded-none"
      >
        <FuseSvgIcon color="disabled">heroicons-solid:search</FuseSvgIcon>
        <Input
          placeholder={props.placeholder}
          className="flex flex-2"
          disableUnderline
          fullWidth
          // value={searchText}
          inputProps={{
            'aria-label': 'Search',
          }}
          // onChange={(ev) => dispatch(setProductsSearchText(ev))}
        />
      </Paper>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      ></motion.div>
    </div>
  );
}

export default SearchSidebar;
