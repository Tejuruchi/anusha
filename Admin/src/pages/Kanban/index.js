import React,{ useState } from "react"
import "flatpickr/dist/themes/material_blue.css"
import Flatpickr from "react-flatpickr"
import { Button, Card, CardBody, Col, FormGroup,InputGroup, Label, Row } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { connect } from "react-redux";
import axios from 'axios'; // or if you have a specific axios instance: import axiosAPI from 'wherever-it-is-defined';

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const FormValidations = (props) => {
    const inpRow = [{ name: "", file: "" }]
    const [startDate, setstartDate] = useState(new Date())
    const[formdata,setFormdata]=useState({
      'name':'',
      'category':'',
      'image':'',
      'date':'',
      'last':'',
      'number':'',
      'total':'',
      'description':''
  })
  // console.log(formdata);
  // let backend_api="++"
  const APP_URL = process.env.REACT_APP_DATABASEURL;
  


  const handlesubmit = async (e) => {
    e.preventDefault();
    const Inputfields = new FormData();
    Inputfields.append('name', formdata.name);
    Inputfields.append('category', formdata.category); 
    Inputfields.append('myfile', formdata.image);
    Inputfields.append('date', formdata.date);
    Inputfields.append('last', formdata.last); 
    Inputfields.append('number', formdata.number);
    Inputfields.append('total', formdata.total);
    Inputfields.append('description', formdata.description);
    
    const fullUrl = `${APP_URL}/addevent`;
    try {
        const res = await axios.post(fullUrl, Inputfields, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(res);
        if (res.status === 201) {
            alert("Event added successfully");
        }
    } catch (error) {
        console.error("Submission error:", error);
        alert("Failed to add event");
    }
};

  return (
    <React.Fragment>
      <Row>
        <Col lg="12">
          <Card>
            <CardBody >

              <AvForm onSubmit={handlesubmit} >
                <AvField
                  className="mb-3"
                  name="event name"
                  label="Event name"
                  placeholder="Type Something"
                  type="text"
                  errorMessage="Enter Name"
                  validate={{ required: { value: true } }}
                  value={formdata.name} 
                  onChange={(e)=>setFormdata({...formdata,name:e.target.value})}

                />
                <Label>Event type</Label>
                <AvField
                  className="mb-3"
                  name="event Type"
                  type="text"
                  placeholder="type of event"
                  errorMessage="Enter event type"
                  validate={{ required: { value: true } }}
                  value={formdata.category} 
                  onChange={(e)=>setFormdata({...formdata,category:e.target.value})}

                />
                <AvField
                
                className="mb-3"
                name="myfile"
                label="Event image"
                placeholder="Please upload image"
                type="file"
                errorMessage="Please upload image"
                accept="image/*"
                validate={{ required: { value: true } }}
                onChange={(e) => setFormdata({ ...formdata, image: e.target.files[0] })} 
                />
                <Label>Enter the event date </Label>
                <InputGroup>                    
                <Flatpickr
                className="mb-3"
                placeholder="Enter the event date"options={{
  
                  altInput: true,
                  altFormat: "F j, Y",
                  dateFormat: "Y-m-d"
                }}
                value={formdata.date} 
                onChange={(selectedDates) => {
    // Assuming you want to store the first selected date in 'YYYY-MM-DD' format
    // Check if at least one date is selected
    if (selectedDates.length > 0) {
      const formattedDate = selectedDates[0].toISOString().slice(0, 10); // Formats the date  to 'YYYY-MM-DD'
      setFormdata({...formdata, date: formattedDate});
    }
  }}
/>

                  </InputGroup>
                
                <Label>Last date for event registration </Label>
                <InputGroup>                    
                <Flatpickr
                className="mb-3"
                placeholder="Enter the event date"options={{
  
                  altInput: true,
                  altFormat: "F j, Y",
                  dateFormat: "Y-m-d"
                }}
                value={formdata.last} 
                onChange={(selectedDates) => {
    // Assuming you want to store the first selected date in 'YYYY-MM-DD' format
    // Check if at least one date is selected
    if (selectedDates.length > 0) {
      const formattedDate = selectedDates[0].toISOString().slice(0, 10); // Formats the date to 'YYYY-MM-DD'
      setFormdata({...formdata, last: formattedDate});
    }
  }}
/>

                  </InputGroup>
                <AvField
                  className="mb-3"
                  name="total"
                  label="Total available registrations"
                  placeholder="Enter Only number"
                  type="number"
                  errorMessage="Enter Only Number"
                  validate={{
                    required: { value: true },
                    pattern: {
                      value: "^[0-9]+$",
                      errorMessage: "Only Numbers",
                    },
                  }}
                  value={formdata.total} 
                  onChange={(e)=>setFormdata({...formdata,total:e.target.value})}

                />

                <AvField
                  className="mb-3"
                  type="textarea"
                  label="Event description "
                  name="description"
                  id="description"
                  rows="5"
                  placeholder="description"
                  errorMessage="This value is required."
                  validate={{
                    required: { value: true },
                    pattern: {
                      value: "^[0-9a-zA-Z]+$",
                      errorMessage: "Only Alphanumeric",
                    },
                  }}
                  value={formdata.description} 
                  onChange={(e)=>setFormdata({...formdata,description:e.target.value})}

                />
                <FormGroup className="mb-0">
                  <div>
                    <Button type="submit" color="primary" className="ms-1">
                      Submit
                        </Button>{" "}
                    <Button type="reset" color="secondary">
                      Cancel
                        </Button>
                  </div>
                </FormGroup>
              </AvForm>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(FormValidations);