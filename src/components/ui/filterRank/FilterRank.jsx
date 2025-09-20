import InputSelect from "../inputSelect/InputSelect";
import { specialitiesAPI } from "../../../services";
import { useEffect, useState } from "react";

function FilterRank({ onChange, value }) {
  const options = [
    { value: "desc", label: "С высоким рейтингом" },
    { value: "rank", label: "С низким рейтингом" },
  ];
  return (
    <InputSelect
      value={value}
      options={options}
      name="sort"
      placeholder="Сортировка"
      onChange={onChange}
    />
  );
}

export default FilterRank;
