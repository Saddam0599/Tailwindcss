import React from 'react'

function Footer() {
  return (
    <div className='max-w-[1440px]  pt-[70px] bg-[#160530] m-auto px-[65px] pb-[46px]'>
      <div className='m-auto'>
        <h3 className='text-[white] text-[58px] leading-[70px] font-semibold  '>Let’s start working to build a brighter future.</h3>
      <div className='ml-auto max-w-[597px] border-[#E0CFFC] border mt-[11px] justify-between flex px-[26px] py-[25px]'>
      <input   className='bg-inherit text-white text-[21px] placeholder-white ' type="text" placeholder='Join our mailing list'  />
      <button className='text-[white] text-[21px]'>Submit</button>
        </div> 

        <p className='text-white max-w-[456px] mt-[67px] leading-[28px] text-[16px]font-normal '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum posuere eget elementum vulputate elementum viverra sapien tellus aenean.</p> 
        <div className='max-w-[184px] mr-auto flex items-center justify-between text-white mt-[37px]'>
                 <a href='#'>Fb</a>
                 <a href='#'>In</a>
                 <a href='#'>Tw</a>
                 <a href='#'>Ln</a>
            </div>
      </div>

      <div className='m-auto mt-[120px] flex justify-between align-middle '>
        <div className='flex'>
            <img src="/sms2.svg" alt="" />
            <img src="/logo.svg" alt="" />
        </div>
        <li ><a className='text-white' href="#">Copyright 2021. All rights reserved.</a></li>
      </div>
    </div>
  )
}

export default Footer
