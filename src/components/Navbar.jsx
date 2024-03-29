
import logo from '../assests/companylogocropped.png'
import { Link } from 'react-router-dom';
import React from "react";

import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Collapse
} from "@material-tailwind/react";
 
export default function StcikyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  // React.useEffect(() => {
  //   window.addEventListener(
  //     "resize",
  //     () => window.innerWidth >= 960 && setOpenNav(false),
  //   );
  // }, []);
  const toggleOpen = () => setOpenNav((cur) => !cur);
 
  const navList = (
    <ul className={`lg:bg-transparent bg-[#052131] right-0 md:static w-full px-4 py-4 mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ${openNav ? 'absolute' : 'hidden'}`}>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal "
      >
        <Link to="/ourwork" className="flex items-center hover:text-gray-100 text-gray-400 font-redhat text-xl tracking-widest">
          Our Work
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/booknow" className="flex items-center hover:text-gray-100 text-gray-400 font-redhat text-xl tracking-widest">
          Book Now
        </Link>
      </Typography>
      
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/about" className="flex items-center hover:text-gray-100 text-gray-400 font-redhat text-xl tracking-widest">
          About
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/team" className="flex items-center hover:text-gray-100 text-gray-400 font-redhat text-xl tracking-widest">
          Team
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/map" className="flex items-center hover:text-gray-100 text-gray-400 font-redhat text-xl tracking-widest">
          Map
        </Link>
      </Typography>
      
    </ul>
  );
 
  return (
      <Navbar className="shadow-md sticky top-0 bg-[#052131] bg-opacity-100 ackdrop-blur-none backdrop-saturate-0 border-[#052131] z-[999] h-[10vh] max-w-full rounded-none px-0 pr-6">
        <div className="w-full  flex items-center justify-between h-full">
          <Link to={'/'} className='flex'>
          <img src={logo} alt="logo of TABA" className='h-12 mr-2 md:ml-8 ml-4' />
          <Typography
            className="text-white cursor-pointer py-1.5 self-center text-2xl font-bold whitespace-nowrap font-redhat"
          >
            TABA
          </Typography>
          </Link>
          
          <div className="flex items-center gap-4 ">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={toggleOpen}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
        </Collapse>
      </Navbar>
  );
}

