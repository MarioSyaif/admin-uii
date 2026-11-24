import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Elements/Logo';

function AuthLayout(props) {
  const {
    children,
    footerText = "Create an account",
    footerLink = "/register",
  } = props;

  return (
    <main className="min-h-screen bg-special-mainBg flex justify-center items-center p-4">
      {/* container start */}
      <div className="w-full max-w-sm">
        <Logo />

        {children}

        {/* Footer HANYA muncul kalau footerText diisi */}
        {footerText && (
          <div className="flex justify-center mt-6">
            <Link
              to={footerLink}
              className="text-primary text-sm font-bold hover:underline"
            >
              {footerText}
            </Link>
          </div>
        )}
      </div>
      {/* container end */}
    </main>
  );
}

export default AuthLayout;