import { Button, Input } from '@mantine/core';

const ProfileInformation = () => {

    return(

        <>


            <div className="mt-[11%] ">

            <h4 className="text-xl font-semibold mt-[2] mb-[5%]"> Profile Information </h4>

            <h4 className='text-sm mb-3'>Display Name</h4>
            <Input placeholder="" styles={{
                input: {
                    backgroundColor: "#282829",
                    border: "none",
                    color: "#FFF",
                    borderRadius: "0.5rem",
                    padding: "3.5% 3%",
                }
            }} />


            <h4 className='text-sm mt-5 mb-3'>Email</h4>
            <Input placeholder="" styles={{
                input: {
                    backgroundColor: "#282829",
                    border: "none",
                    color: "#FFF",
                    borderRadius: "0.5rem",
                    padding: "3.5% 3%",
                }
            }} />


            <Button 
              type="submit" 
              radius="xl" 
              className='continueButton mt-10'
              styles={{
                root: {
                  background: 'linear-gradient(to right, #0A84FF, #5E5CE6)', 
                  color: '#fff', 
                  border: 'none',
                  transition: 'background 0.3s ease',
                  hover: {
                    background: 'linear-gradient(to right, #5E5CE6, #0A84FF)',
                  },
                },
              }}
            >
              Save Changes
            </Button>


            </div>
        

        </>
    );
}

export default ProfileInformation



    
