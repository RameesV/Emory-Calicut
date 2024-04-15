import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import './Counter.scss'; // Assuming your styles are in Counter.scss
import students from '../../../assets/Icons/students.png';
import tutors from '../../../assets/Icons/tutors.png';
import colleges from '../../../assets/Icons/colleges.png';
import courses from '../../../assets/Icons/courses.png';
import { Link } from 'react-router-dom';

const Counter = () => {
  const [counterData, setCounterData] = useState([
    { id: 1, target: 1820, increment: 50, count: 0, title: "Successfully Trained", src: students },
    { id: 2, target: 84, increment: 1, count: 0, title: "Tutors", src: tutors },
    { id: 3, target: 22, increment: 1, count: 0, title: "Colleges", src: colleges },
    { id: 4, target: 46, increment: 1, count: 0, title: "Courses", src: courses },
  ]);

  const counterContainerRef = useRef(null);

  const startCounters = () => {
    const intervals = counterData.map((item) => {
      const intervalId = setInterval(() => {
        setCounterData((prevData) =>
          prevData.map((data) =>
            data.id === item.id ? { ...data, count: Math.min(data.count + item.increment, data.target) } : data
          )
        );
      }, 20); // Adjust interval as needed
      return intervalId;
    });

    return () => intervals.forEach(clearInterval);
  };

  useEffect(() => {
    // Intersection Observer setup
    const options = {
      root: null, // Use the viewport as the root
      threshold: 0.5, // Start counting when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounters();
          observer.disconnect(); // Stop observing after counters start
        }
      });
    }, options);

    observer.observe(counterContainerRef.current);

    // Cleanup function to clear intervals when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array to run only once

  return (
    <div>
      <div className='counter-bg'>
        <h1>Educating Champions of a Just and Sustainable World.</h1>
        <h4>View more about our programs</h4>

        <div className="wave-buttons">
          <Button className="wave-Button outline-info" as={Link} to={'/emory'}>Emory</Button>
          <Button className="wave-Button outline-info" as={Link} to={'/dawn'}>Dawn</Button>
          <Button className="wave-Button outline-info" as={Link} to={'/jasbro'}>Jasbro</Button>
        </div>
      </div>
      <div className="counter-container" ref={counterContainerRef}>
        <Container className='mt-5'>
          <Row>
            {counterData.map((item) => (
              <Col className='col' sm={6} md={3} lg={3}>
                <div key={item.id} className="counter">
                  <img src={item.src} alt="Icon" />
                  <div className="timer count-title count-number mt-3">
                    <p>{item.count}+</p>
                  </div>
                  <p className="count-text">{item.title || 'Default Text'}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Counter;
