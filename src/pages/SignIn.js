import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import app from '../FirebaseConfig'; // Assuming it's a JavaScript file
import SideImg from '../assets/Side Image.png'
import Header from '../components/Header';
import Footer from '../components/Footer';

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const SignIn = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center bg-gray-50  sm:px-6 lg:px-1 mr-48">
        {/* Left column with full-size image (hidden on mobile) */}
        <div className="hidden sm:block sm:w-full h-full w-full object-cover mr-10">
        <img src={SideImg} alt="Sign In" />
      </div>
        {/* Right column with sign-in content */}
        <div className="flex-shrink-0 max-w-lg w-full space-y-8 mx-auto justify-center items-center">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Log in to Exclusive
            </h2>
            <p>Enter your details below </p>
          </div>
          <form className="mt-8 space-y-10" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm space-y-10">
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border-b border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border-b border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full h-16 flex justify-center py-5 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Sign in
              </button>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                type="button"
                className="w-full h-16 flex gap-3 text-black items-center justify-center border-4"
                onClick={signInWithGoogle}
              >
                <FaGoogle size={32} />
                Sign in with Google
              </button>
            </div>

            <div>
              <p className="text-center">
                If you're new here, <Link to="/signup" className="text-red-600 hover:text-red-500">Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
