import React from 'react'

function Main() {
  return (
    <div className='max-w-[1070px] m-auto mt-[190px] mb-[135px]' >
      <h2 className='max-w-[800px] text-[58px] font-bold leading-[70px]'> Here is what’s happening in the world of talk business. </h2>
   <div>  <div className='mt-[197px] mb-[68px]'>
        <div className='flex gap-12'>
          <div >  <p className=' text-[#6610F2] text-[16px] font-bold leading-[20px]  mb-[23px]'>MAY 2021</p>
            <h4 className='max-w-[220px] font-bold text-[24px] leading-[30px]'>Agile focused business services and more.</h4></div>

            <div className='max-w-[772px] '>
                <img className='w-[100%]' src="/comp.png" alt="" />
            </div>
        </div>
      </div>


      <div className='mb-[68px]'>
        <div className='flex gap-12'>
          <div >  <p className=' text-[#6610F2] text-[16px] font-bold leading-[20px]  mb-[23px]'>JUN 2021</p>
            <h4 className='max-w-[220px] font-bold text-[24px] leading-[30px]'>Agile focused business services and more.</h4></div>

            <div className='max-w-[772px] '>
                <img className='w-[100%]' src="/book.png" alt="" />
            </div>
        </div>
      </div>


      <div className='mb-[68px]'>
        <div className='flex gap-12'>
          <div >  <p className=' text-[#6610F2] text-[16px] font-bold leading-[20px]  mb-[23px]'>JUl 2021</p>
            <h4 className='max-w-[220px] font-bold text-[24px] leading-[30px]'>Agile focused business services and more.</h4></div>

            <div className='max-w-[772px] '>
                <img className='w-[100%]' src="/boy.png" alt="" />
            </div>
        </div>
      </div>
      </div> 

      <div className='flex ml-[269px] overflow-x-hidden	 max-w-[365px] border h-[60px] justify-between rounded-md items-center'>
        <div className=' border-r px-[27px] hover:text-[white] hover:bg-[#7749F8] py-[17px]'>Prev</div>
        <div className='hover:text-[white] hover:bg-[#7749F8] border-r px-[27px] py-[17px]'>1</div>
        <div className=' hover:text-[white] hover:bg-[#7749F8] border-r px-[27px] py-[17px]'>2</div>
        <div className=' hover:text-[white] hover:bg-[#7749F8] border-r px-[27px] py-[17px]'>3</div>
        <div className=' hover:text-[white] hover:bg-[#7749F8] px-[27px] py-[17px]'>Next</div>
      </div>




    </div>
  )
}

export default Main
