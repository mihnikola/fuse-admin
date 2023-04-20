import BackButton from '../../UI/BackButton';
import Heading from '../../UI/Heading';
import EmployeesBenefitSearch from './EmployeesBenefitSearch';
import ButtonForm from '../../UI/FormButton';
import { useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ModalForm from '../../UI/ModalForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const btnPrimary = {
  width: '100%',
  height: '20px',
  color: 'white',
  backgroundColor: 'blue',
  padding: '20',
  marginTop: '10',
  '&:hover': { backgroundColor: 'black' },
};
// return (
//   <Box sx={{ paddingLeft: 1, paddingTop: 1 }}>
//     <Button variant="contained" component={Link} to={url} sx={btnPrimary}>
//       {btnName}
//     </Button>
//   </Box>

function CreateBenefitEmployeesContent() {
  // const [modalForm, setModalForm] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex flex-col gap-10 m-10">
      <BackButton url="/noviBenefit" />
      <Heading title="Kreiraj benefit" />
      <div className="w-1/2">
        <EmployeesBenefitSearch />
      </div>
      <div className="w-1/2 mt-[26em]">
        {/* <ButtonForm btnName="Kreiraj benefit" modalFormHandler={modalForm} url="/izmeniKategorijuBenefit" /> */}
        {/* <div> */}
        <Button onClick={handleOpen} sx={btnPrimary}>
          Kreiraj benefit
        </Button>
        {open && (
          <ModalForm
            closeModal={handleClose}
            openModal={open}
            label="Uspesno ste kreirali benefit"
            url="/izmeniKategorijuBenefit"
            styleBtn={btnPrimary}
          />
        )}
        {/* <Button variant="contained" component={Link} to={url} sx={btnPrimary}></Button> */}

        {/* </div> */}
      </div>
    </div>
  );
}

export default CreateBenefitEmployeesContent;
