import { Button, Input } from '@mantine/core';

const ProfileInformation = () => {

    return(

        <>


            <div className="mt-[10.5%] ">

            <h4 className="text-[20px] md:text-xl font-semibold mt-[2] mb-[5%]"> Profile Information </h4>

            <h4 className='text-[17px] md:text-sm mb-3'>Display Name</h4>
          

            <input
              placeholder=""
              className="bg-[#282829] text-white rounded-lg p-[2%_3%] md:p-[1.5%_3%] w-full"
            />

            

            <h4 className='text-[17px] md:text-sm mt-5 mb-3'>Email</h4>

            <input
              placeholder=""
              className="bg-[#282829] text-white rounded-lg p-[2%_3%] md:p-[1.5%_3%] w-full"
            />


            <button 
              type="submit" 
              className='buttonHovered text-[16px] md:text-[14px] font-semibold bg-primaryGradient p-[10px_16px] rounded-full flex items-center gap-[8px] justify-center mt-10'
              
            >
              Save Changes
            </button>


            </div>
        

        </>
    );
}

export default ProfileInformation



    
