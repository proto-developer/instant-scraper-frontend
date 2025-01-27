import  AuthenticationForm from "../ui/SignInForm"
const Login = () => {
    return (
      <div className="w-[100%] md:w-[90%] lg:w-[50%]">
        <h1 className="text-[30px] md:text-[32px] font-semibold text-center text-white"> Welcome Back</h1>
        <AuthenticationForm/>
        

      </div>
    );
  };


  export default Login