
import { useState } from "react";
import { TileList } from "./components/TileList";
import { AppointmentForm } from "./components/AppointmentForm";


export function AppointmentPage({ Appointments,Contacts,addAppointment }) {
        const [title,setTitle]=useState('');
        const [contact,setContact] = useState();
        const [date,setDate] = useState();
        const [time,setTime] = useState();

       const  handleSubmit= (e) => {
        e.preventDefault();
        addAppointment(title,contact,date,time);
        setTitle("");
        setContact("");
        setDate('');
        setTime("");
       }

       const changeTitle = ({target}) => {
        setTitle(target.value)
       }
       const changeContact = ({target}) => {
        setContact(target.value)
       }
       const changeDate = ({target} ) => {
        setDate(target.value)
       }

       const changeTime = ({target} ) => {
        setTime(target.value)
       }
       


      

       return(
        <>
        <div style={{backgroundColor:'#3170FA',border: 'solid #3170FA'}}>
               
        <h1>Add Appointment</h1>
        
        <AppointmentForm  Contacts={Contacts} handleSubmit={handleSubmit} title={title} time={time} date={date}  contact={contact}
        changeContact={changeContact} changeDate={changeDate} changeTime={changeTime} changeTitle={changeTitle}
        /> 
        </div>
        <div>
                <h1>Appointments</h1>

                <TileList tiles={Appointments} />
        </div>
        
        </>
       )

}