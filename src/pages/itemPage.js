import { useParams } from 'react-router-dom'
import { useState, useEffect} from 'react'
import { Image } from 'semantic-ui-react';
import LoaderExampleLoader from '../components/loader';
import { Grid } from 'semantic-ui-react';
import Footer from '../components/footer';
import Navbar from '../components/navbar'


const style = {
    h3: {
      fontStyle: 'italic',
    }
  }

function ItemPage() {
    const {name} = useParams()
    const [data, setData] = useState('');

    useEffect(() => {
        const getData = async () => {
            const dataItems = await fetchItems();
            setData(dataItems)
        }
        getData()
    }, [])

    const fetchItems = async () => {
        const res = await fetch(`https://raw.githubusercontent.com/odota/dotaconstants/master/build/items.json`)
        const json = await res.json();
        return json
    }

    if(data !== ''){
        const item = data[name];
        const imageURL = `https://cdn.cloudflare.steamstatic.com${item['img']}`
        const attrib = item.attrib.map(function(attribute) {
            return(
                <div key={item.attrib.indexOf(attribute)}> 
                <h2>{attribute.footer}: {attribute.header}{(attribute.value.constructor === Array) ? attribute.value[0] : attribute.value} </h2>
                </div>
            )
        })
        const checkComponents = () => {
            if(item.components !== null){
                const components = item.components.map(function(component){
                    const imageComponent = `https://cdn.cloudflare.steamstatic.com${data[component].img}`
                    const imagehref = `/items/${component}`
                    return(
                        <div key={data[component].id}>
                            <Image src={imageComponent} centered href={imagehref}/>
                            <p>{data[component].dname}</p>
                        </div>
                    )
                })
                return components
            }
            else{
                return null
            }
        }
        return (
            <div>
                <Navbar/>
                <h1>{item.dname}</h1>
                <Image src={imageURL} centered size='medium'></Image>
                <h3 style={style.h3}>"{item.lore}"</h3>
                <h2>Cost: {item.cost}</h2>
                <h2>{(item.cd !== false) ? ('CD: ' + item.cd + 's') : null}</h2>
                <h2>{(item.hint !== undefined) ? 'Ability' : null}</h2>
                <h3>{(item.hint !== undefined) ? item.hint[0] : null}</h3>
                <h3>{item.notes}</h3>
                <br/>
                <h2>{(item.attrib[0] !== undefined) ? 'Base attributes' : null}</h2>
                <Grid textAlign='center'>
                    {attrib}
                </Grid>
                <br/>
                <h2>{(item.components !== null) ? 'Components' : null}</h2>
                <Grid textAlign='center'>
                    {checkComponents()}
                </Grid>
                <br/>
                <br/>
                <Footer/>
            </div>
          )
    }
    else{
        return(
            <Grid textAlign='center'>
                <LoaderExampleLoader/>
            </Grid>     
        )
    }





}

export default ItemPage
