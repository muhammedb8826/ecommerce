import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchByMake, getSearchByModel, getSearchByPrice, getSearchByYear } from '../redux/features/card/cardSlice';
import { makeOptions, modelOptions, priceOptions, yearOptions } from '../data';
import { AppDispatch } from '../redux/store';


const SelectOptions = () => {

  const dispatch: AppDispatch = useDispatch();

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

  useEffect(() => {  
    if (selectedMake !== ''){
      dispatch(getSearchByMake(selectedMake));
    }
    if (selectedModel !== ''){
      dispatch(getSearchByModel(selectedModel));
    }
    if (selectedYear !== ''){
      dispatch(getSearchByYear(selectedYear));
    }
    if (selectedPrice !== ''){
      dispatch(getSearchByPrice(selectedPrice));
    }
  }, [dispatch, selectedMake, selectedModel, selectedYear, selectedPrice]);
  
  return (
    <>
      <select
        name="make"
        className="select-item border border-black"
        title="Select a make"
        onChange={handleMakeChange}
        value={selectedMake}
      >
        <option value="">Make</option>
        {makeOptions.value.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        name="model"
        className="select-item border border-black"
        title="Select a make"
        onChange={handleModelChange}
        value={selectedModel}
      >
        <option value="">Model</option>
        {modelOptions.value.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        name="year"
        className="select-item border border-black"
        title="Select a make"
        onChange={handleYearChange}
        value={selectedYear}
      >
        <option value="">Year</option>
        {yearOptions.value.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        name="price"
        className="select-item border border-black"
        title="Select a make"
        onChange={handlePriceChange}
        value={selectedPrice}
      >
        <option value="">Price</option>
        {priceOptions.value.map((option) => (
          <option key={option} value={option}>
            Birr {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectOptions;
