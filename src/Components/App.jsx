import React from 'react'
import '../css/app.css'
import { Button, Form, Row, Col, Breadcrumb } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addRemainder, deleteRemainder } from '../actions'
import remainders from '../reducers'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  addRemainder () {
      console.log('this.state.dueDate', this.state.dueDate);
    this.props.addRemainder(this.state.text, this.state.dueDate)
  }

  deleteRemainder (id) {
    this.props.deleteRemainder(id)
  }
  renderRemainders () {
    const { remainders } = this.props
    console.log('remainders', remainders)
    return (
      <ul className='reminder-list'>
        {remainders.map((m) => {
          return (
            <li key={m.id}>
              <Breadcrumb className='list-Item'>{m.text}</Breadcrumb>
              <Breadcrumb
                className='list-Item'
                onClick={() => this.deleteRemainder(m.id)}
              >
                {' '}
                &#x2715;
              </Breadcrumb>
            </li>
          )
        })}
      </ul>
    )
  }

  render () {
    return (
      <div className='form-container'>
        <Form className='form'>
          <Form.Group controlId='formBasicEmail'>
            <Row>
              <Col md={3}>
                <Form.Label>Reminder Pro</Form.Label>
                <Form.Control
                  className='inputClass'
                  type='text'
                  placeholder='I have to...'
                  onChange={(event) =>
                    this.setState({ text: event.target.value })
                  }
                />
                   <Form.Control
                  className='inputClass'
                  type='datetime-local'
                  onChange={(event) =>
                    this.setState({ dueDate: event.target.value })
                  }
                />
              </Col>
            </Row>
            {this.renderRemainders()}
      
            <Button type='button' onClick={() => this.addRemainder()}>
              Add to Reminder
            </Button>

          </Form.Group>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addRemainder,deleteRemainder }, dispatch)
}

const mapStateToProps = (state) => {
  return { remainders: state }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
