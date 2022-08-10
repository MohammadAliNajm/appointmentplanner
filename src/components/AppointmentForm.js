import { ContactPicker } from "./ContactPicker";




export function AppointmentForm(props){

    let  d = new Date();
    let  now = d.toLocaleDateString();
    let date = now.split("/");
    let x = `${date[0].padStart(2,"0")}-${date[1].padStart(2,"0")}-${date[2]}`;
   return(
     <form onSubmit={props.handleSubmit}  style={{
      display:"flex",
      justifyContent:"center",
      backgroundColor:"#3170FA",
      padding:10
      

     }}>
      <div style={{
       
        width:300,
        padding:5,
        textAlign:"center",
        backgroundColor:"#FABB33",
        borderRadius:5,
        fontFamily:'monospace',
        fontSize:18
      
      }}>
              Title:<br/>  <input className="Ain" name="title" type="text" value={props.title} placeholder="Enter Appointment Title" onChange={props.changeTitle} required/><br />
               Date:<br/> <input className="Ain" name="date" type="date" min={x} value={props.date}  onChange={props.changeDate} required /><br />
              Time:<br/>  <input className="Ain" name="time" value={props.time}  onChange={props.changeTime} placeholder="Enter time" required/><br />
                <ContactPicker   onChange={props.changeContact} Contacts={props.Contacts} required />
                <input type="submit" />
                </div>
        </form>

   )
       
    
}

