import React from 'react';
import BackButton from '../../UI/BackButton';
import ButtonHeader from '../../UI/ButtonHeader';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { DeleteOutlineOutlined } from '@mui/icons-material';
import Heading from '../../UI/Heading';
import QuestionResultCard from './components/QuestionResultCard';

const dummyData = {
  survey_id: '10',
  surveyName: 'Anketa o BZNR',
  surveyEstimatedDate: '23/08/2022',
  user_id: 'ac62749a-7d4d-11ed-aad4-000c29c980ba',
  qa: [
    {
      question_id: '9c8a2ad4-7d2e-11ed-aad4-000c29c980ba',
      question_text: 'Pitanje prilozi',
      max_ans: 1,
      seq_number: 3,
      answerJson: [
        {
          answer_id: 20,
          answer_text: 'Pavlaka',
          ans_type: 1,
          counterMembers: 20,
          percentageValue: 36,
          question_text: 'Pitanje higijena',
          poll_user_answer_id: null,
          poll_user_answer_text: null,
          poll_user_answer_user_id: null,
        },
        {
          answer_id: 10,
          answer_text: 'Kecap',
          ans_type: 1,
          counterMembers: 96,
          percentageValue: 91,
          question_text: 'Pitanje higijena',
          poll_user_answer_id: 10,
          poll_user_answer_text: '',
          poll_user_answer_user_id: 'ac62749a-7d4d-11ed-aad4-000c29c980ba',
        },
        {
          answer_id: 66,
          answer_text: 'Majonez',
          ans_type: 1,
          counterMembers: 54,
          percentageValue: 12,
          poll_user_answer_id: null,
          poll_user_answer_text: null,
          poll_user_answer_user_id: null,
        },
      ],
      ans: [
        {
          question_id: '9c8a2ad4-7d2e-11ed-aad4-000c29c980ba',
          question_text: 'Pitanje zdravlje',
          answer_id: 20,
          answer_text: 'ok 3',
          answer_type: 1,
          poll_user_answer_id: null,
          poll_user_answer_text: null,
          poll_user_answer_user_id: null,
        },
        {
          answer_id: 10,
          answer_text: 'ok',
          question_id: '9c8a2ad4-7d2e-11ed-aad4-000c29c980ba',
          question_text: 'Pitanje zdravlje',
          ans_type: 1,
          poll_user_answer_id: 10,
          poll_user_answer_text: '',
          poll_user_answer_user_id: 'ac62749a-7d4d-11ed-aad4-000c29c980ba',
        },
        {
          answer_id: 20,
          answer_text: 'ok 2',
          question_id: '9c8a2ad4-7d2e-11ed-aad4-000c29c980ba',
          question_text: 'Pitanje zdravlje',
          ans_type: 1,
          poll_user_answer_id: null,
          poll_user_answer_text: null,
          poll_user_answer_user_id: null,
        },
        {
          answer_id: 60,
          answer_text: 'ok 222',
          question_id: '9c8a2ad4-7d2e-11ed-aad4-000c29c980ba',
          question_text: 'Pitanje zdravlje',
          ans_type: 1,
          poll_user_answer_id: null,
          poll_user_answer_text: null,
          poll_user_answer_user_id: null,
        },
      ],
    },
    {
      question_id: '9c8a2ad4-7xd2e-11ed-aad4-000c29c980ba',
      question_text: 'Pitanje sport',
      max_ans: 2,
      seq_number: 4,
      answerJson: [
        {
          answer_id: 20,
          answer_text: 'Kosarka',
          ans_type: 1,
          counterMembers: 20,
          percentageValue: 36,
          question_text: 'Pitanje higijena',
          poll_user_answer_id: null,
          poll_user_answer_text: null,
          poll_user_answer_user_id: null,
        },
        {
          answer_id: 10,
          answer_text: 'Nogomet',
          ans_type: 1,
          counterMembers: 96,
          percentageValue: 91,
          question_text: 'Pitanje higijena',
          poll_user_answer_id: 10,
          poll_user_answer_text: '',
          poll_user_answer_user_id: 'ac62749a-7d4d-11ed-aad4-000c29c980ba',
        },
        {
          answer_id: 66,
          answer_text: 'ostalo',
          ans_type: 2,
          counterMembers: 5,
          percentageValue: 50,
          poll_user_answer_id: null,
          poll_user_answer_text: null,
          poll_user_answer_user_id: null,
        },
      ],
      ans: [
        {
          answer_id: 20,
          answer_text: 'ok 3',
          ans_type: 1,
          question_text: 'Pitanje higijena',
          poll_user_answer_id: null,
          poll_user_answer_text: null,
          poll_user_answer_user_id: null,
        },
        {
          answer_id: 10,
          answer_text: 'ok',
          ans_type: 1,
          question_text: 'Pitanje higijena',
          poll_user_answer_id: 10,
          poll_user_answer_text: '',
          poll_user_answer_user_id: 'ac62749a-7d4d-11ed-aad4-000c29c980ba',
        },
        {
          answer_id: 20,
          answer_text: 'ok 2',
          question_text: 'Pitanje higijena',
          ans_type: 1,
          poll_user_answer_id: null,
          poll_user_answer_text: null,
          poll_user_answer_user_id: null,
        },
      ],
    },
  ],
};

function SurveyResults() {
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '50%', margin: 1.5 }}>
        <BackButton url="ankete" />
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <Button className="flex" variant="contained" color="secondary">
            <DeleteOutlineOutlined />
          </Button>
          <Button className="flex" variant="contained" color="secondary">
            Izmeni anketu
          </Button>
          <Button className="flex" variant="contained" color="secondary">
            Eksportuj rezultate
          </Button>
        </Box>
      </Box>
      <Box sx={{ margin: 1.5 }}>
        <Heading title="Rezultati ankete" widthHeading="800px" />
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: 1.5,
          width: '50%',
          backgroundColor: 'rgb(192,192,192)',
          padding: '20px',
        }}
      >
        <Typography sx={{ fontSize: '22px', fontWeight: 'bold' }}>
          {dummyData.surveyName}
        </Typography>
        <Typography>Anketa se zavrsava: {dummyData.surveyEstimatedDate}</Typography>
      </Box>

      {dummyData.qa.map((question) => (
        <QuestionResultCard
          key={question.question_id}
          questionText={question.question_text}
          dataAnswers={question.answerJson}
        />
      ))}
    </div>
  );
}

export default SurveyResults;
