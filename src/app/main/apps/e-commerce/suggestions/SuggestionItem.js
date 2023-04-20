import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { Avatar, Box, Button, Stack, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

import { useDispatch } from 'react-redux';
import { useFormContext } from 'react-hook-form';
import ButtonForm from '../../UI/FormButton';
import InputForm from '../../UI/InputForm';
import IconItem from '../../UI/IconItem';
import BackButton from '../../UI/BackButton';
import ParagraphLayout from '../../UI/ParagraphLayout';
import Paragraph from '../../UI/Paragraph';

export default function SuggestionItem() {
  const theme = useTheme();

  return (
    <>
      <div className="flex flex-col sm:flex-row w-1/2 items-center justify-between space-y-8 sm:space-y-0 py-32 px-24 md:px-32">
        <div className="flex flex-col items-center sm:items-start space-y-8 sm:space-y-0 w-full sm:max-w-full min-w-0">
          <BackButton url="/apps/e-commerce/suggestions" />
          <ParagraphLayout>
            <Paragraph content="15/06/2023" />
          </ParagraphLayout>
          <ParagraphLayout>
            <Paragraph content="Ovde ide naslov predloga unapredjenja i moze biti duzi" />
          </ParagraphLayout>
          <ParagraphLayout>
            <Box className="text-10 sm:text-15 font-semibold">
              <Avatar sx={{ backgroundColor: 'blue' }} aria-label="recipe">
                AR
              </Avatar>
            </Box>
            <Typography className="p-10 text-10 sm:text-15 font-semibold">
              Ime Prezime | Sektor
            </Typography>
          </ParagraphLayout>
          <Box sx={{ padding: 2, width: '100%', maxWidth: 800 }}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
              suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Box>
          <ParagraphLayout>
            <Paragraph content="Attachments" />
          </ParagraphLayout>
          <motion.div
            className="flex flex-row items-center gap-10 p-20"
            initial={{ x: -10 }}
            animate={{ x: 0, transition: { delay: 0.3 } }}
          >
            <IconItem sizeWidth="40%" name="JPEG" />
            <IconItem sizeWidth="40%" name="PNG" />
            <IconItem sizeWidth="40%" name="PDF" />
          </motion.div>
          <Box sx={{ padding: 2, width: '80%' }}>
            <Stack direction="row" spacing={2}>
              <Button className="bg-gray-500" variant="contained">
                Odobreno
              </Button>
              <Button variant="contained">Neodobreno</Button>
              <Button variant="contained">Delimicno odobreno</Button>
            </Stack>
          </Box>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '70ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <InputForm label="Unesi objasnjenje" />
            <InputForm label="Unesi nagradni fond" />
          </Box>
        </div>
      </div>
      <div className="w-1/2">
      <ButtonForm btnName="Potvrdi" url="/apps/e-commerce/suggestions/" />
      </div>
    </>
  );
}
