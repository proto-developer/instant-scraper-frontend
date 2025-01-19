"use client";
import {
    Paper,
    PaperProps,
    Stack,
    Text,
    PinInput,
    
  } from '@mantine/core';
  import { useForm } from '@mantine/form';
  import { useToggle } from '@mantine/hooks';
  import { useMediaQuery } from '@mantine/hooks';
  
  function AuthenticationForm(props: PaperProps) {
    const [type, toggle] = useToggle(['login', 'register']);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const form = useForm({
      initialValues: {
        email: '',
        terms: true, 
      },
  
      validate: {
        email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email')},
    });
  
    return (
      <Paper bg="none" radius="md" p="xl"  {...props}>

        <p className="text-lg md:text-sm text-white text-center">
        We just send you a verify code. <br/> Check your inbox to get them.
          </p>

       
  
        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            

            <div style={{ position: 'relative', display: 'flex', justifyContent:"center"}}>
      


            <PinInput size="lg" type="number" placeholder="0" className="pin-input-container" gap={isMobile ? 25 : 12}  styles={{input:{
                background: "#272B30",
                border: "none",
                color:"#fff",
                fontSize: "2rem",
                fontWeight: "600",
                margin: "60% 0%",
                padding: "55% 0%",
                
                justifySelf:"center",
                
            }}} />


        </div>

<button
        type="submit"
        className="continueButton sm:w-[full] mt-[25%] lg:mt-[15%] bg-gradient-to-r from-[#0A84FF] to-[#5E5CE6] text-white border-none p-2 text-[18px] md:p-2 md:text-[15px] rounded-full transition-colors duration-300 hover:from-[#5E5CE6] hover:to-[#0A84FF]"
      >
        Continue
      </button>

         
          </Stack>
  
          
        </form>
      </Paper>


    );
  }

  export default AuthenticationForm