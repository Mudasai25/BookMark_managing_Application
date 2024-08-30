import { UserButton } from '@clerk/nextjs';

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className='flex justify-center my-3'>
        <UserButton />
      </div>
      {children}
    </div>
  );
};
export default DashboardLayout;
