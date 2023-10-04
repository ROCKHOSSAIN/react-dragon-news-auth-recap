import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Shared/Provider/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const location = useLocation();
    console.log('location in the login page',location)
    const navigate = useNavigate();
    const handlesubmit=e=>{
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        const form = new FormData(e.currentTarget)
        const email = form.get('email')  
        const password = form.get('password')
        signIn(email,password)
        .then(result=>{
            console.log(result.user)

            // navigate after login 
            navigate(location?.state
                ?
                location.state
                :
                '/'
                )
        })
        .catch(error=>{
            console.error(error)
        })  
        console.log(email,password)
    }
    return (
        <div>
            <Navbar></Navbar>
           <div>
           <h1 className="text-3xl font-bold text-center">Login now!</h1>
        <form onSubmit={handlesubmit} className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label  className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        </form>
        <p className="text-center  mt-4">Dont have an account ? <Link className="font-bold font-poppins text-blue-600" to='/register'>Register</Link></p>
           </div>
           
        </div>
    );
};

export default Login;