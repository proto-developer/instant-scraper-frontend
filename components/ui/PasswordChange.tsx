import { Button, Input } from '@mantine/core';

const ProfileInformation = () => {

    return(

        <>


            <div className="mt-[10.5%] ">

            <h4 className="text-[22px] md:text-xl font-semibold mt-[2] mb-[5%]"> Login </h4>

            <h4 className='text-[19px] md:text-sm mb-3'>Old Password</h4>
            <input
              placeholder=""
              className="bg-[#282829] text-white rounded-lg p-[3%_3%] md:p-[1.5%_3%] w-full"
            />
            

            <div className="w-full md:w-[48%] float-left mr-5 ">

            <h4 className='text-[19px] md:text-sm mt-5 mb-3 '>New Password</h4>
            {/* <Input placeholder="" type='password' styles={{
                input: {
                    backgroundColor: "#282829",
                    border: "none",
                    color: "#FFF",
                    borderRadius: "0.5rem",
                    padding: "5% 5%",                
                }
            }} /> */}

            <input
              placeholder=""
              className="bg-[#282829] text-white rounded-lg p-[3%_3%] md:p-[2.5%_3%] w-full"
            />

            </div>

            <div className="w-full md:w-[48%] flex flex-col">

            <h4 className='text-[19px] md:text-sm mt-5 mb-3 '>Confirm Password</h4>
            <input
              placeholder=""
              className="bg-[#282829] text-white rounded-lg p-[3%_3%] md:p-[2.5%_3%] w-full"
            />
            </div>


            <button 
              type="submit" 
              className='bg-[#282829] text-[18px] md:text-[14px] font-semibold  p-[10px_16px] rounded-lg flex items-center gap-[8px] justify-center mt-10'
              
            >
              Update Password
            </button>
              



            </div>
        

        </>
    );
}

export default ProfileInformation



    
