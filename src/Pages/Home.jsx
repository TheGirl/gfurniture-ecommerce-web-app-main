import Hero from '../components/Hero/Hero';
import Collection from '../components/Collection/Collection';
import Trends from '../components/Trends/Trends';
import FashionTrends from '../components/FashionTrends/FashionTrends';
import SuccessHistory from '../components/SuccessHistory/SuccessHistory';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
        <Hero />
        <Collection />
        <Trends />
        <FashionTrends />
        <SuccessHistory />
        <Footer />
    </div>
  )
}

export default Home