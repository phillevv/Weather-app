import React from 'react';
import {Carousel} from 'react-bootstrap'
import SearchBar from './searchbar';

function Carousele() {
  return (
<div className="m-1">


<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('./beach.jpg')}
      alt="First slide"
    />
    <Carousel.Caption>
      
    <SearchBar></SearchBar>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('./beach.jpg')}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('./beach.jpg')}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="text-dark">Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>
  );
}

export default Carousele;
