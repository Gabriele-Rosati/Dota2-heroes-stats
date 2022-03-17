import { Container } from "semantic-ui-react"
import { Button, Icon } from "semantic-ui-react"
const style = {
    h1: {
      color: 'white',
    }
  }

function Footer() {
    return(
        <div id='footer'>
            <Container textAlign="center">
                <br></br>
                <br></br>
                <h1 style={style.h1}>Contact</h1>
                <Button color='facebook'>
                <Icon name='facebook' /> Facebook
                </Button>
                <Button color='twitter'>
                <Icon name='twitter' /> Twitter
                </Button>
                <Button color='google plus'>
                <Icon name='google plus' /> Google Plus
                </Button>
                <Button color='vk'>
                <Icon name='vk' /> VK
                </Button>
                <Button color='linkedin'>
                <Icon name='linkedin' /> LinkedIn
                </Button>
                <Button color='instagram'>
                <Icon name='instagram' /> Instagram
                </Button>
                <Button color='youtube'>
                <Icon name='youtube' /> YouTube
                </Button>      
            </Container>
        </div>
    )
}

export default Footer