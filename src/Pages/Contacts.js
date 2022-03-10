import React, {Component} from 'react';
import {Form, Button, Container} from 'react-bootstrap';

export default class Contacts extends Component {
  render() {
     return (
       <Container style={{width: '500px'}}>
          <h1 className="text-center">Наши контакты</h1>
          <Form>
              <Form.Group controlId= "formBasicEmail">
                <Form.Label> Электронная почта </Form.Label>
                <Form.Control type ="email" placeholder= "Введите адрес электронной почты"/>
                <Form.Text>
                Мы никогда не будем делиться вашей электронной почтой с кем-либо еще
                </Form.Text>
              </Form.Group>

              <Form.Group controlId= "formBasicPassword">
                <Form.Label> Введите пароль: </Form.Label>
                <Form.Control as="textarea" rows="3"/>
              </Form.Group>

              <Form.Group controlId= "formBasicCheckbox">
                <Form.Check type="checkbox" label="Проверить меня"/>
              </Form.Group>

              <Button variant="primary" type="submit"> Подтвердите </Button>
          </Form>
        </Container>
     )
   }
 }
