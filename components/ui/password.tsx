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
  import { useToggle } from '@mantine/hooks';
  
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

        <p className="text-lg md:text-sm mb-[8%] text-white">Create a New Password</p>

  
      
        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            

          <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            background: '#111315',
            borderRadius: '0.5rem',
            width: '100%', // Ensure the parent div takes up full width
          }}
          className="p-2 text-[16px] md:p-0"
        >
          <Image
            src="/password.svg"
            alt="password Icon"
            height={20}
            width={20}
            style={{ position: 'relative', left: 10 }}
          />

          <PasswordInput
            required
            placeholder="New Password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Password should include at least 6 characters'}
            radius="md"
            styles={{
              root: {
                width: '100%', // Make the PasswordInput root element take full width
              },
              input: {
                backgroundColor: '#111315',
                border: 'none',
                color: '#fff',
                paddingLeft: '10px',
                marginLeft: '10px',
                paddingRight: '15px',
                width: '95%', // Ensure the input element takes full width inside its container
              },
            }}
          />
        </div>


    <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            background: '#111315',
            borderRadius: '0.5rem',
            width: '100%', // Ensure the parent div takes up full width
          }}
          className="p-2 text-[16px] md:p-0"
        >
          <Image
            src="/password.svg"
            alt="password Icon"
            height={20}
            width={20}
            style={{ position: 'relative', left: 10 }}
          />

          <PasswordInput
            required
            placeholder="Confirm Password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Password should include at least 6 characters'}
            radius="md"
            styles={{
              root: {
                width: '100%', // Make the PasswordInput root element take full width
              },
              input: {
                backgroundColor: '#111315',
                border: 'none',
                color: '#fff',
                paddingLeft: '10px',
                marginLeft: '10px',
                paddingRight: '15px',
                width: '95%', // Ensure the input element takes full width inside its container
              },
            }}
          />
        </div>


    <button
        type="submit"
        className="continueButton sm:w-full bg-gradient-to-r from-[#0A84FF] to-[#5E5CE6] text-white border-none p-2 text-[18px] md:p-1.5 md:text-[15px] rounded-full transition-colors duration-300 hover:from-[#5E5CE6] hover:to-[#0A84FF]"
      >
        Continue
      </button>


         
          </Stack>
  
          
        </form>
      </Paper>


    );
  }

  export default AuthenticationForm