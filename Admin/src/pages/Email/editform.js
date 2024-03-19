import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { MDBDataTable } from "mdbreact";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { useParams } from "react-router-dom";


const axiosAPI = axios.create();

const Getevent = () => {
    const [events, setEventsdata] = useState([]);

    useEffect(() => {
        axiosAPI.get("http://localhost:5000/api/getusers").then((response) => {
            console.log(response.data)
            setEventsdata(response.data.users); // Adjusted to match the expected data structure
    });
}, []);

    const handleDelete = (id) => {
        axiosAPI.delete(`http://localhost:5000/api/deleteuser/${id}`).then((res) => {
            console.log(res);
            alert("Data deleted successfully");
            setEventsdata(events.filter(event => event._id !== id));
        }).catch(error => {
            console.error('Error deleting event:', error);
            alert("Failed to delete event");
        });
    };

    const handleEdit = (id) => {
        console.log("Edit event with ID:", id);
    };

    const css = {
        background: "#3b5de7",
        margin: "2px",
        width: '50px',
        padding: "2px 4px",
        borderRadius: "5px",
    };

    const css1 = {
        background: "#ff715b",
        margin: "2px",
        padding: "2px 4px",
        borderRadius: "5px",
    };

    const data = {
        columns: [
            {
                label: "Event Name",
                field: "name",
                sort: "asc",
                width: 150,
            },
            {
                label: "Start Date",
                field: "date",
                sort: "asc",
                width: 270,
            },
            // {
            //     label: "No of Days",
            //     field: "Noofdays",
            //     sort: "asc",
            //     width: 200,
            // },
            // {
            //     label: "Month",
            //     field: "Month",
            //     sort: "asc",
            //     width: 100,
            // },
            {
                label: "category",
                field: "category",
                sort: "asc",
                width: 150,
            },
            {
                label: "No of Participants",
                field: "total",
                sort: "asc",
                width: 100,
            },
            {
                label: "Action",
                field: "edit",
                sort: "disabled",
                width: 100,
            },
            {
                label: "Action",
                field: "delete",
                sort: "disabled",
                width: 150,
            },
    
        ],
        rows: Array.isArray(events) ? events.map((event) => ({
            ...event,
            edit: (
                <Link to={`/edit/${event._id}`}>
                    <Button style={css}>Edit</Button>
                </Link>
            ),
            delete: (
                <Button onClick={() => handleDelete(event._id)} style={css1}>
                    Delete
                </Button>
            ),
        })) : [],
        
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumbs title="Tables" breadcrumbItem="Tables" />
                <Row>
                    <Col className="col-12">
                        <Card>
                            <CardBody>
                               <CardTitle className="h4">Event List</CardTitle>
                               <Link to="/icons-materialdesign"><Button color="primary">Add New Event</Button></Link>

                                <div className="table-rep-plugin">
                                    <div className="table-responsive mb-0" data-pattern="priority-columns">
                                        <MDBDataTable responsive striped bordered data={data} noBottomColumns />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
};

export default Getevent;
