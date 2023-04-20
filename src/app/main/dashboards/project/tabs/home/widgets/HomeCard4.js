import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { selectWidgets } from '../../../store/widgetsSlice';
import { motion } from 'framer-motion';

function HomeCard4() {
  const widgets = useSelector(selectWidgets);
  const { data, title1, title2, title3 } = widgets?.overdue2;

  return (
    <motion.div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 gap-40 w-full min-w-0 p-24'>
        <div className="col-span-2">
            <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between px-8 pt-12">
                    <Typography
                        className="px-16 text-xl font-bold tracking-tight leading-6 truncate"
                        color="text.secondary"
                    >
                    {title1}
                    </Typography>
                    <IconButton aria-label="more" size="large">
                        <FuseSvgIcon>heroicons-outline:plus-circle</FuseSvgIcon>
                    </IconButton>
                </div>
                <div className="flex items-center justify-between px-8 pb-12"> 
                    <Typography 
                        className="text-5xl sm:text-7xl font-semibold leading-none tracking-tight px-16" 
                        color='text.secondary'
                    >
                        {data.count1} 
                    </Typography>
                    <Typography className="flex items-baseline w-full px-8" color='text.secondary'>
                        <span className="font-medium text-lg">{data.extra.name1}</span>
                    </Typography> 
                </div>
            </Paper>
        </div>
        <div className="col-span-2">
            <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between px-8 pt-12">
                    <Typography
                        className="px-16 text-xl font-bold tracking-tight leading-6 truncate"
                        color="text.secondary"
                    >
                        {title2}
                    </Typography>
                    <IconButton aria-label="more" size="large">
                        <FuseSvgIcon>heroicons-outline:plus-circle</FuseSvgIcon>
                    </IconButton>
                </div>
                <div className="flex items-center justify-between px-8 pb-12"> 
                    <Typography 
                        className="text-5xl sm:text-7xl font-semibold leading-none tracking-tight pl-16 pr-14" 
                        color='text.secondary'
                    >
                        {data.count2} 
                    </Typography>
                    <Typography className="flex items-baseline w-full px-2" color='text.secondary'>
                        <span className="font-medium text-lg">{data.extra.name2}</span>
                    </Typography> 
                </div>
            </Paper>
        </div>
        <div className="col-span-2">
            <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between px-8 pt-12">
                    <Typography
                        className="px-16 text-xl font-bold tracking-tight leading-6 truncate"
                        color="text.secondary"
                    >
                        {title3}
                    </Typography>
                    <IconButton aria-label="more" size="large">
                        <FuseSvgIcon>heroicons-outline:plus-circle</FuseSvgIcon>
                    </IconButton>
                </div>
                <div className="flex items-center justify-between px-8 pb-12"> 
                    <Typography 
                        className="text-5xl sm:text-7xl font-semibold leading-none tracking-tight pl-16 pr-14" 
                        color='text.secondary'
                    >
                        {data.count3} 
                    </Typography>
                    <Typography className="flex items-baseline w-full px-2" color='text.secondary'>
                        <span className="font-medium text-lg">{data.extra.name3}</span>
                    </Typography> 
                </div> 
            </Paper>
        </div>
    </motion.div>
  );
}

export default memo(HomeCard4);
