import { useParams } from "react-router-dom";
import Test from './test'
import Navbar from '../components/navbar'
import Footer from "../components/footer";

function TeamPage (props) {
    const {tag} = useParams()
    return(
        <div>
            <Navbar></Navbar>
            <Test tag={tag} players={props.players}></Test>
            <br></br>
            <Footer></Footer>
        </div>
    )
}

export default TeamPage