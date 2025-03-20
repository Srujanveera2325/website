// client/src/components/Events/EventList.jsx
import React from 'react';
import EventItem from './EventItem';
import './events.scss'
function EventList({events}) {
    return (
        <ul className='events-list'>
            {
                events.map(event => (
                    <EventItem key={event._id} event={event}/>
                ))
            }
        </ul>
    )
}
export default EventList;