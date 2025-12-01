import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export default function Heroes() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <SignedOut>
        <SignInButton mode="modal">
          <button className="bg-blue-400 text-white px-4 py-2 rounded">
            Get MindVault for free
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
