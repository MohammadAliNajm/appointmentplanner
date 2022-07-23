
export function ContactPicker(props) {

    return( 
    <>
        <select>
            <option value="select contact">select contact</option>
            {props.Contacts.map((contact) => {  return <option>{contact.name}</option>})}
        </select>

    </>

    )
    
}