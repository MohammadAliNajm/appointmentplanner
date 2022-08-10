
export function ContactPicker(props) {

    return( 
    <>
        <select style={{width:'100px'}} required>
        
            {props.Contacts.map((contact) => {  return <option>{contact.name}</option>})}
        </select>

    </>

    )
    
}