import { ContactPicker } from "./ContactPicker";




export function AppointmentForm(props){

    let  d = new Date();
    let  now = d.toLocaleDateString();
    let date = now.split("/");
    let x = `${date[0].padStart(2,"0")}-${date[1].padStart(2,"0")}-${date[2]}`;
   return(
     <form onSubmit={props.handleSubmit}  style={{textAlign:"center"}}>
      <h1>{x}</h1>
                <input name="title" type="text" value={props.title} onChange={props.changeTitle} /><br />
                <input name="date" type="date" min={x} value={props.date}  onChange={props.changeDate} /><br />
                <input name="time" value={props.time}  onChange={props.changeTime} /><br />
                <ContactPicker   onChange={props.changeContact} Contacts={props.Contacts} />
                <input type="submit" />
        </form>

   )
       
    
}

