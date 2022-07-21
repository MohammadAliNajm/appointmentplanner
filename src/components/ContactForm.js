import React from "react";

export function ContactForm(props) {

    return(

        <form   style={
            {
            textAlign:'center',

            }
            }>
              Enter Your Name:<br /> <input type="text" value={props.name} onChange={props.changeName}  /><br />
              Enter Your Phone Number:<br /> <input   type="tel" value={props.num} onChange={props.changeNum} /><br />
              Enter Your Email:<br />  <input  type="email" value={props.email}  onChange={props.changeEmail}/><br />
                <input type="submit" />
        </form>
    )
}