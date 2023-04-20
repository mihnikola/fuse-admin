import { TextField } from '@mui/material';

function InputForm(props) {
  return (
    <TextField
      id="outlined-basic"
      sx={{ width: '100%' }}
      label={props.label}
      value={props.value}
      variant="outlined"
    />
  );
}

export default InputForm;
