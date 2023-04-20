import { Button } from '@mui/material'
import React from 'react'
// import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

function EmployeesPreTwoHeader() {
  return (
        <>
        <div className="flex flex-row w-1/2 px-20 gap-[2%]">
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
          >
            <Button
              className="flex flex-1"
              // component={Link}
            //   to="/apps/e-commerce/products/new"
              variant="contained"
              color="primary"
            >
              SVI ZAPOSLENI
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
          >
            <Button
              className="flex flex-1"
              // component={Link}
            //   to="/apps/e-commerce/products/new"
              variant="outlined"
              color="primary"
            >
              ARHIVIRANI NALOZI
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
          >
            <Button
              className="flex flex-1"
              // component={Link}
            //   to="/apps/e-commerce/products/new"
              variant="outlined"
              color="primary"
            >
              PAUZIRANI NALOZI
            </Button>
          </motion.div>
        </div>
        </>
      )
}

export default EmployeesPreTwoHeader