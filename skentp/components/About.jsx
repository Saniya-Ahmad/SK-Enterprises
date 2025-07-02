import React from 'react'

function About() {
  return (
    <div id='about' className='w-full px-[12%] text-center py-6 scroll-mt-5'>
      <h2> About us</h2>
      <div className='mt-10'>
        <p>
          Established as a Proprietor firm in the year 2022, we “Sahil Enterprises” are a leading Trader - Retailer of a wide range of HDPE Scrap , HDPE Drum, etc.
          Sahil Enterprises is a trusted name in the trading of high-quality HDPE Scrap, HDPE Drums, and related plastic waste materials, catering to a wide range of industrial and recycling needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="flex items-center justify-center gap-4">
            <span className="flex items-center justify-center rounded-full bg-forest-green text-white w-16 h-16 text-3xl">
              <i className="fa-solid fa-hand-holding-dollar"></i>
            </span>
            <div className="flex flex-col items-start">
              <p className="font-bold">Nature of Business</p>
              <p>Trader - Retailer</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <span className="flex items-center justify-center rounded-full bg-forest-green text-white w-16 h-16 text-3xl">
              <i className="fa-solid fa-scale-balanced"></i>
            </span>
            <div className="flex flex-col items-start">
              <p className="font-bold">Legal Status of Firm</p>
              <p>Proprietorship</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <span className="flex items-center justify-center rounded-full bg-forest-green text-white w-16 h-16 text-3xl">
              <i className="fa-solid fa-arrow-trend-up"></i>
            </span>
            <div className="flex flex-col items-start">
              <p className="font-bold">Annual Turnover</p>
              <p>0-40L</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <span className="flex items-center justify-center rounded-full bg-forest-green text-white w-16 h-16 text-3xl">
              <i className="fa-solid fa-calendar"></i>
            </span>
            <div className="flex flex-col items-start">
              <p className="font-bold">GST Registration Date</p>
              <p>21-Nov-2022</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <span className="flex items-center justify-center rounded-full bg-forest-green text-white w-16 h-16 text-3xl">
              <i className="fa-solid fa-file"></i>
            </span>
            <div className="flex flex-col items-start">
              <p className="font-bold">GST Number</p>
              <p>06MLAPK5607G1Z3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About