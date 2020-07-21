import React from 'react'
import SearchResults from '../SearchResults/SearchResults'

class FetchData extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          name: "GoOsTT",
          summonerRank: "Gold IV",
          ladderRank: " 1,079,183 (32.39% of top)"
        };
      };
    
    async componentDidMount () {
        const url = ""
        const respone = await fetch(url);
        const data = await respone.json();
        this.setState({
            summonerRank: data.beérkezettjson[valahananyadik object valahanyadik array-e]
        })
    }


    render() {
        return (
            <div>
                <SearchResults name={this.state.name} rank={this.state.summonerRank} ladderRank={this.state.ladderRank} />
            </div>
        )
    }
}

export default FetchData