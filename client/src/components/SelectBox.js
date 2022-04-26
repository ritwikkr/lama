import React from "react";
import Wrapper from "../assets/wrapper/SelectBox";

function SelectBox({ name, label, list = [] }) {
  return (
    <Wrapper>
      <label htmlFor={name}>{label || name}</label>
      <select name={name} id={name}>
        {list.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </Wrapper>
  );
}

export default SelectBox;
