import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'



class topicsList extends PureComponent {
  static propTypes = {
  	topics: PropTypes.arrayOf(PropTypes.shape({
  		topic: PropTypes.string.isRequired,
  		count: PropTypes.number.isRequired
  	})).isRequired
  }
  render() {
    return (
      <h1>{ this.props.topics.map(prop =>
      <li key={prop.topic}>{prop.topic}, {prop.count}</li>) }</h1>
    )
  }
}

export default topicsList
