import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { CircleUser } from 'lucide-react';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    // For simplicity, we'll just toggle the login state
    setIsLoggedIn(!isLoggedIn);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    // For simplicity, we'll just toggle the login state
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="text-white hover:text-gray-300 font-mono">
            aSillyZon
          </a>
        </div>
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <button onClick={handleLogout} className="hover:text-gray-300">
                Logout
              </button>
            </>
          ) : (
            <>
              <button onClick={handleLogin} className="hover:text-gray-300">
                Login
              </button>
              <button className="hover:text-gray-300">Signup</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
