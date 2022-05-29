import { useRouter } from "next/router";
import "../styles/vendor/fontawesome-free-6.1.0-web/css/all.min.css";
import "../styles/globals.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ClientCommon from "../components/Client/ClientCommon";
import AdminCommon from "../components/Admin/AdminCommon";
import AuthProvider from "../contexts/providers/AuthProvider";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const splitPathName = router.pathname.split("/");
  if (splitPathName[1] === "admin") {
    return (
      <AuthProvider>
        <AdminCommon>
          <Component {...pageProps} />
        </AdminCommon>
      </AuthProvider>
    );
  } else if (splitPathName[1] === "auth") {
    return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    );
  } else {
    return (
      <AuthProvider>
        <ClientCommon>
          <Component {...pageProps} />
        </ClientCommon>
      </AuthProvider>
    );
  }
}

export default MyApp;
