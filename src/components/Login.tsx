import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { User } from "../api";

export const Login = () => { 
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const onSubmit = () => {
      User.login(email);
      if (localStorage.getItem("token")) {
          navigate("/dashboard");
      }
    }
    
    return (<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Log in
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={(event) => setEmail(event.target.value)}/>
          <Button color='teal' fluid size='large' onClick={onSubmit}>
            Login
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>);
}