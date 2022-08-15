
export function ContactPicker(props) {

    return( 
    <>
        <select style={{width:'100px'}}  onChange={props.onChange} required>
        <option value={""}>Select</option>
            {props.Contacts.map((contact) => {  return <option value={contact} key={contact}>{contact}</option>})}
        </select>

    </>

    )
    
}