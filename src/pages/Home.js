import Hero from '../components/Hero';
import RentingList from '../components/RentingList';

function Home({ houses }) {
  return (
    <>
      <Hero />
      <RentingList houses={houses} />
    </>
  );
}

export default Home;
