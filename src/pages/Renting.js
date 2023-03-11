import RentingBody from '../components/RentingBody';
import RentingHero from '../components/RentingHero';
import RentingInfos from '../components/RentingInfos';

function Renting({ house }) {
  return (
    <>
      <RentingHero images={house.pictures} />
      <RentingInfos
        title={house.title}
        location={house.location}
        tags={house.tags}
        host={house.host}
        rating={house.rating}
        description={house.description}
        equipments={house.equipments}
      />
      <RentingBody
        description={house.description}
        equipments={house.equipments}
      />
    </>
  );
}

export default Renting;
