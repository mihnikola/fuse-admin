import React from 'react';
import BackButton from '../../UI/BackButton';
import Heading from '../../UI/Heading';
import EmployeesBenefitSearch from './EmployeesBenefitSearch';
import ButtonForm from '../../UI/FormButton';
import { Button } from '@mui/material';
import ModalForm from '../../UI/ModalForm';
import { useState } from 'react';
const btnPrimary = {
  width: '100%',
  height: '20px',
  color: 'white',
  backgroundColor: 'blue',
  padding: '20',
  marginTop: '10',
  '&:hover': { backgroundColor: 'black' },
};
function EditBenefitEmployeesContent() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="flex flex-col gap-10 m-10">
      <BackButton url="/izmeniBenefit/2" />
      <Heading title="Izmeni benefit" />
      <div className="w-1/2">
        <EmployeesBenefitSearch />
      </div>
      <div className="w-1/2 mt-[26em]">
        {/* <ButtonForm btnName="Sacuvaj izmene" url="/izmeniKategorijuBenefit" /> */}
        <Button onClick={handleOpen} sx={btnPrimary}>
          Sacuvaj izmene
        </Button>
        {open && (
          <ModalForm
            closeModal={handleClose}
            openModal={open}
            label="Uspesno ste izmenili benefit"
            url="/izmeniKategorijuBenefit"
            styleBtn={btnPrimary}
          />
        )}
      </div>
    </div>
  );
}

export default EditBenefitEmployeesContent;
