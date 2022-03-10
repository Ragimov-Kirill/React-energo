import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import foto1Img from '../assets/foto1.jpg';
import foto2Img from '../assets/foto2.jpg';
import foto3Img from '../assets/foto3.jpg';

export default class CarouselBox extends Component {
  render() {
     return (
       <div>
          <Carousel>
              <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={foto1Img}
                     alt="Town"
                  />
                  <Carousel.Caption>
                    <h3>График плановых работ (с отключением электрической энергии)</h3>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={foto2Img}
                     alt="Warning"
                  />
                  <Carousel.Caption>
                    <h3> Электро-теплобезопасность</h3>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={foto3Img}
                     alt="Elektro"
                  />
                  <Carousel.Caption>
                    <h3> Подключение электроустановок физических лиц к электрическим сетям</h3>
                  </Carousel.Caption>
              </Carousel.Item>

          </Carousel>

       </div>
     )
   }
 }
