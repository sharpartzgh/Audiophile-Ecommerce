import React from 'react'
import data from '../Data/data.json'
import IntheBox from './IntheBox'

const Features = () => {
  return (
    <>
      {data.slice(0,1).map((item, id) => (
        <div key={id} className="container font-Manrope">
          <div className="features mt-10">
            <h1 className=" mb-6 tablet:text-[32px] leading-[36px] font-Manrope font-bold tracking-[1.14px]">FEATURES</h1>
            <div>{item.features}</div>
          </div>
          <IntheBox/>
      </div>
    ))}
    </>
  )
}

export default Features