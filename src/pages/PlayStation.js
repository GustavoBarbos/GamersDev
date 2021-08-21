import React, { Component } from 'react'
import styled from 'styled-components'
import Cards from '../componets/Cards'

const Div = styled.div`

    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
   justify-content: space-around;
    height: 100vh; 
    width: 96vw;
    background-color:  rgb(9, 9, 9);
    
  
`
 class PlayStation extends Component {

    state = {
        psn : []
    }

    componentDidMount = () => {
       
        let games = this.props.filter.filter((element) => {

            return element.platforms.some(platform => platform.platform.name === "PlayStation 4")

        })

        this.setState({
            psn : games,
        })

    }

    render() {
        return (
            <Div>
               
                {this.state.psn.map((games) => {
                    return <Cards  name={games.name} background={games.background_image} datas={games.released} platforms={games.platforms} metacritic={games.metacritic}  />
                })}

            </Div>
        )
    }
}

export default PlayStation