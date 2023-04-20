import { Box, Button, Typography } from '@mui/material';
import BackRouting from '../../UI/BackRouting';
import Heading from '../../UI/Heading';
import ButtonForm from '../../UI/FormButton';
import InputForm from '../../UI/InputForm';
import IconItem from '../../UI/IconItem';
import Wrapper from '../../UI/Wrapper';
import BackButton from '../../UI/BackButton';
import { useState } from 'react';
import ModalForm from '../../UI/ModalForm';
const btnPrimary = {
  width: '100%',
  height: '20px',
  color: 'white',
  backgroundColor: 'blue',
  padding: '20',
  marginTop: '20px',
  '&:hover': { backgroundColor: 'black' },
};
function AddCategory() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      {/* <div className="flex flex-col sm:flex-row w-1/2 items-center justify-between space-y-8 sm:space-y-0 py-32 px-24 md:px-32 "> */}
      <Wrapper>
        <div className="flex flex-col items-center sm:items-start space-y-8 sm:space-y-0 w-full sm:max-w-full min-w-0">
          {/* <BackRouting /> */}
          <BackButton url="/kategorijeBenefita" />
          <Heading title="Dodaj novu kategoriju" />
          <Box
            component="form"
            sx={{
              '& > :not(style)': { mt: 3, mb: 3, width: '70ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <InputForm label="Unesi ime kategorije" />
          </Box>
          <Box>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Izaberi ikonicu:
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'flex-row',
              gap: 2,
              paddingTop: 2,
              flexWrap: 'wrap',
            }}
          >
            <IconItem sizeWidth="12%" name="ICON" />
            <IconItem sizeWidth="12%" name="ICON" />
            <IconItem sizeWidth="12%" name="ICON" />
            <IconItem sizeWidth="12%" name="ICON" />
            <IconItem sizeWidth="12%" name="ICON" />
            <IconItem sizeWidth="12%" name="ICON" />
            <IconItem sizeWidth="12%" name="ICON" />
            <IconItem sizeWidth="12%" name="ICON" />
            <IconItem sizeWidth="12%" name="ICON" />
            <IconItem sizeWidth="12%" name="ICON" />
            <IconItem sizeWidth="12%" name="ICON" />
            <IconItem sizeWidth="12%" name="ICON" />
            <IconItem sizeWidth="12%" name="ICON" />
            <IconItem sizeWidth="12%" name="ICON" />
          </Box>
        </div>
        <div className="w-1/2 mt-15">
          <Button onClick={handleOpen} sx={btnPrimary}>
            Sacuvaj kategoriju
          </Button>
          {open && (
            <ModalForm
              closeModal={handleClose}
              openModal={open}
              label="Uspesno ste kreirali kategoriju"
              url="/kategorijeBenefita"
              styleBtn={btnPrimary}
            />
          )}
        </div>
      </Wrapper>
      {/* </div> */}
    </>
  );
}

export default AddCategory;
