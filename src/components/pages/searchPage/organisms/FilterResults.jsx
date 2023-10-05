import RestaurantCard from "../molecules/RestaurantCard";
import FestivalCard from "../molecules/FestivalCard";
import TouristSpotCard from "../molecules/TouristSpotCard";

const FilterResults = ({ filter, results, query }) => {
  return (
    <div>
      {filter === "all" || filter === "restaurants" ? (
        <div>
          <h2 className="mx-4 text-xl font-bold">Restaurants</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {results.restaurants &&
              results.restaurants
                .filter((restaurant) => restaurant.address.includes(query))
                .map((restaurant, index) => (
                  <RestaurantCard key={index} restaurant={restaurant} />
                ))}
          </div>
        </div>
      ) : null}
      {filter === "all" || filter === "festivals" ? (
        <div>
          <h2 className="mx-4 text-xl font-bold">Festivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {results.festivals &&
              results.festivals
                .filter((festival) => festival.address.includes(query))
                .map((festival, index) => (
                  <FestivalCard key={index} festival={festival} />
                ))}
          </div>
        </div>
      ) : null}
      {filter === "all" || filter === "touristSpots" ? (
        <div>
          <h2 className="mx-4 text-xl font-bold">Tourist Spots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {results.touristSpots &&
              results.touristSpots
                .filter((touristSpot) => touristSpot.address.includes(query))
                .map((touristSpot, index) => (
                  <TouristSpotCard key={index} touristSpot={touristSpot} />
                ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FilterResults;
