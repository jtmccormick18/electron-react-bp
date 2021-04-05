import React from 'react';

import { Form, Col, Button } from 'react-bootstrap';

const ConfigInput = (props) => {
  console.log({ props });
  return (
    <Form onChange={props.onChange}>
      <Form.Row>
        <Form.Group as={Col} controlId="host">
          <Form.Label>Host</Form.Label>
          <Form.Control type="text" defaultValue={props.host} />
        </Form.Group>

        <Form.Group as={Col} controlId="database">
          <Form.Label>Database</Form.Label>
          <Form.Control type="text" defaultValue={props.database} />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="needsInstance">
          <Form.Check
            type="switch"
            label="DB Instance or SQL Express"
            defaultChecked={props.needsInstance}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="options.instanceName">
          <Form.Label>Instance Name</Form.Label>
          <Form.Control
            disabled={!props.needsInstance}
            type="text"
            defaultValue={props.options.instanceName||" "}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="username">
          <Form.Label>DB Username</Form.Label>
          <Form.Control type="text" defaultValue={props.username} />
        </Form.Group>

        <Form.Group as={Col} controlId="password">
          <Form.Label>DB Password</Form.Label>
          <Form.Control type="password" defaultValue={props.password} />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="photo_path">
          <Form.Label>Photo Path</Form.Label>
          <Form.Control type="text" defaultValue={props.photo_path} />
        </Form.Group>
      </Form.Row>
      <Button
        variant="primary"
        type="submit"
        disabled={props.disabledBtn}
        onClick={props.submitChanges}
      >
        Submit
      </Button>
    </Form>
  );
};

export default ConfigInput;
