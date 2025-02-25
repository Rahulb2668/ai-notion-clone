"use client";

import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function Header() {
  const { user } = useUser();
  return (
    <div className="flex justify-between items-center p-4">
      {user && (
        <h1 className="text-2xl font-bold">
          {user?.firstName}
          {"'s"} space
        </h1>
      )}

      {/* BreadCrumbs */}

      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
