import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { selectWidgets } from '../../../store/widgetsSlice';
import { Link } from 'react-router-dom';

function HomeCard() {
  const widgets = useSelector(selectWidgets);
  const { data, title } = widgets?.overdue;

  return (
    <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between px-8 pt-12">
        <Typography
          className="px-16 text-xl font-bold tracking-tight leading-6"
          color="text.secondary"
        >
          {title}
        </Typography>
        <IconButton aria-label="more" size="large">
          <FuseSvgIcon>heroicons-outline:plus-circle</FuseSvgIcon>
        </IconButton>
      </div>
      <div className="flex items-center justify-between px-8">
            <Typography className="text-sm font-medium flex items-baseline justify-start w-full px-16" color='text.primary'>
                {data.date}
            </Typography>
        </div>
        <div className="flex items-center justify-between px-8 pb-12">
            <Typography
                className="flex items-baseline w-full px-16" color='text.secondary'>
            <span className="font-bold text-lg">{data.extra.name}</span>
            </Typography>
        </div>
        <div className="flex items-center justify-between px-8">
            <Typography className="font-medium flex items-baseline justify-start w-full mb-24 px-16">
                <Link color='text.primary' to={`/home123`}>{data.extra.edit}</Link>
            </Typography>
        </div>
        
    </Paper>
  );
}

export default memo(HomeCard);
