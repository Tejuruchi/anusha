import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import axios from 'axios';

const Pages500 = () => {
  useEffect(() => {
    document.title = "Error 500 | Lexa - Responsive Bootstrap 5 Admin Dashboard";
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

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
            <Col md="8" lg="6" xl="5">
              {data.length > 0 ? (
                data.map((event, index) => (
                  <Card key={index} className="mb-4 overflow-hidden">
                    <CardBody>
                      <h3>{event.name}</h3>
                      <p>{event.date}</p>
                      <p>
                        <img 
                          src={`http://localhost:5000/images/${event.image}`} 
                          alt="" 
                          width={200} 
                          style={{ maxHeight: "200px" }} 
                        />
                      </p>
                      <p>{event.last}</p>
                      <p>{event.category}</p>
                      <p>{event.description}</p>
                      {/* Other event details as needed */}
                    </CardBody>
                  </Card>
                ))
              ) : (
                <p>No events found.</p>
              )}
              <div className="mt-5 text-center">
                <p>© 2021 Lexa - Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Pages500;
