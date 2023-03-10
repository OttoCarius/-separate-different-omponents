import React from "react";
import {
  Form,
  Label,
  Input,
  Button,
  Title,
} from "./FormThree.styled";
import { SiMonkeytie } from 'react-icons/si';
import { MdAlternateEmail } from 'react-icons/md';

function FormThree() {
  return (
    <div>
      <Form>
        <Title>Log in!</Title>
        <Label>
          Email
          <Input type="email" />
          <MdAlternateEmail
            style={{
              position: "absolute",
              top: "35px",
              left: "8px",
              color: "white",
            }}
            size={25}
          />
        </Label>
        <Label>
          Password
          <Input type="password" />
          <SiMonkeytie
            style={{
              position: "absolute",
              top: "35px",
              left: "8px",
              color: "white",
            }}
            size={25}
          />
        </Label>
        <Button type="submit">Sign In</Button>
      </Form>
    </div>
  );
}

export default FormThree;
