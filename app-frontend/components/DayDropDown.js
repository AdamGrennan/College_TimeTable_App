import React from 'react';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Monday', value: 'Monday' },
  { label: 'Tuesday', value: 'Tuesday' },
  { label: 'Wednesday', value: 'Wednesday' },
  { label: 'Thursday', value: 'Thursday' },
  { label: 'Friday', value: 'Friday' },
  { label: 'Saturday', value: 'Saturday' },
  { label: 'Sunday', value: 'Sunday' },
];

export const DayDropDown = ({ value, onChange }) => {
  return (
    <Dropdown
      className="bg-white border border-SILVER h-12 px-2 mb-6"
      placeholderClassName="text-base text-black"
      selectedTextClassName="text-base"
      iconClassName="w-5 h-5"
      data={data}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      value={value}
      onChange={item => {
        onChange(item.value);
      }}
    />
  );
};

