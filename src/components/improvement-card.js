import React from 'react';

import {Card} from 'react-bootstrap';

const ImprovementCard=(props)=>{

    const {
        realkey,
        repropkey,
        yrBuilt,
        efyrBuilt,
        grade,
        condition,
        photo_path
    } = props;

    return( <Card>
        <Card.Img variant="top" src={photo_path||`\\\\gcgsql01\\tao\\wingapsql\\pictures\\r${repropkey}\\r${repropkey}.jpg`} />
        <Card.Body>
          <Card.Title>REPROPKEY: {repropkey}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>)
}

export default ImprovementCard;