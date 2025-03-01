import { FlameKindling } from "lucide-react";
import React from "react";
import FireAnimate from "../Ui/FireAnimate";

const AuthLayout = ({ children, title = "", description = "" }) => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* LOGO */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <FlameKindling className="size-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">{title}</h1>
              <p className="text-base-content/60">{description}</p>
            </div>
          </div>

          {children}
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden lg:flex flex-col justify-center items-center relative">
        <FireAnimate />
      </div>
    </div>
  );
};

export default AuthLayout;
