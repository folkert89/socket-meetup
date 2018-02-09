
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import RsvpItem from './rsvpitem.js'

class RsvpList extends PureComponent {
	static propTypes = {
		rsvps: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
	}

	renderRsvp(rsvp) {
		return <RsvpItem key={rsvp.rsvp_id} rsvp={rsvp} />
	}

	render() {
    console.log(this.props)
		return (
			<div>
				<h1>RSVP list</h1>

				{ this.props.rsvps.map(this.renderRsvp) }
			</div>
		)
	}
}

export default RsvpList
