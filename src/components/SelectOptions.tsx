import { makeOptions, modelOptions, yearOptions, priceOptions } from '../data';

const SelectOptions = () => {
  return (
    <>
      <select name="make" className="select-item" title="Select a make">
        <option value="">{makeOptions.label}</option>
        {makeOptions.value.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select name="model" className="select-item" title="Select a make">
        <option value="">{modelOptions.label}</option>
        {modelOptions.value.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select name="year" className="select-item" title="Select a make">
        <option value="">{yearOptions.label}</option>
        {yearOptions.value.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select name="price" className="select-item" title="Select a make">
        <option value="">{priceOptions.label}</option>
        {priceOptions.value.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectOptions;
