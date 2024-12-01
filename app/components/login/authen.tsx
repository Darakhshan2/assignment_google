"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { IoLogoGoogle } from "react-icons/io"; // Import Google icon


export default function SignInPage() {
  const [message, setMessage] = useState("");

  const handlerSignIn = async () => {
    try {
      await signIn('Google sign in'); // Change to 'google' for Google sign-in
      setMessage("Signing in with Google...");
    } catch (error) {
      console.error("Sign in error:", error);
      setMessage("Error signing in. Please try again.");
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url(/bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
      className="flex items-center justify-center text-white min-h-screen"
    >
      <div className="text-center p-24 rounded-md">
        <h1 className="text-4xl pb-3">SIGN IN</h1>
        <div>
          <button
            onClick={handlerSignIn}
            className="flex bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded"
          >
            Sign in with Google... <IoLogoGoogle className="text-2xl ml-2" />
          </button>
          {message && <div className="mt-4 text-blue-600">{message}</div>}
        </div>
      </div>
    </div>
  );
}
