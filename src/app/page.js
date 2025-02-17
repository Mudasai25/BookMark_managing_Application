import { SignIn } from '@clerk/nextjs';

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen'>
     <SignIn routing="hash" forceRedirectUrl="/dashboard" />
  </div>
  );
}
