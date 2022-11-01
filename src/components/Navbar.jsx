import {  useContext } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { useNavigate, useParams,useHref,Link } from 'react-router-dom';
import {Button} from './Button';
import {AuthContext} from '../Context/AuthContext';

export const  NavComp=({open})=> {
    const {setUser}=useContext(AuthContext);
const navigate=useNavigate();
const location=useHref();


const handleLogout=()=>{
  navigate('/')
  setUser(null)
  localStorage.removeItem('token');
}

  return (
    <Navbar expand="lg"  style={{position:'sticky',top:0,height:'fit-content',zIndex:9999,borderBottom:'1px solid #dbdbdb',backgroundColor:'white'}} >
    <Container>
      <Navbar.Brand ><Link style={{
        color:'#a410e6',
        fontWeight:'bold',
        fontSize:18
      }} to='/projects'>
      ProjectManager</Link></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end gap-2">
        {location==='/projects'&&
        <Button onClick={open} title='add a project' variant='outline-dark'/>
        }
        <Button onClick={handleLogout} title='Logout' variant='outline-dark'/>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

