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
        name: '',
        password: '',
        terms: true,
      },
  
      validate: {
        email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
        password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
      },
    });
  
    return (
      <Paper bg="none" radius="md" p="xl"  {...props}>
        <Text color='white' size="sm" fw={400}>
          Sign in with Google
        </Text>
  
        <Group grow mb="md" mt="md">
          <GoogleButton bg='black' radius="md"> <Text color='white' fw={500} >Google</Text> </GoogleButton>
        </Group>

        <Divider color='grey' mt="lg" mb="lg"/>

        <Text color='white' size="sm" fw={400} mb="lg" mt="lg"  >Or continue with email address</Text>
        {/* <Divider label="Or continue with email" labelPosition="center" my="lg" /> */}
  
        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            {type === 'register' && (
              <TextInput
                label="Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                radius="md"
              />
            )}
    

            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', background: "#111315", borderRadius:"0.5rem"}}>
      <Image
        src="/email.svg"
        alt="email_Icon"
        h={20}
        w={20}
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

<PasswordInput
              required
              placeholder="Password"
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password && 'Password should include at least 6 characters'}
              radius="md"

              styles={{
                input: {
                  backgroundColor: '#111315', 
                  border: "none",
                  color: "#fff",
                  marginLeft: "15px",
            paddingLeft: '10px',
                  width: "210px"
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
      hover: {
        background: 'linear-gradient(to right, #5E5CE6, #0A84FF)',
      },
    },
  }}
>
  Continue
</Button>


            {/* <Text color='white' fw={100} size='sm' style={ {textAlign:"center"}} >Don't have an account? <b>  Register </b></Text> */}

            <Anchor style={ {color:"white" , fontWeight: "100" , fontSize:"small", textAlign:"center" }} href="/signup" >
            Don't have an account? <b>  Sign up </b>
    </Anchor>
  
            {/* {type === 'register' && (
              <Checkbox
                label="I accept terms and conditions"
                checked={form.values.terms}
                onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
              />
            )} */}
          </Stack>
  
          {/* <Group justify="space-between" mt="xl">
            <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
              {type === 'register'
                ? 'Already have an account? Login'
                : "Don't have an account? Register"}
            </Anchor>
            
          </Group> */}
        </form>
      </Paper>


    );
  }

  export default AuthenticationForm