import React from 'react'
import { ListGroup } from 'react-bootstrap';

class SearchResults extends React.Component {
    render() {
        return (
        <ListGroup>
            <ListGroup.Item>Your summoner name is: {this.props.name} </ListGroup.Item>
            <ListGroup.Item>Your current league is: {this.props.rank} </ListGroup.Item>
            <ListGroup.Item>You are currently at {this.props.ladderRank} </ListGroup.Item>
        </ListGroup>
        )
    }
}

export default SearchResults