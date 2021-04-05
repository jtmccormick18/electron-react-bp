import React from 'react';

import axios from 'axios';

import { Container, Row, Jumbotron, Col } from 'react-bootstrap';

import ConfigForm from '../utils/inputs/db-config';

export default class Settings extends React.Component {
  state = {
    needsInstance: false,
    requestMade: false,
    user_input: {
      has_changed: false,
      submitted: false,
    },
  };

  componentDidMount() {
    axios.get('/api/database-config').then((result) => {
      let config = result.data;
      console.log({ config });
      let needsInstance = false;
      if (config['options'] && config['options']['instanceName']) {
        needsInstance = true;
      }
      console.log({ needsInstance });
      this.setState({
        ...config,
        needsInstance,
        requestMade: true,
      });
    });
  }

  handleChange = (e) => {
    console.log({ e });
    let value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
      user_input: {
        has_changed: true,
      },

      [e.target.id]: value,
    });
  };

  submitChanges = (e) => {
    e.preventDefault();
    const config = this.state;
    delete config['user_input'];
    if (!config.needsInstance) {
      delete config['options'];
    }
    axios
      .put('/api/database-config', config)
      .then((response) => this.setState({ user_input: { submitted: true } }))
      .catch((err) => this.setState({ err }));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <Jumbotron>
              <h1 className="text-center mx-auto">Settings</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          {this.state.requestMade && (
            <Col xs={12} className="mx-auto">
              <ConfigForm
                {...this.state}
                onChange={this.handleChange}
                submitChanges={this.submitChanges}
                disabledBtn={!this.state.user_input.has_changed}
              />
            </Col>
          )}
        </Row>
      </Container>
    );
  }
}
