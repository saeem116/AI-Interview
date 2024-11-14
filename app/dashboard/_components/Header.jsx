// "use client";

// import { UserButton } from "@clerk/nextjs";
// import Image from "next/image";
// import { usePathname, useRouter } from "next/navigation";
// import React, { useEffect } from "react";

// function Header() {
//   const path = usePathname();
//   const router = useRouter();

//   // useEffect(() => {
//   //   console.log(path);
//   // });
//   const howpage = () => {
//     router.push(`/dashboard/howItWorks`);
//   };

//   const dashboardPage = () => {
//     router.push(`/dashboard`);
//   };

//   const upgradePage = () => {
//     router.push(`/dashboard/upgrade`);
//   };
//   const questionsPage = () => {
//     router.push(`/dashboard/questions`);
//   };

//   return (
//     <div className=" flex p-4 items-center justify-between  bg-slate-300">
//       <Image src={"/logo.svg"} width={160} height={100} alt="logo" />

//       <ul className=" hidden md:flex gap-6">
//         <li
//           className={` hover:text-indigo-600 hover:font-bold transition-all cursor-pointer
//             ${path == "/dashboard" && "text-indigo-600 font-bold"}
//             `}
//           onClick={dashboardPage}
//         >
//           Dashboard
//         </li>
//         <li
//           className={` hover:text-indigo-600 hover:font-bold transition-all cursor-pointer
//             ${path == "/dashboard/questions" && "text-indigo-600 font-bold"}
//             `}
//           onClick={questionsPage}
//         >
//           Questions
//         </li>
//         <li
//           className={` hover:text-indigo-600 hover:font-bold transition-all cursor-pointer
//             ${path == "/dashboard/upgrade" && "text-indigo-600 font-bold"}
//             `}
//           onClick={upgradePage}
//         >
//           Upgrade
//         </li>
//         <li
//           className={` hover:text-indigo-600 hover:font-bold transition-all cursor-pointer
//             ${path == "/dashboard/howItWorks" && "text-indigo-600 font-bold"}
//             `}
//           onClick={howpage}
//         >
//           How it works?
//         </li>
//       </ul>
//       <UserButton />
//     </div>
//   );
// }

// export default Header;

"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid"; // Heroicons for icons

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const path = usePathname();
  const router = useRouter();

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const navigateTo = (url) => {
    router.push(url);
    setNavOpen(false); // Close menu after navigation on mobile
  };

  return (
    <header className="bg-slate-300 p-4">
      <div className="flex items-center justify-between  mx-auto">
        {/* Logo */}
        <Image src="/logo.svg" width={160} height={100} alt="logo" />

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          <li
            className={`hover:text-indigo-600 hover:font-bold transition-all cursor-pointer ${
              path === "/dashboard" && "text-indigo-600 font-bold"
            }`}
            onClick={() => navigateTo("/dashboard")}
          >
            Dashboard
          </li>
          <li
            className={`hover:text-indigo-600 hover:font-bold transition-all cursor-pointer ${
              path === "/dashboard/questions" && "text-indigo-600 font-bold"
            }`}
            onClick={() => navigateTo("/dashboard/questions")}
          >
            Questions
          </li>
          <li
            className={`hover:text-indigo-600 hover:font-bold transition-all cursor-pointer ${
              path === "/dashboard/upgrade" && "text-indigo-600 font-bold"
            }`}
            onClick={() => navigateTo("/dashboard/upgrade")}
          >
            Upgrade
          </li>
          <li
            className={`hover:text-indigo-600 hover:font-bold transition-all cursor-pointer ${
              path === "/dashboard/howItWorks" && "text-indigo-600 font-bold"
            }`}
            onClick={() => navigateTo("/dashboard/howItWorks")}
          >
            How it works?
          </li>
        </ul>
        {/* User Button */}
        <div className="hidden md:flex items-center">
          <UserButton />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={toggleNav}>
          {navOpen ? (
            <XIcon className="w-6 h-6 text-indigo-600" />
          ) : (
            <MenuIcon className="w-6 h-6 text-indigo-600" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden bg-slate-200 mt-4 p-4 rounded-lg shadow-lg space-y-4">
          <li
            className={`hover:text-indigo-600 hover:font-bold transition-all cursor-pointer ${
              path === "/dashboard" && "text-indigo-600 font-bold"
            }`}
            onClick={() => navigateTo("/dashboard")}
          >
            Dashboard
          </li>
          <li
            className={`hover:text-indigo-600 hover:font-bold transition-all cursor-pointer ${
              path === "/dashboard/questions" && "text-indigo-600 font-bold"
            }`}
            onClick={() => navigateTo("/dashboard/questions")}
          >
            Questions
          </li>
          <li
            className={`hover:text-indigo-600 hover:font-bold transition-all cursor-pointer ${
              path === "/dashboard/upgrade" && "text-indigo-600 font-bold"
            }`}
            onClick={() => navigateTo("/dashboard/upgrade")}
          >
            Upgrade
          </li>
          <li
            className={`hover:text-indigo-600 hover:font-bold transition-all cursor-pointer ${
              path === "/dashboard/howItWorks" && "text-indigo-600 font-bold"
            }`}
            onClick={() => navigateTo("/dashboard/howItWorks")}
          >
            How it works?
          </li>
          <UserButton />
        </ul>
      )}
    </header>
  );
}

export default Header;
