import Hero from '../components/Hero';
import RentingList from '../components/RentingList';
import heroImage from '../assets/hero-bg.png';

function Home({ houses }) {
  return (
    <>
      <Hero
        image={heroImage}
        hasShadow={true}
        text={'Chez vous, partout et ailleurs'}
      />
      <RentingList houses={houses} />
    </>
  );
}

export default Home;
