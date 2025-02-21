import { Mail, Lock, User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../components/Fields/Input";
import AuthLayout from "../components/layouts/AuthLayout";
import { SignUpSchema } from "../validations/auth.schema.js";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <Input
          label="Full Name"
          placeholder="John Doe"
          Icon={<User className="size-5 text-base-content/40" />}
          {...register("fullName")}
          error={errors.fullName?.message}
        />

        {/* Email */}
        <Input
          label="Email"
          placeholder="you@example.com"
          Icon={<Mail className="size-5 text-base-content/40" />}
          {...register("email")}
          error={errors.email?.message}
        />

        {/* Password */}
        <Input
          label="Password"
          placeholder="••••••••"
          type={"password"}
          Icon={<Lock className="size-5 text-base-content/40" />}
          {...register("password")}
          error={errors.password?.message}
        />

        <button type="submit" className="btn btn-primary w-full">
          Create Account
        </button>
      </form>

      <div className="text-center">
        <p className="text-base-content/60">
          Already have an account?{" "}
          <Link to="/login" className="link link-primary">
            Sign in
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
