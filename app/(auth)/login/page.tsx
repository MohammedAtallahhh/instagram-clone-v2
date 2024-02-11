import React from "react";
import LoginForm from "@/components/LoginForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  // Redirect user to homepage if logged in
  const session = await auth();
  const user = session?.user;

  if (user) {
    redirect("/");
  }

  return (
    <div className="grid place-items-center h-screen">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
