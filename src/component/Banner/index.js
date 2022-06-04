import React from "react";
import { Carousel } from "react-bootstrap";
/*import { render } from "@testing-library/react";
import { useState } from "react"; */
import richard from "../../images/rich.jpeg";
import manika from "../../images/man.jpeg";
import "./banner.css";

const Banner = () => {
  return (
    <Carousel className="carouselClass">
      <Carousel.Item className="carouselItemClass">
        <img className="d-block w-100" src={richard} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItemClass">
        <img className="d-block w-100" src={manika} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
