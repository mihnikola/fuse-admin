import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { selectWidgets } from '../../../store/widgetsSlice';

function FeaturesWidget() {
  const widgets = useSelector(selectWidgets);
  const { data, title } = widgets?.features;

  return (
    <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-20">
      {/* <div className="flex items-center justify-between px-8 pt-12">
        <Typography
          className="px-16 text-lg font-medium tracking-tight leading-6 truncate"
          color="text.secondary"
        >
          {title}
        </Typography>
        <IconButton aria-label="more" size="large">
          <FuseSvgIcon>heroicons-outline:dots-vertical</FuseSvgIcon>
        </IconButton>
      </div> */}
      <div className="text-center">
        <Typography className="text-lg font-medium text-green-600 pb-20">{data.name}</Typography>
        <Typography className="text-5xl sm:text-7xl font-semibold leading-none tracking-tight text-green-500">
          {`${data.count}%`}
        </Typography>
        
      </div>
      {/* <Typography
        className="flex items-baseline justify-center w-full mt-20 mb-24"
        color="text.secondary"
      >
        <span className="truncate">{data.extra.name}</span>:
        <b className="px-8">{data.extra.count}</b>
      </Typography> */}
    </Paper>
  );
}

export default memo(FeaturesWidget);
