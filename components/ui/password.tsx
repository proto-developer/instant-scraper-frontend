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
    Image
  } from '@mantine/core';
  import { useForm } from '@mantine/form';
  import { upperFirst, useToggle } from '@mantine/hooks';
  import { GoogleButton } from './GoogleButton';
  
  function AuthenticationForm(props: PaperProps) {
    const [type, toggle] = useToggle(['login', 'register']);
    const form = useForm({
      initialValues: {
        password: '',
        terms: true, 
      },
  
      validate: {
        password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null)},
    });
  
    return (
      <Paper bg="none" radius="md" p="xl"  {...props}>
        <Text color='white' size="sm" fw={400} style={{marginBottom: "10%"}}>
        Create a New Password
        </Text>
  
      
        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            

            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', background: "#111315", borderRadius:"0.5rem"}}>
      <Image
        src="/password.svg"
        alt="email_Icon"
        h={20}
        w={20}
        style={{ position: 'relative', left: 10 }}
      />
      <TextInput
        required
        placeholder="New Password"
        value={form.values.password}
        onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
        error={form.errors.email && 'Invalid password'}
        radius="md"
        styles={{
          input: {
            backgroundColor: '#111315',
            border: 'none',
            color: '#fff',
            marginLeft: "15px",
            paddingLeft: '10px',
          },
        }}
      />
    </div>


    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', background: "#111315", borderRadius:"0.5rem"}}>
      <Image
        src="/password.svg"
        alt="email_Icon"
        h={20}
        w={20}
        style={{ position: 'relative', left: 10 }}
      />
      <TextInput
        required
        placeholder="Confirm Password"
        error={form.errors.email && 'Invalid password'}
        radius="md"
        styles={{
          input: {
            backgroundColor: '#111315',
            border: 'none',
            color: '#fff',
            marginLeft: "15px",
            paddingLeft: '10px',
          },
        }}
      />
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
      marginTop: "5%" ,
      width: "100%",
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