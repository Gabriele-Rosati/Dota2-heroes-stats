import { useEffect, useState } from 'react'
import HeroMatches from './heroMatches'
import LoaderExampleLoader from './loader'
import { List } from 'semantic-ui-react'
import { Menu } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'

function Replays(props) {
  const [matchData, setMatchdata] = useState('')

  useEffect(() => {
    const getData = async () => {
      const dataFromserver = await fetchMatchData();
      setMatchdata(dataFromserver)
    }
    getData()
  }, [])

  const fetchMatchData = async () => {
    const res = await fetch(`https://api.opendota.com/api/publicMatches?mmr_descending=1`)
    const json = await res.json();
    return json

  }

  const getMatchData = () => {
    if (matchData !== '') {
      let direTeam;
      let radiantteam;
      let filterData = matchData.filter(item => item.avg_mmr !== null)
      filterData = filterData.filter(function (item) {
        direTeam = item.dire_team.split(',');
        radiantteam = item.radiant_team.split(',');
        if (direTeam[0] === props.id || direTeam[1] === props.id || direTeam[2] === props.id || direTeam[3] === props.id || direTeam[4] === props.id) {
          return item
        }
        else if (radiantteam[0] === props.id || radiantteam[1] === props.id || radiantteam[2] === props.id || radiantteam[3] === props.id || radiantteam[4] === props.id) {
          return item
        }
      })

      let sortData = filterData.sort(function (a, b) {
        const nameA = a.avg_mmr
        const nameB = b.avg_mmr
        if (nameA < nameB) {
            return 1;
        }
        if (nameA > nameB) {
            return -1;
        }

        // names must be equal
        return 0;
    });

      const matches = sortData.map(function (item) {
        return (
          <div key={item.match_id}>
            <HeroMatches matchDetails={item} data={props.data} radiant_team={item.radiant_team} dire_team={item.dire_team}/>
          </div>
        )
      })
      return matches
    }
    else{
      return(
        <LoaderExampleLoader/>
      )
    }
  }


  return (
    <div>
      <h2>Recent Matches</h2>
      <Grid textAlign='center'>
        {getMatchData()}
      </Grid>
    </div>
  )
}

export default Replays