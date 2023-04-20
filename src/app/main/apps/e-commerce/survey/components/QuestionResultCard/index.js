import { Box, Typography } from '@mui/material';
import React from 'react';
import AnswerResultCard from '../AnswerResultCard';


function QuestionResultCard({ questionText, dataAnswers }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', margin: 1.5 }}>
      <Box sx={{ display: 'flex', padding: '7px' }}>
        <Typography sx={{ fontSize: '15px', fontWeight: 'bold' }}>{questionText}</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', alignContent: 'center' }}>
        {dataAnswers.map((answer) => (
          <AnswerResultCard
            key={answer.answer_id}
            answerText={answer.answer_text}
            counterMembers={answer.counterMembers}
            value={answer.percentageValue}
            type={answer.ans_type}
          />
        ))}
      </Box>
    </Box>
  );
}

export default QuestionResultCard;
