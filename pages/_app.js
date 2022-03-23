import '../styles/vendor/fontawesome-free-6.1.0-web/css/all.min.css';
import '../styles/globals.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp