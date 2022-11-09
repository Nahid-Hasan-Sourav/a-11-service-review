import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { HiOutlineCamera } from 'react-icons/hi';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

function Navbars() {
    const {user,logOut}=useContext(AuthContext)

    const handleLogout =()=>{
      // console.log("logout")
      logOut()
      .then()
      .then()
      .catch(error => console.error(error))

    }


    // console.log("user",user.displayName);
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to='/home' className='mb-2'>
         <span className='fs-2 fw-bold me-2'>
         <HiOutlineCamera className='text-primary'></HiOutlineCamera>
         </span>
          <span className='text-danger fw-bold'>
           Flytographer
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-danger'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className='text-white' as={Link} to='/home'>Home</Nav.Link>
            <Nav.Link  className='text-white' as={Link} to='/blog'>Blog</Nav.Link>
            
            <>
            {
               user?.uid ?
              <>
                 <Nav.Link  className='text-white' as={Link} to='/my-review'>My Review</Nav.Link>
                 <Nav.Link  className='text-white' as={Link} to='/add-service'>Add Service</Nav.Link>
               
              </>
              :
              <>
            
              </>
              
            }
            </>
            
          </Nav>
          <Nav className="ms-auto">
           
            <>
            {
                user?.uid ?
              <>
                 
                 <Nav.Link  className='text-white bg-danger rounded-3' onClick={handleLogout}>Logout</Nav.Link>
              </>
              :
              <>
                <Nav.Link  className='text-white   bg-danger rounded-3' as={Link} to='/login'>Login</Nav.Link>
              </>
              
            }
            </>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;