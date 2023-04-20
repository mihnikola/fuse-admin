import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccessTime from '@mui/icons-material/AccessTime';
import CheckBox from '@mui/icons-material/CheckBox';
import HourglassTop from '@mui/icons-material/HourglassTop';
import Block from '@mui/icons-material/Block';
// import OutlinedButtons from "../../documentation/material-ui-components/components/buttons/OutlinedButtons";
import ButtonCart from './ButtonCart';
import DisabledByDefaultTwoToneIcon from '@mui/icons-material/DisabledByDefaultTwoTone';
import { CardActionArea } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BasicCartItem(props) {
  const [expanded, setExpanded] = React.useState(false);
  const { allowed } = props;
  const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const suggestionHandler = () => {
    console.log('tessssssssssssssssst');
    navigate('2');
  };

  return (
    <>
      {allowed === 'false' ? (
        <Card sx={{ maxWidth: 1600, boxShadow: 10, cursor: 'pointer' }} onClick={suggestionHandler}>
          <CardHeader
            avatar={
              <Avatar sx={{ backgroundColor: 'blue' }} aria-label="recipe">
                AR
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                {props.solved === 'pending' ? (
                  <AccessTime />
                ) : props.solved === 'approved' ? (
                  <CheckBox />
                ) : props.solved === 'halfApproved' ? (
                  <HourglassTop />
                ) : (
                  <Block />
                )}
              </IconButton>
            }
            title="Aleksandar Radivojevic"
            subheader="September 14, 2023"
          />
          <CardContent>
            <Typography variant="body2" color="text.primary">
              Ovde ide naslov predloga unapredjenja i moze biti duzi
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook together with
              your guests. Add 1 cup of frozen peas along with the mussels, if you like. This
              impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Card
          sx={{ maxWidth: 1600, boxShadow: 10, backgroundColor: '#dbdbdb', cursor: 'pointer' }}
          onClick={suggestionHandler}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ backgroundColor: 'blue' }} aria-label="recipe">
                AR
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <DisabledByDefaultTwoToneIcon />
              </IconButton>
            }
            title="Aleksandar Radivojevic"
            subheader="September 14, 2023"
          />
          <CardContent>
            <Typography variant="body2" color="text.primary">
              Ovde ide naslov predloga unapredjenja i moze biti duzi
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook together with
              your guests. Add 1 cup of frozen peas along with the mussels, if you like. This
              impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
}
