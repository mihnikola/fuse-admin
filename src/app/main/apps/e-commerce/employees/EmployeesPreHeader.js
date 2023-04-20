import { Button, Typography } from '@mui/material'
import React from 'react'
// import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

function EmployeesPreHeader() {
  return (
    <div className="flex flex-col sm:flex-row flex-1 w-full space-y-8 sm:space-y-0 items-center justify-between py-32 px-24 md:px-32"> 
    <Typography
        component={motion.span}
        initial={{ x: -20 }}
        animate={{ x: 0, transition: { delay: 0.2 } }}
        delay={300}
        className="flex text-24 md:text-32 font-extrabold tracking-tight"
      >
        Zaposleni
      </Typography>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      >
        <Button
          className="flex flex-1"
          // component={Link}
          // to="/apps/e-commerce/products/new"
          variant="contained"
          color="primary"
          startIcon={<FuseSvgIcon>heroicons-outline:plus</FuseSvgIcon>}
        >
          Dodaj zaposlenog
        </Button>
      </motion.div>
      
    </div>
  )
}

export default EmployeesPreHeader