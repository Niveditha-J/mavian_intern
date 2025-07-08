import React, { useState } from 'react';
import './Events.css';

const Events = () => {
  const [activeTab, setActiveTab] = useState('events');

  const eventList = [
    {
      date: 'July 12, 2025',
      title: 'National Level Tech Symposium',
      department: 'Department of Information Technology',
      venue: 'Main Auditorium',
    },
    {
      date: 'August 5, 2025',
      title: 'Faculty Development Program on AI',
      department: 'Department of Computer Science',
      venue: 'CSE Block Seminar Hall',
    },
    {
      date: 'September 20, 2025',
      title: 'Entrepreneurship Awareness Camp',
      department: 'Center for Innovation',
      venue: 'E-Cell Conference Room',
    },
    {
      date: 'October 3, 2025',
      title: 'Research Scholars Meet',
      department: 'Research and Development Cell',
      venue: 'Seminar Hall B',
    },
  ];

  const recruitmentList = [
    {
      date: 'August 15, 2025',
      title: 'TCS Ninja Drive',
      department: 'Placement Cell',
      venue: 'Online/Virtual',
    },
    {
      date: 'September 1, 2025',
      title: 'Infosys On-Campus Drive',
      department: 'Placement Cell',
      venue: 'Seminar Hall A',
    },
  ];

  const workshopList = [
    {
      date: 'July 20, 2025',
      title: 'Workshop on Data Science',
      department: 'Department of IT',
      venue: 'Lab 302',
    },
    {
      date: 'August 10, 2025',
      title: 'National Conference on Robotics',
      department: 'Mechanical Engineering',
      venue: 'Mech Seminar Hall',
    },
  ];

  const renderTable = (list) => (
    <table className="events-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Title</th>
          <th>Department</th>
          <th>Venue</th>
        </tr>
      </thead>
      <tbody>
        {list.map((event, index) => (
          <tr key={index}>
            <td>{event.date}</td>
            <td>{event.title}</td>
            <td>{event.department}</td>
            <td>{event.venue}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="events-container">
      <h1 className="events-title">Events</h1>

      <div className="tab-buttons">
        <button
          className={activeTab === 'events' ? 'active' : ''}
          onClick={() => setActiveTab('events')}
        >
          General Events
        </button>
        <button
          className={activeTab === 'recruitment' ? 'active' : ''}
          onClick={() => setActiveTab('recruitment')}
        >
          Recruitment Dates
        </button>
        <button
          className={activeTab === 'workshops' ? 'active' : ''}
          onClick={() => setActiveTab('workshops')}
        >
          Conferences & Workshops
        </button>
      </div>

      <div className="events-content">
        {activeTab === 'events' && renderTable(eventList)}
        {activeTab === 'recruitment' && renderTable(recruitmentList)}
        {activeTab === 'workshops' && renderTable(workshopList)}
      </div>
    </div>
  );
};

export default Events;
