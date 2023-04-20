import FolderIcon from '@mui/icons-material/Folder';
import { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import BackButton from '../../UI/BackButton';
import ButtonHeader from '../../UI/ButtonHeader';
import Heading from '../../UI/Heading';

import ParagraphLayout from '../../UI/ParagraphLayout';
import Paragraph from '../../UI/Paragraph';
import ImagesNotification from './ImagesNotification';
import { useFormContext } from 'react-hook-form';
import SelectOption from '../../UI/SelectOption';
import ButtonForm from '../../UI/FormButton';

const time = [
  { id: '123', name: 'Zauvek' },
  { id: '123456', name: '1 dan' },
  { id: '1234', name: '7 dana' },
  { id: '12345', name: '10 dana' },
];
const commonStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  width: '5rem',
  height: '5rem',
};
function CreateContentNotification() {
  // const methods = useFormContext();
  // console.log("+methods",methods);

  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [selectedValue, setSelectedValue] = useState('a');
  const [radio, setRadio] = useState('0');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const radioChangeHandler = (event) => {
    console.log('+radio', event.target.value);

    setRadio(event.target.value);
  };
  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });
  return (
    <div>
      <Box sx={{ margin: 1.5, width: '80%' }}>
        <BackButton url="/obavestenja" />
      </Box>
      <ParagraphLayout>
        <Paragraph content="Kreiraj novo obavestenje" />
      </ParagraphLayout>
      <Box>
        <TextField
          variant="outlined"
          label="Unesi naziv obavestenja"
          sx={{ width: '50%', padding: 1.5 }}
        />
      </Box>
      {/* <Box sx={{ margin: 1.5, backgroundColor: 'white', width: '49%' }}> */}
      <Box
        sx={{
          ...commonStyles,
          borderRadius: '16px',
          padding : 2,
          width: '49%',
          height: 200,
          overflowY: 'auto',
          display: 'flex',
          flexFlow: 'column nowrap',
        }}
      >
        <Editor
          placeholder="Unesi tekst obavestenja"
          editorState={editorState}
          onEditorStateChange={setEditorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
        />
      </Box>
      <Box sx={{ margin: 1.5 }}>
        <AttachFileIcon />
        {/* Dodaj sadrzaj  */}
        <Button variant="contained">
          Dodaj slike
          {/* <input type="file" hidden /> */}
          {/* <ImagesNotification /> */}
        </Button>
      </Box>
      <FormControl sx={{ margin: 1.5 }}>
        <FormLabel id="demo-radio-buttons-group-label">Objavi obavestenje:</FormLabel>
        <RadioGroup
          sx={{ display: 'flex', flexDirection: 'row', gap: '50px' }}
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            onChange={radioChangeHandler}
            checked={radio === '0'}
            value="0"
            control={<Radio />}
            label="Objavi odmah"
          />
          <FormControlLabel
            onChange={radioChangeHandler}
            value="1"
            checked={radio === '1'}
            control={<Radio />}
            label="Objavi kasnije"
          />
        </RadioGroup>
      </FormControl>
      {radio === '1' && (
        <Box sx={{ margin: 1.5, display: 'flex', gap: '10px' }}>
          <TextField sx={{ width: '25%' }} value="23/08/2022" label="Izaberite datum" />
          <TextField sx={{ width: '25%' }} value="14:30" label="Izaberite vreme" />
        </Box>
      )}
      <Box>
        <SelectOption period={time} label="Izaberite duzinu trajanja" value="123" />
      </Box>
      <Box sx={{ width: '20%', margin: 1 }}>
        <ButtonForm btnName="Dalje" url="/novoObavestenjeDalje" />
      </Box>
    </div>
  );
}

export default CreateContentNotification;
