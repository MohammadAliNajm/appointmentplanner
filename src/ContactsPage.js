import {useState, useEffect} from 'react';
import { ContactForm } from './components/ContactForm';

export function ContactPage(){

     const [name,setName] = useState();
     const [phoneNum,setPhoneNum] = useState();
     const [email,setEmail] = useState();
     

     return( <ContactForm/>)
     
    
    }