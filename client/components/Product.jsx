import React, {useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAllShoesThunk } from '../actions/shoes'
import { Image, Container, Segment } from 'semantic-ui-react'
import ImageCarousel from "./ImageCarousel";
import "pure-react-carousel/dist/react-carousel.es.css";


function Product () {

 const { id } = useParams()
 const dispatch = useDispatch()
 const shoes = useSelector(globalState => globalState.allShoes)
 const shoe = shoes.find(shoe => shoe.id == Number(id))

//add loader / skeleton
  useEffect(() => {
    dispatch(getAllShoesThunk())
  }, [])

  return (
    <>
      <header />
      <h1>{shoe?.name}</h1>

      <Container id="Carousel">
        <Segment attached="bottom">
          <ImageCarousel product = {shoe} />
        </Segment>
      </Container>

      <br/>
      <Container id="description">
        <p><strong>Description: <br/></strong>{shoe?.details}</p>
        <p><strong>Brand: </strong>{shoe?.brand}</p>
        <p><strong>Color: </strong>{shoe?.color}</p>
        <p><strong>Condition: </strong>{shoe?.condition}</p>
        <p><strong>Model: </strong>{shoe?.model}</p>
        <p><strong>Year: </strong>{shoe?.year}</p>
      </Container>
    </>
  )
}

export default Product