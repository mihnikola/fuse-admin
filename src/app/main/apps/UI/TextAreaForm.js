import { TextField } from '@mui/material';

function TextAreaForm(props) {
  return (
    <div>
      <TextField
        variant="outlined"
        placeholder="Unesi tekst benefita"
        multiline
        value={props.value}
        rows={10}
        sx={{ width: '100%' }}
      />
    </div>
  );
}

export default TextAreaForm;
