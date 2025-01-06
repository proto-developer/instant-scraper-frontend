"use client";
import {
    Anchor,
    Button,
    Checkbox,
    Divider,
    Group,
    Paper,
    PaperProps,
    PasswordInput,
    Stack,
    Text,
    TextInput,
    PinInput,
    Image
  } from '@mantine/core';
  import { useForm } from '@mantine/form';
  import { upperFirst, useToggle } from '@mantine/hooks';
  import { GoogleButton } from './GoogleButton';
  
  function AuthenticationForm(props: PaperProps) {
    const [type, toggle] = useToggle(['login', 'register']);
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
        <Text color='white' size="sm" fw={400} style={{textAlign:"center"}}>
        We just send you a verify code. <br/> Check your inbox to get them.
        </Text>
  
       
  
        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            

            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', background: "#111315", borderRadius:"0.5rem"}}>
      


            <PinInput size="lg" type="number" placeholder="0" styles={{input:{
                background: "#272B30",
                border: "none",
                color:"#fff",
                fontSize: "2rem",
                fontWeight: "500",
                margin: "60% 0%",
                padding: "55% 0%"

            }}} />


    </div>


    <Button 
  type="submit" 
  radius="xl" 
  className='continueButton'
  styles={{
    root: {
      background: 'linear-gradient(to right, #0A84FF, #5E5CE6)', 
      color: '#fff', 
      border: 'none',
      transition: 'background 0.3s ease',
      margin: "25% 0%",
      
      hover: {
        background: 'linear-gradient(to right, #5E5CE6, #0A84FF)',
      },
    },
  }}
>
  Continue
</Button>


         
          </Stack>
  
          
        </form>
      </Paper>


    );
  }

  export default AuthenticationForm