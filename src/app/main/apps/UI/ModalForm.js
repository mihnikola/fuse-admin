import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import SelectOption from './SelectOption';
import InputForm from './InputForm';
import EmployeesBenefitSearch from '../e-commerce/benefits/EmployeesBenefitSearch';

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
const time = [
  { id: 'aaa', name: 'Avgust 2022' },
  { id: 'ccc', name: 'Januar 2022' },
  { id: 'vvv', name: 'Februar 2022' },
  { id: 'ddd', name: 'Maj 2022' },
];
export default function ModalForm({
  closeModal,
  openModal,
  label,
  url,
  styleBtn,
  interactive,
  sort,
}) {
  const [open, setOpen] = React.useState(openModal);
  console.log('+interactive', interactive);
  const [radio, setRadio] = React.useState('0');

  const handleClose = () => {
    closeModal(false);
  };
  const radioChangeHandler = (event) => {
    console.log('+radio', event.target.value);

    setRadio(event.target.value);
  };

  return (
    <div>
      <Modal open={openModal} onClose={handleClose}>
        {/* {interactive && (
          <Box sx={style}>
            <Typography
              component="h1"
              sx={{ padding: '20', textAlign: 'center', fontSize: '20px' }}
            >
              Kreiraj novu grupu
            </Typography>
            <Box>
              <Typography>Imenuj grupu</Typography>
              <TextField placeholder="Unesi ime grupe" />
            </Box>
            <Box sx={{ padding: '20px' }}>
              <Button variant="contained" component={Link} to={url} sx={styleBtn}>
                U redu
              </Button>
            </Box>
          </Box>
        )}  */}
        {/* {!interactive && ( */}
        {!sort ? (
          <Box sx={style}>
            <Typography
              component="h1"
              sx={{ padding: '20', textAlign: 'center', fontSize: '20px' }}
            >
              {label}
            </Typography>
            <Box sx={{ padding: '20px' }}>
              {interactive && (
                <>
                  <TextField
                    placeholder="Unesi ime grupe"
                    sx={{ width: '100%', padding: '10px' }}
                  />
                </>
              )}
              {!interactive ? (
                <Button variant="contained" component={Link} to={url} sx={styleBtn}>
                  Potvrdi
                </Button>
              ) : (
                <Button variant="contained" sx={styleBtn} onClick={handleClose}>
                  U redu
                </Button>
              )}
            </Box>
          </Box>
        ) : (
          <Box sx={style}>
            <FormControl sx={{ margin: 1.5 }}>
              <FormLabel sx={{ fontWeight: 'bold', fontSize: '20px' }}>Sortiraj listu</FormLabel>
              <RadioGroup
                sx={{ display: 'flex', flexDirection: 'column' }}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  onChange={radioChangeHandler}
                  checked={radio === '0'}
                  value="0"
                  control={<Radio />}
                  label="Od poslednje do prve"
                />
                <FormControlLabel
                  onChange={radioChangeHandler}
                  value="1"
                  checked={radio === '1'}
                  control={<Radio />}
                  label="Od prve do poslednje"
                />
              </RadioGroup>
            </FormControl>
            <Box>
              <Typography sx={{ fontWeight: 'bold', fontSize: '20px', marginLeft: '10px' }}>
                Filtriraj listu
              </Typography>
              <Box sx={{ maxWidth: '30%' }}>
                <SelectOption period={time} label="Izaberite mesec" value="aaa" />
              </Box>

              {/* <Box> */}
              {/* <div className="ml-10 w-5/2">
        <EmployeesBenefitSearch />
      </div> */}
              <Box>
                <Button variant="contained" sx={styleBtn} onClick={handleClose}>
                  Primeni
                </Button>
                <Button variant="contained" sx={styleBtn} onClick={handleClose}>
                  Otkazi
                </Button>
              </Box>
              {/* </Box> */}
              {!sort && interactive && (
                <>
                  <TextField
                    placeholder="Unesi ime grupe"
                    sx={{ width: '100%', padding: '10px' }}
                  />
                </>
              )}
              {!sort && !interactive && (
                <Button variant="contained" component={Link} to={url} sx={styleBtn}>
                  Potvrdi
                </Button>
              )}

              {!sort && interactive && (
                <Button variant="contained" sx={styleBtn} onClick={handleClose}>
                  U redu
                </Button>
              )}
            </Box>
          </Box>
        )}
        {/* )}  */}
      </Modal>
    </div>
  );
}
