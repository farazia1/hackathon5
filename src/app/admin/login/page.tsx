"use client"
// src/app/adminPannel/login/page.tsx
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // For navigation in app directory
import { auth } from '../../firebaseConfig'; // Import your Firebase configuration
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import the function directly

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Use the imported function
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/admin'); // Redirect to the admin page
    }  catch (error) {
      console.error('Login failed:', error); // Log the error for debugging
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border p-2 rounded w-full"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
