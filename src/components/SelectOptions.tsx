import { useState } from 'react';
import { makeOptions, modelOptions, yearOptions, priceOptions } from '../data';

const SelectOptions = () => {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMake(e.target.value);
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(e.target.value);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPrice(e.target.value);
  };
  return (
    <>
      <select
        name="make"
        className="select-item"
        title="Select a make"
        onChange={handleMakeChange}
      >
        <option value="">{makeOptions.label}</option>
        {makeOptions.value.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        name="model"
        className="select-item"
        title="Select a make"
        onChange={handleModelChange}
      >
        <option value="">{modelOptions.label}</option>
        {modelOptions.value.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        name="year"
        className="select-item"
        title="Select a make"
        onChange={handleYearChange}
      >
        <option value="">{yearOptions.label}</option>
        {yearOptions.value.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        name="price"
        className="select-item"
        title="Select a make"
        onChange={handlePriceChange}
      >
        <option value="">{priceOptions.label}</option>
        {priceOptions.value.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className="selected">
        {selectedMake} {selectedModel} {selectedYear} {selectedPrice}
      </p>
    </>
  );
};

export default SelectOptions;
