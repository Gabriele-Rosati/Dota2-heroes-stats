import { Divider } from "semantic-ui-react"
import Match from './match'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import { Table } from "semantic-ui-react";

function RecentMatches() {
    const {tag} = useParams()
    const [matchData, setMatchData] = useState([]);
    const [teamData, setTeamData] = useState([]);
    const today = new Date();
    const timestamp = Math.floor(today.getTime() / 1000);
    useEffect( () => {
        const getData = async () => {
            const dataFromserver = await fetchMatchData();
            setMatchData(dataFromserver)
            console.log(dataFromserver)
            const dataFromserver2 = await fetchTeamData();
            setTeamData(dataFromserver2)
    
        }
        getData()
    },[])
    const fetchMatchData = async () => {
        const res = await fetch(`https://api.opendota.com/api/teams/${tag}/matches`)
        const json = await res.json();
        return json

    }
    const fetchTeamData = async () => {
        const res = await fetch(`https://api.opendota.com/api/teams/${tag}`)
        const json = await res.json();
        return json

    }
    const filterArray = matchData.filter(item => item.start_time > (timestamp - 1209600))
    const matches = filterArray.map(function(item) {
        return (
            <div key={item.match_id}>
                    <Match data={item} teamData={teamData}></Match>
                    <Divider hidden />
            </div>
        )
    })
    return(
        <div>
            <h1>Recent Matches</h1>
            <Table celled fixed textAlign="center" inverted>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Radiant</Table.HeaderCell>
                    <Table.HeaderCell>Match Details</Table.HeaderCell>
                    <Table.HeaderCell>Dire</Table.HeaderCell>
                </Table.Row>
            </Table.Header> 
            </Table>
            {matches}
        </div>
    )
}

export default RecentMatches