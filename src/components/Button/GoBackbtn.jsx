import React from 'react'

const GoBackbtn = () => {

 // function that when a button is clicked it takes users to previous page
 const goBack = () => {
  window.history.back()
}


  return (
    <div>
        <div className="GoBack__div mx-10 mt-10 font-Manrope text-[15px] leading-[25px]">
          <button className=" cursor-pointer" onClick={goBack}>Go Back</button>
        </div>
    </div>
  )
}

export default GoBackbtn