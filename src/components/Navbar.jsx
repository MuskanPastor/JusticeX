import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0">
      {/* Left side */}
      <h1 className="text-xl font-semibold">Justicex</h1>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        <button className="bg-white text-black px-4 py-1 rounded-md">Login</button>
        <button className="bg-white text-black px-4 py-1 rounded-md">Sign In</button>
        <img
          src="https://via.placeholder.com/40"
          alt="User Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
