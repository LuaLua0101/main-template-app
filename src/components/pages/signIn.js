import React, { useState } from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import Hello from '../molecules/helloBG'
import detectmob from "../../utils/detectMobile";

const LoginForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  return <>
   {!detectmob() && <Hello />}
    <Grid textAlign='center' style={{ height: '100vh', margin: 0 }} verticalAlign='middle'>
      <Grid.Column>
        <Header as='h2' color='teal' textAlign='center'>
          Log-in to your account
      </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Button color='blue' fluid size='large'>
              Đăng nhập
          </Button>
            <br />
            <Button.Group>
              <Button>Quên mật khẩu</Button>
              <Button.Or text='' />
              <Button positive>Đăng ký</Button>
            </Button.Group>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </>
}

export default LoginForm