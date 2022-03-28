import React from 'react'
import { Loader, Image, Segment } from 'semantic-ui-react'
import loadImage from '../images/load.jpg'

const LoaderExampleLoader = () => (
  <Segment>

      <Loader />


    <Image src={loadImage} size='medium'/>
  </Segment>
)

export default LoaderExampleLoader