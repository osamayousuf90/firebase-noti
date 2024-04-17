import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Calender = ({ appointments }) => {
    // Transform appointments data into events format required by react-big-calendar
    const events = appointments.map(appointment => ({
        id: appointment.squareId,
        title: appointment.AppointmentProducts[0].itemName,
        start: new Date(appointment.startAt),
        end: new Date(appointment.endAt),
        teamMember: appointment.teamMemberName,
        customer: appointment.customer.name,
    }));

    return (
        <div style={{ height: '600px' }}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ margin: '50px' }}
                defaultDate={new Date()}
                views={['month', 'week', 'day']}
                onSelectEvent={event => console.log(event)}
                eventPropGetter={event => ({
                    style: {
                        backgroundColor: event.teamMember === 'Columbia' ? '#F2B203' : null, // Customize color based on team member
                    },
                })}
            />
        </div>
    );
};

export default Calender;
