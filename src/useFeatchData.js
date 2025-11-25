import { useEffect, useState } from "react";

export const useFeatchData = (country) => {
  const [result, setResult] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if(country){
      fetchDataFromAPI();
    }else{
      fetchDataFromLocalstorage();
    }
  }, []);

  const fetchDataFromAPI = () =>{
    let url =
      "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region";
    setIsLoading(true);

    if (country) {
      url = `https://restcountries.com/v3.1/name/${country}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (country) {
          setResult(data[0]);
          console.log(result);
        } else {

          setResult(data);
          setFilteredCountries(data);
          localStorage.setItem("countries",JSON.stringify(data));
        }
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }

  const fetchDataFromLocalstorage = () =>{
    const data=JSON.parse(localStorage.getItem("countries"));

    if(data){
      setResult(data);
      setFilteredCountries(data);  
    }else{
      fetchDataFromAPI();
    }
  }

  return {
    result,
    filteredCountries,
    setFilteredCountries,
    isLoading,
    isError,
  };
};

//   //https://restcountries.com/v3.1/name/{country}
// "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region",
