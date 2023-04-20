import FusePageCarded from '@fuse/core/FusePageCarded/FusePageCarded';
import { useThemeMediaQuery } from '@fuse/hooks';
import HeaderNotification from './HeaderNotification';
import CardNotification from './CardNotification';

function Notifications() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <>
      <HeaderNotification />
     
    </>
    //   <FusePageCarded
    //     header={<HeaderNotification />}
    //     // content={<HeaderNotification />}
    //     scroll={isMobile ? 'normal' : 'content'}
    //   />
  );
}

export default Notifications;
