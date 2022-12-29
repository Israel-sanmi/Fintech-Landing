import React from 'react'

import n28 from '../../assets/images/Fintech/Social/pr2.png'
import wise from '../../assets/images/Fintech/Social/pr1.png'
import trade from '../../assets/images/Fintech/Social/pr3.png'
import master from '../../assets/images/Fintech/Social/pr4.png'
import stripe from '../../assets/images/Fintech/Social/pr7.png'
import pay from '../../assets/images/Fintech/Social/pr8.png'
import visa from '../../assets/images/Fintech/Social/pr5.png'
import sbi from '../../assets/images/Fintech/Social/pr6.png'

const Partners = () => {
  return (
      <div className=' mb-64 md:mb-0'>
          <div>
              <h1 className='font-bold md:text-4xl text-2xl text-center my-10'>Our Partners</h1>
          </div>
          <div className='grid grid-cols-4 gap-5 justify-items-center'>
              <img src={n28} alt="" />
              <img src={wise} alt="" />
              <img src={trade} alt="" />
              <img src={master} alt="" />
              <img src={stripe} alt="" />
              <img src={pay} alt="" />
              <img src={visa} alt="" />
              <img src={sbi} alt="" />
          </div>
    </div>
  )
}

export default Partners