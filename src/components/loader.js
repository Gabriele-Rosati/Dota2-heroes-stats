import React from 'react'
import { Dimmer } from 'semantic-ui-react'
import { Loader, Image, Segment } from 'semantic-ui-react'
import loadImage from '../images/load.jpg'

const LoaderExampleLoader = () => (
  <Segment>
    <Dimmer active>
      <Loader size='large'/>
    </Dimmer>
  </Segment>
)

export default LoaderExampleLoader