import FolderIcon from '@mui/icons-material/Folder';
import { Box, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import BackButton from '../../UI/BackButton';
import ButtonHeader from '../../UI/ButtonHeader';
import Heading from '../../UI/Heading';

import ParagraphLayout from '../../UI/ParagraphLayout';
import Paragraph from '../../UI/Paragraph';
import { Link } from 'react-router-dom';

// import AttachFileIcon from '@mui/icons-material/AttachFile';



function EditComingNotification({ btnIcon }) {
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ margin: 1.5, width: '80%' }}>
          <BackButton url="/obavestenja" />
        </Box>
        {/* <AttachFileIcon /> */}

        {btnIcon && (
          <Box sx={{ margin: 1.5, width: '1%' }}>
            <IconButton component={Link} to="/izmeniObavestenje">
              <EditIcon />
            </IconButton>
          </Box>
        )}
        <Box sx={{ margin: 1.5, width: '100%' }}>
          <IconButton>
            <FolderIcon />
          </IconButton>
        </Box>
      </Box>
      <ParagraphLayout>
        <Paragraph content="15/06/2023" />
      </ParagraphLayout>
      <ParagraphLayout>
        <Paragraph content="Ovde ide naslov obavestenja i moze biti duzi" />
      </ParagraphLayout>
      <Box sx={{ padding: 2, width: '100%', maxWidth: 800 }}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
          suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Box>
      <Box sx={{ padding: 2, width: '100%', maxWidth: 800 }}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
          suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Box>
      <Box sx={{ margin: 1.5 }}>
        <img
          src="assets/images/demo-content/morain-lake.jpg"
          alt="morain-lake.jpg"
          height="500px"
          width="500px"
        />
      </Box>
      <ParagraphLayout>
        <Paragraph content="Branimir Stulic," />
        <Paragraph content="Head of HR" />
      </ParagraphLayout>
    </div>
  );
}

export default EditComingNotification;
