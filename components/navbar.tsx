import { UserButton } from "@clerk/nextjs";

import { MobileSidebar } from "./mobile-sidebar";

const Navbar = async () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar isPro apiLimitCount={100} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
