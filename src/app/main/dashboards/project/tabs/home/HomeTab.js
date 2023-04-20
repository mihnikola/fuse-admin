import { motion } from 'framer-motion';
import HomeCard from './widgets/HomeCard';
import HomeCard2 from './widgets/HomeCard2';
import HomeCard3 from './widgets/HomeCard3';
import HomeCard4 from './widgets/HomeCard4';
import HomeCard5 from './widgets/HomeCard5';
function HomeTab() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div>
      <motion.div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 gap-40 w-full min-w-0 p-24'>
        <motion.div variants={item} className='md:col-span-4'>
          <HomeCard /> 
        </motion.div>
        <motion.div variants={item} className='md:col-span-1'>
          <HomeCard2 />
        </motion.div>
        <motion.div variants={item} className='md:col-span-1'>
          <HomeCard3 />
        </motion.div>
      </motion.div>
      <motion.div variants={item} className='md:col-span-2'>
          <HomeCard4 />
      </motion.div>
      <motion.div variants={item} className='md:col-span-2'>
          <HomeCard5 />
      </motion.div>
        {/* <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 w-full min-w-0 p-24"
            variants={container}
            initial="hidden"
            animate="show"
        >
          <motion.div variants={item} className="sm:col-span-2 md:col-span-4">
            <GithubIssuesWidget />
          </motion.div>
          <motion.div variants={item} className="sm:col-span-2 md:col-span-4 lg:col-span-2">
            <TaskDistributionWidget />
          </motion.div>
          <motion.div variants={item} className="sm:col-span-2 md:col-span-4 lg:col-span-2">
            <ScheduleWidget />
          </motion.div>
        </motion.div> */}
     </motion.div>
  );
}

export default HomeTab;
