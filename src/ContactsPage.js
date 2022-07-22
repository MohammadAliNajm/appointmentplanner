import {useState, useEffect} from 'react';
import { ContactForm } from './components/ContactForm';
import { TileList } from './components/TileList';


export const ContactPage = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  useEffect(() => {
    const nameIsDuplicate = () => {
      const found = contacts.find((contact) => contact.name === name);
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
  }, [name, contacts, duplicate]);

  const changeName = ({target}) => {
    setName(target.value)
  }
  const changePhone = ({target}) =>{
    setPhone(target.value)
  }
  const changeEmail= ({target}) =>{
    setEmail(target.value)
  }
  

  return (
    <>
      <section>
        <h2 style={{textAlign:"center"}}>
          Add Contact
          {duplicate ? " - Name Already Exists" : ""}
        </h2>
        <ContactForm
          name={name}
          changeName={changeName}
          phone={phone}
          changePhone={changePhone}
          email={email}
          changeEmail={changeEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </>
  );
};
