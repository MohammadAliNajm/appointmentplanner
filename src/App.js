import './App.css';
import {BrowserRouter as Router,Route,Routes,NavLink} from 'react-router-dom';
import { ContactPage } from './ContactsPage';
import { AppointmentPage } from './AppointmentPage';
import { Home } from './Home';
import {useState, useEffect} from 'react';


function App() {
  const [contacts,setContacts] = useState([]);
  const [appointments,setAppointments] = useState([]);

  const addContact = (name,phoneNum,email) => {
    setContacts((prev) => [...prev,{ name:name,phoneNum:phoneNum,email:email}])
  }
  const addAppointment = (title,contact,date,time) => { //start with the contactform tomorrow if possible

      setAppointments((prev) => [...prev,{title:title,contact:contact,date:date,time:time}])
   }



  return (
    <Router>
   <nav style={{backgroundColor:'gray',height:70,overflow:'hidden',alignContent:'center'}} >
    <ul style={{
      display:'flex',
      flexDirection: 'row',
      alignItems:'center',
      listStyle:'none'
     
      
   }}>
      <li className='navitems'>
      <NavLink  className='navlinks' to='/'>Home</NavLink>
      </li>
      <li className='navitems'>
      
      <NavLink className='navlinks' to='/Contact'>Contacts</NavLink>
      </li>
      <li className='navitems'>
      <NavLink className='navlinks' to='/Appointment'>Appointments</NavLink>
      </li>
    </ul>
    


   </nav>

   <Routes>
    <Route exact path='/' element={<Home  />} />
    <Route exact path='/Contact' element={<ContactPage Contacts={contacts} addContact={addContact}/>} />
    <Route exact path='/Appointment' element={<AppointmentPage Appointments={appointments} addAppointment={addAppointment}/>} />
   </Routes>
   </Router>
  )
}

export default App;
