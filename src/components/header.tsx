import React from 'react';

const Header = ({ title }: { title: string }) => {
  return (
    <header className="mt-4">
      <nav className="mx-auto flex justify-center">
        <h1 className="text-3xl font-semibold">{title}</h1>
      </nav>
    </header>
  );
};

export default Header;
