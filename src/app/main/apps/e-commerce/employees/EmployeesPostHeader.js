import FuseSvgIcon from '@fuse/core/FuseSvgIcon'
import { Button, Input, Paper } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

function EmployeesPostHeader() {
  return (
    <div className="flex flex-col p-20 w-1/2 sm:w-auto sm:flex-row space-y-16 sm:space-y-0 flex-1 items-center justify-start space-x-8"> 
        <Paper
          component={motion.div}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
          className="flex items-center w-full sm:max-w-512 space-x-8 px-16 rounded-full border-1 shadow-0"
        >
          <FuseSvgIcon color="disabled">heroicons-solid:search</FuseSvgIcon>

          <Input
            placeholder="Pretrazi zaposlene"
            className="flex flex-4"
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
        >
          <Button
            // className=""
            // component={Link}
            // to="/apps/e-commerce/products/new"
            variant="contained"
            color="primary"
            disableElevation
          >
            FILTER
          </Button>
        </motion.div>
      </div> 
  )
}

export default EmployeesPostHeader