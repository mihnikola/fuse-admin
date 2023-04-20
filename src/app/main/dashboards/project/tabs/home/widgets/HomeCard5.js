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
  const { data, title1, title2, title3 } = widgets?.features2;

  return (
    <motion.div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 gap-40 w-full min-w-0 p-24'>
        <div className="col-span-2">
            <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-20">
                <div className="text-center">
                    <Typography className="text-lg font-semibold pb-20" color="text.secondary">{title1}</Typography>
                    <Typography 
                        className="text-5xl sm:text-7xl font-semibold leading-none tracking-tight pb-20"
                        color="text.secondary"
                    >
                        {`${data.count1}%`}
                    </Typography> 
                    <Typography className="text-lg font-medium" color="text.secondary">{data.name}</Typography>
                </div>
            </Paper>
        </div>
        <div className="col-span-2">
            <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-20">
                <div className="text-center">
                    <Typography className="text-lg font-semibold pb-20" color="text.secondary">{title2}</Typography>
                    <Typography className="text-5xl sm:text-7xl font-semibold leading-none tracking-tight pb-20" color="text.secondary">
                        {`${data.count2}%`}
                    </Typography>
                    <Typography className="text-lg font-medium" color="text.secondary">{data.name}</Typography> 
                </div>
            </Paper>
        </div>
        <div className="col-span-2">
            <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-20">
                <div className="text-center">
                    <Typography className="text-lg font-semibold pb-20" color="text.secondary">{title3}</Typography>
                    <Typography className="text-5xl sm:text-7xl font-semibold leading-none tracking-tight pb-20" color="text.secondary">
                        {`${data.count3}%`}
                    </Typography>
                    <Typography className="text-lg font-medium" color="text.secondary">{data.name}</Typography> 
                </div>
            </Paper>
        </div>
    </motion.div>
  );
}

export default memo(HomeCard4);
