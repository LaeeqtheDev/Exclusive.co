import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../FirebaseConfig'; // Assuming it's a JavaScript file
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideImg from '../assets/Side Image.png'

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpWithEmailAndPassword = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.error('Error signing up with email and password:', error);
    }
  };

  const signUpWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      // Additional actions after signing up with Google if needed
      navigate('/');
    } catch (error) {
      console.error('Error signing up with Google:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col w-full items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-1">
        <div className="w-full flex flex-col sm:flex-row">
          {/* Left column with full-size image (hidden in sm) */}
          <div className="hidden sm:block sm:w-full h-full w-full object-cover mr-10">
            <img src={SideImg} alt="Sign In" />
          </div>

          {/* Right column with sign-up content */}
          <div className=" w-full lg:w-1/2 md:w-3/4  mt-24 mr-44">
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create an Account</h2>
              <p>Enter your details below</p>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="mt-5">
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 mb-10 border-b-2  border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none rounded-none relative block w-full px-3 mb-10 border-b-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none rounded-none relative block w-full px-3 mb-10 border-b-2 border-gray-300 placeholder-gray-500 text-gray-9  focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={signUpWithEmailAndPassword}
                  className="group h-16 relative w-full flex justify-center py-5 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Create your Account
                </button>
              </div>

              <div className="flex justify-center space-x-4">
                <button
                  type="button"
                  onClick={signUpWithGoogle}
                  className="w-full h-16 flex rounded-md gap-2 items-center justify-center border-2 "
                >
                  <FaGoogle size={32} color="black " />
                  SignUp with Google
                </button>
              </div>

              <div>
                <p className="text-center">
                  If you're already a user, <Link to="/signin" className="text-red-600 hover:text-red-500">Sign In</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
