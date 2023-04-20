import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Typography } from '@mui/material';

export default function SelectOption({ period, value, label }) {
  const [age, setAge] = React.useState(value);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 180 }} size="medium">
      {!period && (
        <InputLabel sx={{ width: '100%' }} id="demo-select">
          {label}
        </InputLabel>
      )}
      {period && <Typography sx={{ margin: 1.5 }}>{label}</Typography>}
      <Select
        labelId="demo-select"
        sx={[
          { margin: '1em' }, 
          period && { width: '35vh' }
        ]}
        id="demo-select"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        {period && period.map((p) => <MenuItem value={p.id}>{p.name}</MenuItem>)}
        {!period && (
          <>
            <MenuItem value={0}>
              <em>{label}</em>
            </MenuItem>
            <MenuItem value={10}>Fabrika</MenuItem>
            <MenuItem value={20}>STZR</MenuItem>
            <MenuItem value={30}>MMRN</MenuItem>
          </>
        )}
      </Select>
    </FormControl>
  );
}
