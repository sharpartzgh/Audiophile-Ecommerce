import React from 'react';
import data from '../Data/data.json';

const IntheBox = () => {
  // Accessing the includes array from the first item in data
  const includes = data.length > 0 ? data[0].includes : [];

  return (
    <>
      <div className="inTheBox mt-10">
        <h1 className="tablet:text-[32px] leading-[36px] font-Manrope font-bold tracking-[1.14px]">IN THE BOX</h1>
        <div className="items">
          {/* Mapping over the includes array to render each included item */}
          {includes.map((item, index) => (
            <p key={index} className="flex gap-3">
              <span className="text-[#D87D4A] font-bold">{item.quantity}x</span>
              {item.item}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default IntheBox;
