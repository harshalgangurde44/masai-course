// src/Components/Navbar.tsx
import React from "react";

interface NavbarProps {
  pageName: string;
}

export const Navbar: React.FC<NavbarProps> = ({ pageName }) => {
  return (
    <div>
      <h2>Quiz Bank</h2>
      <h3 data-testid="page-name">{pageName}</h3>
      <a className="home-link" href="/">
        Home
      </a>
      <a className="all-problems" href="/all-problems">
        All Problems
      </a>
    </div>
  );
};
