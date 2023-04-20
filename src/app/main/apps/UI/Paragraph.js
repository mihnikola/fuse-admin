import { Typography } from '@mui/material';

function Paragraph({ content }) {
  return <Typography className="text-10 sm:text-15 truncate font-semibold">{content}</Typography>;
}

export default Paragraph;
