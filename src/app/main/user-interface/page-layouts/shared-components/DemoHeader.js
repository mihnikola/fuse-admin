import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import MobileDetect from 'mobile-detect';
import { amber } from '@mui/material/colors';
import { useState, useEffect } from 'react';
// import Suggestion from 'src/app/main/apps/e-commerce/suggestions/Suggestion';

function DemoHeader(props) {
  const { leftSidebarToggle, rightSidebarToggle } = props;
  const md = new MobileDetect(window.navigator.userAgent);
  const isMobile = md.mobile();
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
      //console.log('WIDTH '+windowSize[0]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  function handleClick() {}

  return (
    <div className={windowSize[0] < '1200'? "flex flex-col pl-24 py-24 w-full" : "flex flex-col pl-24 w-full"}> {/*sm:px-40 py-24 sm:py-32*/}
      <div>
        {/* <Breadcrumbs
          separator={<FuseSvgIcon size={20}>heroicons-solid:chevron-right</FuseSvgIcon>}
          aria-label="breadcrumb"
        >
          <Link
            className="font-medium"
            underline="hover"
            key="1"
            color="inherit"
            to="/"
            onClick={handleClick}
          >
            Projects
          </Link>
          <Link
            className="font-medium"
            underline="hover"
            key="2"
            color="inherit"
            to="/getting-started/installation/"
            onClick={handleClick}
          >
            Weekend Project
          </Link>
          <Typography className="font-medium" key="3" color="text.primary">
            Pregled
          </Typography>
        </Breadcrumbs> */}

        <div className="flex sm:hidden" />
      </div>
      <div className="flex items-center w-full mt-8 -mr-10 w-full justify-end">
        {/* {leftSidebarToggle && (
          <div className="flex shrink-0 items-center">
            <IconButton onClick={leftSidebarToggle} aria-label="toggle sidebar">
              <FuseSvgIcon>heroicons-outline:menu</FuseSvgIcon>
            </IconButton>
          </div>
        )} */}
        {/* <Typography
          component="h2"
          className="flex-1 text-3xl md:text-4xl font-extrabold tracking-tight leading-7 sm:leading-10 truncate mr-10"
        >
          Predlozi
        </Typography> */}
        {rightSidebarToggle && (
          <div className="flex shrink-0 items-center">
            {isMobile || windowSize[0] < '1200'? 
            <IconButton onClick={rightSidebarToggle} aria-label="toggle sidebar">
              <FuseSvgIcon sx={{ color: amber[600] }}>heroicons-solid:star</FuseSvgIcon>
            </IconButton>
            :
            ''
            }
            
          </div>
        )}
      </div>
    </div>
  );
}

export default DemoHeader;
