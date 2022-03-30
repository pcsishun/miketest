import axios from 'axios'
import {useState, useEffect} from 'react';




const ButtonAndTitle = () =>{
   

    const [pokemonStore, setPokemonStore] = useState([]);
 
    const [isShow, setIsShow] = useState(false);

    const isActive = () => {

        if(isShow === false){
            setIsShow(true);
           
        }else{
            setIsShow(false)
          
        }
        console.log(isShow)
       
    }

    useEffect(() => {
            axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
            .then(pokemonApi => setPokemonStore(pokemonApi.data.stats))
        }, [])

    
    console.log(pokemonStore);

    return(
        <div>
             <div className='title'>
                <h1>Pokemon List</h1>
            </div>
            <div className='buttonclick'>
                <button 
                    className='buttondec'
                    onClick={isActive}
                >Click Here</button>
            </div>
            <div className="show-pokemon">
                {
                    isShow === false && 
                    <h5>Please click button to show data.</h5>
                }
                {
                    pokemonStore.length === 0 &&  isShow === true  &&  <h5>loading...</h5>
                }
                {   
                    isShow === true && 
                    pokemonStore.map(element =>(
                        <div>{element.base_stats} {element.effort} {element.stat.name} {element.stat.url}</div>
                    ))
                }
            </div>
        </div>
    );
}

export default ButtonAndTitle