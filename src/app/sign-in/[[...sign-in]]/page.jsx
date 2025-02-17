import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient bg-cover bg-fixed">
      <div className="p-8 bg-black bg-opacity-60 rounded-3xl shadow-2xl transform transition-transform hover:scale-105 hover:shadow-3xl animate-bounce">
        <SignIn routing="hash" forceRedirectUrl="/dashboard" />
      </div>
    </div>
  );
}
