import Home from '../components/home/home';
import Services from '../components/home/services';
import Gallery from '../components/home/gallery';
import Videos from '../components/home/videos';
import Facilities from '../components/home/facilities';
import Location from '../components/home/location';
import PageUpButton from '../components/home/pageUpBtn';
const MainPage = () => {
  return (
    <>
      <PageUpButton/>
      <Home/>
      <Services/>
      <Gallery/>
      <Videos/>
      <Facilities/>
      <Location/>
    </>
  );
}

export default MainPage;