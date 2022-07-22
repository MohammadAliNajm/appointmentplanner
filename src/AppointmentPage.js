 import { useState } from "react";


export function AppointmentPage({ Appointments,Contacts,addAppointment }) {
        const [title,setTitle]=useState('');
        const [contact,setContact] = useState();
        const [date,setDate] = useState();
        const [time,setTime] = useState();

       const  handleSubmit= (e) => {
        e.preventDefault();
        setTitle("");
        setContact({});
        setDate('');
        setTime("");
       }


}