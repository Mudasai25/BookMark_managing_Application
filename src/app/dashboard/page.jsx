"use client";

import { useUser, SignOutButton } from "@clerk/nextjs";

import BookmarkManager from "../../components/BookmarkManager";
const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user?.fullName}!</h1>

      {/* Bookmark Manager Component */}
     <BookmarkManager/>

      {/* Logout Button */}
      <SignOutButton>
        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Logout
        </button>
      </SignOutButton>
    </div>
  );
};

export default Dashboard;
