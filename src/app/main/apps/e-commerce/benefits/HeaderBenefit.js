import React from 'react'
import { Avatar, IconButton, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import BackButton from '../../UI/BackButton'

function HeaderBenefit() {
  return (
    <div className="flex flex-col">
            {/* <div className='m-10'> */}
            <BackButton url="/izmeniKategorijuBenefit" />
            {/* </div> */}
            <img
              className="h-160 lg:h-320 object-cover w-full"
              src="assets/images/demo-content/mag.png"
              alt="Profile Cover"
            />
            <div className="flex flex-col flex-0 lg:flex-row items-center max-w-5xl w-full mx-auto px-32 lg:h-72">
              <div className="-mt-96 lg:-mt-88 rounded-full">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, transition: { delay: 0.1 } }}
                >
                  <Avatar
                    sx={{ borderColor: 'background.paper' }}
                    className="w-128 h-128 border-4"
                    src="assets/images/avatars/logo_magnohrom.jpg"
                    alt="User avatar"
                  />
                </motion.div>
              </div>

              <div className="flex flex-col items-center lg:items-start mt-16 lg:mt-0 lg:ml-32">
                <Typography className="text-lg font-bold leading-none">MAGNOHROM DOO</Typography>
                <Typography color="text.secondary">Kraljevo, RS</Typography>
              </div>

              <div className="hidden lg:flex h-32 mx-32 border-l-2" />

              <div className="flex items-center mt-24 lg:mt-0 space-x-24">
                <div className="flex flex-col items-center">
                  <Typography className="font-bold">Zdravlje</Typography>
                  <Typography className="text-sm font-medium" color="text.secondary">
                    BENEFIT
                  </Typography>
                </div>
                <div className="flex flex-col items-center">
                  <Typography className="font-bold">20-40%</Typography>
                  <Typography className="text-sm font-medium" color="text.secondary">
                    POPUST
                  </Typography>
                </div>
              </div>

              <div className="flex flex-1 justify-end my-16 lg:my-0">
                
                <IconButton component={Link} to="/izmeniBenefit/2">
                <EditIcon />
                </IconButton>
                <IconButton>
                <DeleteIcon />
                </IconButton>
                {/* <Tabs
                  value={selectedTab}
                  // onChange={handleTabChange}
                  indicatorColor="primary"
                  textColor="inherit"
                  variant="scrollable"
                  scrollButtons={false}
                  className="-mx-4 min-h-40"
                  classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
                  TabIndicatorProps={{
                    children: (
                      <Box
                        sx={{ bgcolor: 'text.disabled' }}
                        className="w-full h-full rounded-full opacity-20"
                      />
                    ),
                  }}
                > */}
                {/* <Tab
                    className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 "
                    disableRipple
                    label="Timeline"
                  /> */}
                {/* <Tab
                    className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 "
                    disableRipple
                    label="O kompaniji"
                  /> */}
                {/* <Tab
                    className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 "
                    disableRipple
                    label="Photos & Videos"
                  /> */}
                {/* </Tabs> */}
              </div>
            </div>
          </div>
  )
}

export default HeaderBenefit
