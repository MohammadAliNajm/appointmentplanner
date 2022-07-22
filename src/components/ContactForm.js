import React from "react";
export const ContactForm = ({
    name,
    changeName,
    phone,
    changePhone,
    email,
    changeEmail,
    handleSubmit
  }) => {
    return (
      <form onSubmit={handleSubmit} style={{ textAlign:"center"}}>
        <label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={changeName}
            required
            placeholder="Contact Name"
          />
        </label>
        <br />
        <label>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={changePhone}
            required
            // regex is for US phone numbers
            
            placeholder="Contact Phone (###-###-####)"
          />
        </label>
        <br />
        <label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={changeEmail}
            required
            placeholder="Contact Email"
          />
        </label>
        <br />
        <input type="submit" value="Add Contact" />
      </form>
    );
  };
  