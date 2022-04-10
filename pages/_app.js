import { useRouter } from 'next/router';
import '../styles/vendor/fontawesome-free-6.1.0-web/css/all.min.css';
import '../styles/globals.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ClientCommon from '../components/Client/ClientCommon';
import AdminCommon from '../components/Admin/AdminCommon';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const splitPathName = router.pathname.split('/');
  if(splitPathName[1] === 'admin') {
    return (
      <AdminCommon>
        <Component {...pageProps} />
      </AdminCommon>
    );
  } else if(splitPathName[1] === 'auth') {
    return (
    <>
      <Component {...pageProps} />
    </>
    )
  } else {
    return (
      <ClientCommon>
        <Component {...pageProps} />      
      </ClientCommon>
    );
  }
}

export default MyApp