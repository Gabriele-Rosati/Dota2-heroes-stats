import { useParams } from "react-router-dom";
import Test from './test'

function TeamPage (props) {
    const {tag} = useParams()
    return(
        <div>
            <Test tag={tag}></Test>
        </div>
    )
}

export default TeamPage