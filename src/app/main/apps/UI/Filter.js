import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Input, Paper } from '@mui/material';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import ModalForm from './ModalForm';

const btnPrimary = {
  width: '100%',
  height: '20px',
  color: 'white',
  backgroundColor: 'blue',
  padding: '20',
  marginTop: '20px',
  '&:hover': { backgroundColor: 'black' },
};
function Filter(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
      >
        {props.modal ? (
          // <Button
          //   // className=""
          //   // component={Link}
          //   // to="/apps/e-commerce/products/new"
          //   variant="contained"
          //   color="secondary"
          //   disableElevation
          // >
          //   {props.title}
          // </Button>
          <>
            <div className="w-1/2 mt-15">
              <Button variant="contained" color="secondary" onClick={handleOpen} disableElevation>
              {props.title}
              </Button>
              {open && (
                <ModalForm
                  closeModal={handleClose}
                  openModal={open}
                  sort="true"
                  label="Uspesno ste kreirali kategoriju"
                  url="/obavestenja"
                  styleBtn={btnPrimary}
                />
              )}
            </div>
          </>
        ) : (
          <Button
            // className=""
            // component={Link}
            // to="/apps/e-commerce/products/new"
            variant="contained"
            color="secondary"
            disableElevation
          >
            {props.title}
          </Button>
        )}
      </motion.div>
    </div>
  );
}

export default Filter;
