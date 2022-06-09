
import Home from '../components/Client/home/index';
import HomeProvider from "../contexts/providers/HomeProvider";

export default function HomePage() {
  return (
    <HomeProvider>
      <Home />
    </HomeProvider>
  )
}
