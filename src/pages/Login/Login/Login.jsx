import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../../components/SocialLogin';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'login successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })
    };

    return (
        <div className='flex justify-center p-10 md:p-0 items-center bg-image min-h-screen'>
            <div className='md:w-1/3 p-10 box border rounded-2xl'>
                <form onSubmit={handleLogin}>
                    <h3 className='text-white text-2xl font-bold my-5'>Please Login to your account!</h3>
                    <div className='w-full mb-5'>
                        <p className="text-white text-lg font-semibold">Email</p>
                        <input className='w-full rounded-md p-3 input-border input' type="email" placeholder="Email" name='email' required />
                    </div>
                    <div className='w-full'>
                        <p className="text-white text-lg font-semibold">Password</p>
                        <input className='w-full rounded-md p-3 input-border input' type="password" placeholder="password" name='password' required />
                        <Link className='text-sm text-white'>Forgot password?</Link>
                    </div>
                    <div className='my-5'>
                        <input className='w-full btn btn-warning text-white hover:bg-yellow-600' type="submit" value="Login" />
                    </div>

                </form>
                <div className="divider divide-white text-white">OR</div>
                <div>
                    <SocialLogin></SocialLogin>
                    <h3 className='text-white font-semibold text-sm '>Don't have any account? <Link to='/register'>Please Register</Link></h3>
                </div>
            </div>
        </div>
    );
};

export default Login;