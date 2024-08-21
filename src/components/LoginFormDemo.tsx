"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; // Adjust the import path as needed
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../../lib/utils";
import Link from "next/link";

export function LoginFormDemo() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null); // To handle error messages
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const { login } = useAuth(); // Access login function from context
  const router = useRouter(); // Next.js router for redirection

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    setLoading(true); // Start loading

    try {
      await login(formData.email, formData.password); // Use the login function from AuthContext
    } catch (e) {
      console.error("Error:", e);
      setError("Invalid email or password. Please try again."); // Set error message
    } finally {
      setLoading(false); // Stop loading after the request finishes
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-gray-700/30 backdrop-blur-xl border border-gray-100/20">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome back to AlogMania
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        The Ultimate DSA Challenge
      </p>

      {error && (
        <div className="text-red-500 text-sm mb-4">
          {error}
        </div>
      )}

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            value={formData.email}
            type="email"
            onChange={handleChange}
            disabled={loading} // Disable input while loading
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            value={formData.password}
            onChange={handleChange}
            disabled={loading} // Disable input while loading
          />
        </LabelInputContainer>
        <button
          className={cn(
            "bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]",
            loading && "opacity-50 cursor-not-allowed"
          )}
          type="submit"
          disabled={loading} // Disable button while loading
        >
          {loading ? "Logging in..." : "Login &rarr;"} {/* Button text changes based on loading state */}
          <BottomGradient />
        </button>

        <h2 className="text-sm text-neutral-800 dark:text-neutral-200 mt-3">
          Don't have an account? <Link href="/signup">Sign Up</Link>
        </h2>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
