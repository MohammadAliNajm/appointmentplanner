import './App.css';
import {BrowserRouter as Router,Route,Routes,NavLink} from 'react-router-dom';
import { ContactPage } from './ContactsPage';
import { AppointmentPage } from './AppointmentPage';
import { Home } from './Home';
import {useState} from 'react';


function App() {
  const [contacts,setContacts] = useState([]);
  const [appointments,setAppointments] = useState([]);

  const addContact = (name,phoneNum,email) => {
    setContacts( [...contacts,{ name:name,phoneNum:phoneNum,email:email}])
  }
  const addAppointment = (title,contact,date,time) => { 

      setAppointments((prev) => [...prev,{title:title,contact:contact,date:date,time:time}])
   }



  return (
    <Router>
   <nav style={{backgroundColor:' #FABB33',height:80,overflow:'hidden',display:'flex',justifyContent:'center',alignItems:'center'}} >
    <ul style={{
      display:'flex',
      flexDirection: 'row',
      alignItems:'center',
      listStyle:'none',
      
      
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
    <Route exact path='/Contact' element={<ContactPage contacts={contacts} addContact={addContact}/>} />
    <Route exact path='/Appointment' element={<AppointmentPage Contacts={contacts} Appointments={appointments} addAppointment={addAppointment}/>} />
   </Routes>
   </Router>
  )
}

export default App;
