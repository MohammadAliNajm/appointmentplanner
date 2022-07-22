import {useState, useEffect} from 'react';
import { ContactForm } from './components/ContactForm';
import { TileList } from './components/TileList';

export function ContactPage({ Contacts,addContact }){

     const [name,setName] = useState('');
     const [phoneNum,setPhoneNum] = useState('');
     const [email,setEmail] = useState('');
     const [duplicate,setDuplicate] = useState(false)
     
     const handleSubmit = (e) => {
          e.preventDefault();
          if (!duplicate) {
            addContact(name, phoneNum, email);
            setName("");
            setPhoneNum("");
            setEmail("");
          }
        };
      
        useEffect(() => {
          const nameIsDuplicate = () => {
            const found = Contacts.find((contact) => contact.name === name);
            if (found !== undefined) {
              return true;
            }
            return false;
          };
         
      
          if (nameIsDuplicate()) {
            setDuplicate(true);
          } else {
            setDuplicate(false);
          }
        }, [name, Contacts, duplicate]);

        const changeName = ({target}) => {
          setName(target.value)
     }
     const changeNum = ({target}) => {
          setPhoneNum(target.value)
     }
     const changeEmail = ({target}) => {
          setEmail(target.value)
     }

     return( 
      <>
     <ContactForm handleSubmit={handleSubmit}  name={name} num={phoneNum} email={email} changeEmail={changeEmail} changeName={changeName} changeNum={changeNum} />
     
          <TileList tiles={Contacts} />
          
          </>
          )
     
    
    }