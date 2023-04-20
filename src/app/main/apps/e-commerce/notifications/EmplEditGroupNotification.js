import React from 'react';
import BackButton from '../../UI/BackButton';
import Heading from '../../UI/Heading';
import ButtonForm from '../../UI/FormButton';
import { Button } from '@mui/material';
import ModalForm from '../../UI/ModalForm';
import { useState } from 'react';
import EmployeesBenefitSearch from '../benefits/EmployeesBenefitSearch';
const btnPrimary = {
  width: '100%',
  height: '20px',
  color: 'white',
  backgroundColor: 'blue',
  padding: '20',
  marginTop: '10',
  '&:hover': { backgroundColor: 'black' },
};
export function EmplEditGroupNotification() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="flex flex-col gap-10 m-10">
      <BackButton url="/izmeniObavestenje" />
      <Heading title="Izmeni obavestenje" />
      <div className="w-1/2">
        <EmployeesBenefitSearch />
        
      </div>
      <div className="w-1/2 mt-[26em]">
        {/* <ButtonForm btnName="Sacuvaj izmene" url="/izmeniKategorijuBenefit" /> */}
        <Button onClick={handleOpen} sx={btnPrimary}>
          Sacuvaj i idi dalje
        </Button>
        {open && (
          <ModalForm
            closeModal={handleClose}
            openModal={open}
            label="Uspesno ste izmenili obavestenje"
            url="/obavestenja"
            styleBtn={btnPrimary}
          />
        )}
      </div>
    </div>
  );
}
