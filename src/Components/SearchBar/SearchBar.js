import React from 'react'
import { Button,  Form } from 'react-bootstrap';

class SearchBar extends React.Component {
    render() {
        return (
<Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Control type="input" placeholder="Enter your summoner name" />
        </Form.Group>

        <Button variant="primary" type="submit">
                Let's go!
        </Button>
</Form>
        )
    }
}

export default SearchBar
