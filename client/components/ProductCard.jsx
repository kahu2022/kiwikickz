import React from 'react'
import { Card, Grid , Icon, Image , Reveal} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/products'

function ProductCard(props) {
  const obj = props.data
  const dispatch = useDispatch()

  return (
    <>
    
    <Grid.Column>
      <Card>
      <Link to={`/product/${obj.id}`}>
        <Reveal animated='move right'>
        <Reveal.Content visible>
          <Image size= 'medium' src={obj.image1}/>
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image size= 'medium' src={obj.image2} />
        </Reveal.Content>
      </Reveal>
      </Link>
        <Card.Content>
          <Card.Header>{obj.name}</Card.Header>
          <Card.Meta>
            <span className='date'>{obj.createdDate}</span>
          </Card.Meta>
          <Card.Description>
            {`Size : ${obj.size}`}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Card.Header as='h2'><a onClick={() => {dispatch(addToCart(obj))}}><Icon name='plus circle'/></a>{`$ ${obj.price}`}</Card.Header>
          
        </Card.Content>
      </Card>

  </Grid.Column>
  
  </>
  )
}

export default ProductCard