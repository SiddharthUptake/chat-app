import React from "react";
import AuthLayout from "../components/layouts/AuthLayout";
import Input from "../components/Fields/Input";
import { LoginSchema } from "../validations/auth.schema";

const Login = () => {

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(LoginSchema),
    });

    const onSubmit = (data) => {
      console.log("Form Data:", data);
    };


  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="Email"
          placeholder="you@example.com"
          Icon={<Mail className="size-5 text-base-content/40" />}
          {...register("email")}
          error={errors.email?.message}
        />

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
          Don't have an account?
          <Link to="/signup" className="link link-primary">
            Sign Up
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
