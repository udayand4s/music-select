"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export function Appbar() {
  const { data: session } = useSession();

  return (
    <div>
      <div className="flex justify-between">
        <div>MUSIC</div>
        <div>
          {session?.user ? (
            <button
              className="m-2 p-2 bg-blue-400"
              onClick={() => signOut()} // Add parentheses here to invoke the function
            >
              SignOut
            </button>
          ) : (
            <button
              className="m-2 p-2 bg-blue-400"
              onClick={() => signIn()} // Add parentheses here to invoke the function
            >
              SignIn
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
