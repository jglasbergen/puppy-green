import { Box, Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20
        }}
      >
        <Box border={1} borderRadius={3} boxShadow={6} p={5} mx="auto">
          <form style={{ width: "100%" }}>
            <h1>Contact Form</h1>

            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input id="name" type="text" />
            </FormControl>

            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" type="email" />
            </FormControl>

            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="email">Message</InputLabel>
              <Input id="email" multiline rows={10} />
            </FormControl>

            <Button variant="contained" color="primary" size="medium">
              Send
            </Button>
          </form>
        </Box>
      </div>
    );
  }
}

export default Contact;
