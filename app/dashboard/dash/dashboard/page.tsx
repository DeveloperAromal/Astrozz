"use client";
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const supabase = createClientComponentClient();

export default function Dashboard() {
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("hasLoggedIn");
    router.push("/auth/login");
    toast.success("SignOut Successfully");
  };

  return (
    <section>
      <div>
        <h1 className="text-center text-sky-600 text-3xl py-10">Dashboard</h1>
        <div className="flex items-center gap-10 flex-wrap justify-center py-10">
          <div>
            <Link href="/notification">
              <div className="w-64 h-44 bg-sky-700 rounded-md">
                <h1 className="text-center text-2xl flex items-center justify-center h-full">
                  Announcement
                </h1>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/notification">
              <div className="w-64 h-44 bg-sky-700 rounded-md">
                <h1 className="text-center text-2xl flex items-center justify-center h-full">
                  Space Week
                </h1>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/quiz">
              <div className="w-64 h-44 bg-sky-700 rounded-md">
                <h1 className="text-center text-2xl flex items-center justify-center h-full">
                  Quiz
                </h1>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/notification">
              <div className="w-64 h-44 bg-sky-700 rounded-md">
                <h1 className="text-center text-2xl flex items-center justify-center h-full">
                  Announcement
                </h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="px-10 py-2 bg-red-600 rounded-md"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      </div>
    </section>
  );
}
