import React from "react";
import '../Footer.css'
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Copyright = () => {
    const currentYear = new Date().getFullYear();

  return (
    <div className="copyrightcontainer mt-3 pt-3 flex flex-col-reverse md:flex-row items-center justify-between">
      <div className="">
        <p className="text-sm sm:text-base/7 text-gray-600">© {currentYear} AccraBeautySupply. All rights reserved.</p>
      </div>
      <div className="flex gap-3 mb-2 md:mb-0">
        <XIcon />
        <InstagramIcon />
        <FacebookIcon />
      </div>
    </div>
  );
};

export default Copyright;
