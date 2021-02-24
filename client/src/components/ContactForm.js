import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <div>		
			<TextField
              id="name"
              label="Name"
              multiline
              rows={1}
              fullWidth
              variant="outlined"
			  margin="normal"
            />
      </div>
      <div>				
		    <TextField
              id="email"
              label="Email"
              multiline
              rows={1}
              fullWidth
              variant="outlined"
			  margin="normal"
            />
      </div>
      <div>
		
		    <TextField
              id="message"
              label="Message"
              multiline
              rows={2}
              fullWidth
              variant="outlined"
			  margin="normal"
            />
      </div>
	        <Button type="submit" variant="contained" color="primary">
              {status}
            </Button>
    </form>
  );
};

export default ContactForm;