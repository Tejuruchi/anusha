import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardBody, Button } from 'reactstrap';
import axios from 'axios';

const Pages500 = () => {
  useEffect(() => {
    document.title = "Error 500 | Lexa - Responsive Bootstrap 5 Admin Dashboard";
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all' indicates no filter

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('http://localhost:5000/api/get-users');
        setData(response.data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredData = data.filter(event => {
    if (filter === 'all') {
      return true; // show all if no filter is active
    }
    return event.category === filter;
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col className="text-center mb-3">
              {/* Buttons for setting the filter */}
              <Button color="primary" onClick={() => handleFilterChange('all')}>All</Button>{' '}
              <Button color="secondary" onClick={() => handleFilterChange('College')}>College</Button>{' '}
              <Button color="success" onClick={() => handleFilterChange("Technical ")}>Technical</Button>{' '}
              <Button color="danger" onClick={() => handleFilterChange('Sports')}>Sports</Button>{' '}
              <Button color="warning" onClick={() => handleFilterChange('cultural')}>Cultural</Button>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {filteredData.length > 0 ? (
              filteredData.map((event, index) => (
                <Col key={index} md="6" lg="4" className="mb-4">
                  <Card className="overflow-hidden h-100">
                    <CardBody>
                      <h3>{event.name}</h3>
                      <p>{event.date}</p>
                      <p className="text-center">
                        <img 
                          src={`http://localhost:5000/images/${event.image}`}
                          alt="" 
                          width="100%"
                          style={{ maxHeight: "300px", objectFit: "cover" }}
                        />
                      </p>
                      <p>{event.last}</p>
                      <p>{event.category}</p>
                      <p>{event.description}</p>
                    </CardBody>
                  </Card>
                </Col>
              ))
            ) : (
              <p>There is no events found with the selected category.</p>
            )}
          </Row>
          <Row>
            <Col className="mt-5 text-center">
              <p>© 2021 Lexa - Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Pages500;
