import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'login successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')
            })
            .catch(error => console.log(error.message));
    }
    return (
        <div className='my-5'>
            <button onClick={handleGoogleLogin} className='w-full btn btn-warning text-white hover:bg-yellow-600'><FcGoogle className='mr-2' size={28}></FcGoogle> Sign up with Google</button>
        </div>
    );
};

export default SocialLogin;