import React from "react";

type Props = {
  children: React.ReactNode;
};

function AuthLayout({ children }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      {children}
    </div>
  );
}

export default AuthLayout;
