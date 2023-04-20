import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  AvatarGroup,
  Box,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import LinearWithValueLabel from 'src/app/main/apps/UI/LinearProgressWithLabel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AnswerResultCard({ answerText, type, counterMembers, value }) {
  const [progress, setProgress] = useState(value);
  const [map, setMap] = useState('shipping');

  //   useEffect(() => {
  // const timer = setInterval(() => {
  //   setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
  // }, 800);
  // return () => {
  //   clearInterval(timer);
  // };
  //   }, []);
  return (
    <div>
      <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        {type == '1' && <Typography sx={{ width: '12vh' }}>{answerText} </Typography>}
        {type == '2' && (
          <Accordion
            className="border-0 shadow-0 overflow-hidden w-[150px] m-0"
            expanded={map === 'shipping'}
            onChange={() => setMap(map !== 'shipping' ? 'shipping' : false)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              //   classes={{ root: 'border border-solid rounded-16 mb-16' }}
            >
              <Typography>{answerText}</Typography>
            </AccordionSummary>
          </Accordion>
        )}
        <Box sx={{ width: '30%' }}>
          <LinearWithValueLabel counterMember={counterMembers} value={progress} />
        </Box>
        <AvatarGroup total={counterMembers}>
          <Avatar src="assets/images/avatars/female-18.jpg" />
          <Avatar src="assets/images/avatars/female-11.jpg" />
          <Avatar src="assets/images/avatars/male-09.jpg" />
        </AvatarGroup>
        {/* {type == '2' && (
          <Accordion
            className="border-0 shadow-0 overflow-hidden"
            expanded={map === 'shipping'}
            onChange={() => setMap(map !== 'shipping' ? 'shipping' : false)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              //   classes={{ root: 'border border-solid rounded-16 mb-16' }}
            >
              <Typography>{answerText}</Typography>
            </AccordionSummary>
            <AccordionDetails className="flex md:flex-row -mx-8">
              <Typography className="w-full mb-16 md:mb-0 mx-8 text-16">
                Lorem incididunt mollit ullamco laboris id aliquip nisi adipisicing qui amet officia
                sit dolor.
              </Typography>
              <AvatarGroup total={1}>
                <Avatar src="assets/images/avatars/male-09.jpg" />
              </AvatarGroup>
            </AccordionDetails>
          </Accordion>
        )} */}
      </Box>
    </div>
  );
}

export default AnswerResultCard;
