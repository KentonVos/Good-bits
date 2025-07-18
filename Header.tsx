import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6 border-b border-gray-700">
            <div className="font-bold text-xl tracking-wider text-white">
                the good bits
            </div>
            <nav className="hidden md:flex items-center space-x-8">
                <a href="#" className="font-mono text-sm text-gray-400 hover:text-white transition-colors">01 INTRODUCTION</a>
                <a href="#" className="font-mono text-sm text-white flex items-center"><span className="text-orange-500 mr-2">▶</span>RECIPES</a>
                <a href="#" className="font-mono text-sm text-gray-400 hover:text-white transition-colors">03 RUM LOCATOR</a>
                <a href="#" className="font-mono text-sm text-gray-400 hover:text-white transition-colors">04 ABOUT</a>
            </nav>
        </div>
    </header>
  );
};

export default Header;