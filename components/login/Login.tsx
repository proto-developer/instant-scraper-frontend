import  AuthenticationForm from "../ui/LoginForm"
const Login = () => {
    return (
      <div className="w-[100%] md:w-[50%]">
        <h1 className="text-[44px] md:text-[32px] font-semibold text-center text-white"> Welcome Back</h1>
        <AuthenticationForm/>
        

      </div>
    );
  };


  export default Login