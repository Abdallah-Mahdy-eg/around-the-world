import Select from "react-select";

const options = [
  { value: "all regions", label: "All regions" },
  { value: "africa", label: "Africa" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];
const RegionMenu = ({ CountryList, filterCountriesList }) => {
  const handelRegionChange = (e) => {
    const region=e.label;
    const filteredCountries =
      region === "All regions"
        ? CountryList
        : CountryList.filter((Country) => Country.region === region);
    filterCountriesList(filteredCountries);
  };
  return (
    <>
      <Select
        onChange={handelRegionChange}
        defaultValue={options[0]}
        options={options}
        // menuPortalTarget={null}
        unstyled
        classNames={{
          input: () => "dark:!text-gray-100",
          singleValue: () => "dark:text-gray-100",
          control: () =>
            "flex h-12 items-center justify-between gap-12 rounded-md !border-none pl-4 pr-2 shadow dark:bg-gray-800 dark:text-gray-100 md:h-14",
          indicatorSeparator: () => "hidden",
          option: () => "hover:!text-gray-800",
          menu: () => "dark:bg-gray-800",
          // menuList: () => "bg-gray-100 dark:bg-gray-800 dark:text-gray-100",
        }}
      />
    </>
  );
};

export default RegionMenu;
