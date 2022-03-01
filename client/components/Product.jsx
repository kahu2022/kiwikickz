import React, {useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import * as Base64 from 'base64-arraybuffer'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Image, Container, Segment , Header, Divider , Grid} from 'semantic-ui-react'
import ImageCarousel from "./ImageCarousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { getAllProductsThunk } from '../actions/products'
import MakeOffer from './MakeOffer';
import QuestionUser from "./QuestionUser";

function Product () {

 const { id } = useParams()
 const dispatch = useDispatch()
 const shoes = useSelector(globalState => globalState.allProducts)
 const shoe = shoes.find(shoe => shoe.id == Number(id))

//add loader / skeleton
  useEffect(() => {
    dispatch(getAllProductsThunk())
  }, [])

  return (
    <>
     <Container>
      <Container id="Carousel">
      <Divider/>
      <Header as='h2'>{shoe?.name}</Header>
      <Grid container columns={2} divided stackable>
        <ImageCarousel product = {shoe} />
        <MakeOffer product = {shoe} />
      </Grid>
      </Container>

      
      <Divider/>
      </Container>

      <Container>
        <QuestionUser />
      </Container>
    </>
  )
}

export default Product