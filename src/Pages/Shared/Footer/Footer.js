import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import { ImFacebook } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { HiOutlineCamera } from 'react-icons/hi';


const Footer = () => {
  return (
    <CDBFooter className="">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
          <Navbar.Brand as={Link} to='/home' >
         <span className='fs-2 fw-bold me-2'>
         <HiOutlineCamera className='text-primary'></HiOutlineCamera>
         </span>
          <span className='text-danger fw-bold'>
           Flytographer
          </span>
        </Navbar.Brand>
            <p className="my-3" style={{ width: '250px' }}>
              We are creating High Quality Resources and tools to Aid developers during the
              developement of their projects
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <ImFacebook/>
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <BsTwitter />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <GrInstagram />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Devwares
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Resources</CDBFooterLink>
              <CDBFooterLink href="/">About Us</CDBFooterLink>
              <CDBFooterLink href="/">Contact</CDBFooterLink>
              <CDBFooterLink href="/">Blog</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Support</CDBFooterLink>
              <CDBFooterLink href="/">Sign Up</CDBFooterLink>
              <CDBFooterLink href="/">Sign In</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Products
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Windframe</CDBFooterLink>
              <CDBFooterLink href="/">Loop</CDBFooterLink>
              <CDBFooterLink href="/">Contrast</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; Flytographer, 2022. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
  );
};
export default Footer;