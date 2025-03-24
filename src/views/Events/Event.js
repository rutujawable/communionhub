import React, { useState,useRef } from 'react';
import "./Event.css" 
import Navbar from '../../components/Navbar/Navbar.js';
import Eventcard from '../../components/Eventcard/Eventcard.js';
import initialEvents from '../../data.js';
import Button from '../../components/button/button.js';
import Footer from '../../components/Footer/Footer.js';



const EventListingPage = () => {
  const [events, setEvents] = useState(initialEvents);
  const [filterCategory, setFilterCategory] = useState('All');
  const [form, setForm] = useState({
    title: '',
    date: '',
    category: ''
  });

  
  const filteredEvents =
    filterCategory === 'All'
      ? events
      : events.filter((ev) => ev.category === filterCategory);

  
  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title: form.title,
      date: form.date,
      location: 'To Be Announced',
      description: 'No description provided.',
      category: form.category
    };
    setEvents((prev) => [...prev, newEvent]);
    setForm({ title: '', date: '', category: '' });
  };

  const formRef = useRef(null); // 

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" }); 
  };

  return (
   <>



    <Navbar/>
    
    <div className="event-page">
      <h1>Events Listing</h1>

      
      <div className="filter">
        <label htmlFor="categoryFilter">Filter by Category:</label>
        <select
          id="categoryFilter"
          value={filterCategory}
          onChange={handleFilterChange}
        >
          <option value="All">All</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
          <option value="Health">Health</option>
              <option value="Art">Art</option>
              <option value="Educational">Educational</option>
              <option value="Food">Food</option>
              <option value="Sports">Sports</option>
             
              <option value="Business">Business</option>
              <option value="Community Service">Community Service</option>
              <option value="Entertainment">Entertainment</option>
        </select>
        <button className="add-event-btn" text="add event" onClick={scrollToForm}>add event</button>
        
      </div>

      
      <div className="event-list">
        {filteredEvents.map((event, index) => (
           <Eventcard key={index} event={event}/>

        ))}
      </div>

      <div className='form' ref={formRef}>
      <div className="add-event">
        <h2>Add New Event</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              value={form.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              name="date"
              id="date"
              value={form.date}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              name="category"
              id="category"
              value={form.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Religious">Religious</option>
              <option value="Social">Social</option>
              <option value="Charity">Charity</option>
              <option value="Health">Health</option>
              <option value="Art">Art</option>
              <option value="Educational">Educational</option>
              <option value="Food">Food</option>
              <option value="Sports">Sports</option>
             
              <option value="Business">Business</option>
              <option value="Community Service">Community Service</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="location">location:</label>
            <input
              type="text"
              name="location"
              id="location"
              value={form.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">description:</label>
            <input
              type="text"
              name="description"
              id="description"
              value={form.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <Button text="add event"/>
        </form>
        
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default EventListingPage;


