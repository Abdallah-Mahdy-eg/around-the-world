import { useEffect, useState } from "react";
import CountryList from "./CountryList";
import RegionMenu from "./RegionMenu";
import SearchInput from "./SearchInput";
import ShowMessage from "./ShowMessage";
import { useFeatchData } from "../useFeatchData";

const Home = () => {

    const {result,filteredCountries,isError,isLoading,setFilteredCountries} = useFeatchData();
//   useEffect(() => {
//     fetchCountryDate();
//   }, []);

  return (
    <>
      {isError && <ShowMessage message="Something went wrong!" />}
      {isLoading && <ShowMessage message="Loading countries data..." />}
      {!isError && !isLoading && (
        <>
          <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchInput
              CountryList={result}
              filterCountriesList={setFilteredCountries}
            />
            <RegionMenu
              CountryList={result}
              filterCountriesList={setFilteredCountries}
            />
          </div>
          <CountryList data={filteredCountries} />
        </>
      )}
    </>
  );
};

export default Home;
