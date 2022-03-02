import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsThunk } from '../actions/products'
import { Grid, Container, Divider } from 'semantic-ui-react'


import ProductContainer from './ProductContainer'

import { manyProductsManyFilters } from '../lib'


function Home() {


  const allProducts = useSelector(state => state.allProducts)
  const currentFilters = useSelector(state => state.currentFilters)


  const testFilter = { key: 'price', min: 230, max: 270 }

  const results = manyProductsManyFilters(allProducts, currentFilters)

  return (
    <>
    
      <Container style={{ marginTop: '3em' }}>

        {allProducts ? <ProductContainer data={results} /> : null}

      </Container>

    </>
  )
}

export default Home