"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      name,
      email,
      password,
    } as { email: string; password: string; name: String });

    if (data?.user) {
      // Store user's name in local storage
      localStorage.setItem("user_name", name);
      toast.success("Account created successfully");
      router.push("/auth/login");
    } else {
      toast.error("An error occurred while creating your account");
    }
  };

  return (
    <section>
      <div>
        <div>
          <div className="w-80 h-96 bg-slate-600 rounded-md flex items-center justify-center">
            <div>
              <div>
                <h1 className="text-center font-bold text-3xl pt-4">
                  Register
                </h1>
              </div>
              <div className="pb-2">
                <label htmlFor="email" className="py-1">
                  Full Name
                </label>
                <br />
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your Name"
                  className="text-black px-3 w-64 xl:w-64 h-10 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              <div className="pb-2">
                <label htmlFor="email" className="py-1">
                  Email
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                  className="text-black px-3 w-64 xl:w-64 h-10 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              <div className="pb-2">
                <label htmlFor="password" className="py-1">
                  Password
                </label>
                <br />
                <input
                  type="password"
                  name="password"
                  value={password}
                  id="password"
                  required
                  maxLength={8}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="text-black px-3 w-64 xl:w-64 h-10 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="px-10 py-2 bg-sky-600 rounded-xl"
                  onClick={handleSignUp}
                >
                  SignUp
                </button>
              </div>
              <div className="flex items-center justify-center">
                <p>
                  Already have an account?{" "}
                  <Link href="/auth/login">
                    <span className="text-blue-500">Login</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
