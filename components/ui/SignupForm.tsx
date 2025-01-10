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
        email: '',
        terms: true, 
      },
  
      validate: {
        email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email')},
    });
  
    return (
      <Paper bg="none" radius="md" p="xl"  {...props}>
        <p className="text-xl md:text-sm text-white">Sign in with Google</p>
  
        <Group grow mb="md" mt="md">
          <GoogleButton/> 
        </Group>

        <Divider color='grey' mt="lg" mb="lg"/>

        <p className="text-xl md:text-sm text-white mb-4">Or continue with email address</p>

  
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
            src="/email.svg"
            alt="email Icon"
            height={20}
            width={20}
            style={{ position: 'relative', left: 10 }}
          />
          
          <TextInput
            required
            placeholder="Your Email"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
            radius="md"
            styles={{
              root: {
                width: '100%', // Make the TextInput root element take full width
              },
              input: {
                backgroundColor: '#111315',
                border: 'none',
                color: '#fff',
                marginLeft: '15px',
                paddingLeft: '10px',
                width: '90%', // Ensure the input element takes full width inside its container
              },
            }}
          />
        </div>


    <button
        type="submit"
        className="continueButton sm:w-full bg-gradient-to-r from-[#0A84FF] to-[#5E5CE6] text-white border-none p-3 text-[20px] md:p-1.5 md:text-[15px] rounded-full transition-colors duration-300 hover:from-[#5E5CE6] hover:to-[#0A84FF]"
      >
        Continue
      </button>


         
          </Stack>
  
          
        </form>
      </Paper>


    );
  }

  export default AuthenticationForm