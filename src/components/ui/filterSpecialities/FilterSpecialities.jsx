import InputSelect from "../inputSelect/InputSelect";
import { specialitiesAPI } from "../../../services";
import { useEffect, useState } from "react";

function FilterSpecialities({ value, onChange }) {
  const [allSpecialities, setAllSpecialities] = useState([]);

  useEffect(() => {
    const fetchSpecialitiesData = async () => {
      try {
        const data = await specialitiesAPI.getAllSpecialities();
        setAllSpecialities(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSpecialitiesData();
  }, []);

  const specialityOptions = allSpecialities.map((spec) => ({
    value: spec.id,
    label: spec.name,
  }));

  return (
    <InputSelect
      value={value}
      options={specialityOptions}
      name="speciality"
      label="Специальность:"
      placeholder="Выберите категорию"
      onChange={onChange}
    />
  );
}

export default FilterSpecialities;
