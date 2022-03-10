import React, {Component} from 'react';
import CarouselBox from '../Components/CarouselBox';
import {Container,CardGroup,Card,Button} from "react-bootstrap";

export default class Home extends Component {
  render() {
     return (
       <>
       <CarouselBox/>
       <Container>
        <h2 className="text-center m-4">Новости</h2>
        <CardGroup className="p-3" >
            <Card className="p-3" border="primary">
              <Card.Img
                variant="top"
                src="https://www.energo.grodno.by/sites/default/files/styles/news_webp/public/2022-02/100%20%D0%B8%D0%B4%D0%B5%D0%B9.jpg?itok=PA2RijB0"
              />
              <Card.Body>
                <Card.Title>12.02.2022</Card.Title>
                <Card.Text>
                Подвели итоги первого конкурса «100 идей «Гродноэнерго»
                </Card.Text>
                <Button variant="primary">Конкурс</Button>
              </Card.Body>
            </Card>
            <Card className="p-3"  border="primary">
              <Card.Img
                variant="top"
                src="https://www.energo.grodno.by/sites/default/files/styles/news_webp/public/2022-02/007_388.jpg?itok=kcOpU9G3"
              />
              <Card.Body>
                <Card.Title>11.02.2022</Card.Title>
                <Card.Text>
              Министр энергетики и Председатель областного исполкома посетили филиал РУП «Гродноэнерго»
                </Card.Text>
                <Button variant="primary">Встреча</Button>
              </Card.Body>
            </Card>
            <Card className="p-3" border="primary">
              <Card.Img
                variant="top"
                src="https://www.energo.grodno.by/sites/default/files/styles/news_webp/public/2022-01/%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%BB%D0%B8%D0%BD%D0%B8%D1%8F_0.jpg?itok=QZ4w4R7l"
              />
              <Card.Body>
                <Card.Title>10.02.2022</Card.Title>
                <Card.Text>
                Прямая телефонная линия по теме: «Перспективы развития Гродненской энергосистемы»
                </Card.Text>
                <Button variant="primary">Прямая линия</Button>
              </Card.Body>
            </Card>
            </CardGroup>

        </Container>
      </>
     )
   }
 }
