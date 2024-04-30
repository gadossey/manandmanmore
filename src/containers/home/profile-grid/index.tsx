import React from "react";
import { navigate } from "gatsby";

import styled from "styled-components";
import Icon from "../../../components/profile-grid/profile-grid";
import { BsBook, BsQrCodeScan } from "react-icons/bs";
import { BiBarcode } from "react-icons/bi";
import { FcCustomerSupport } from "react-icons/fc";
import { BsBookmarkPlus } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";

const IconsContainer = styled.div`
  display: grid;
  padding-bottom: 10px;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
    --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
 
  --tw-gradient-to: #7fffd4;
    --tw-gradient-from: #2e6c4b;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(153, 0, 0, 0));
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  font-size: 16px;
  line-height: 22px;
  --tw-bg-opacity: 1;
    background-color: rgb(244 244 244/var(--tw-bg-opacity));
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const IconGrid: React.FC = () => {

  const handleUserManualClick = () => {
    navigate("/product-list");
  };

  return (
    <IconsContainer>
      <Icon to="/signup?accessPoint=qrscanner" title="QR CODE Scanner" icon={<BsQrCodeScan />}/>
      <Icon to="/signup?accessPoint=signup"  title="My Account" icon={<MdManageAccounts />}/>
      <Icon to="#" onClick={handleUserManualClick} title="User Manual" icon={<BsBook />} />
      <Icon to="/warranty" title="Warranty" icon={<BiBarcode />} />
      <Icon to="/page1" title="Careers" icon={<BsBookmarkPlus />} />
      <Icon to="/page1" title="Help" icon={<FcCustomerSupport />} />

      {/* Add more icons as needed */}
    </IconsContainer>
  );
};

export default IconGrid;

