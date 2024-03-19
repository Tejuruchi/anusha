import React, { useEffect, useState } from "react";
import axios from "axios";
import { MDBDataTable } from "mdbreact";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setBreadcrumbItems } from "../../store/actions";
import "./datatables.scss";

const DatatableTables = (props) => {
  document.title = "Data Table | Lexa - Responsive Bootstrap 5 Admin Dashboard";

  // Use a different variable name for fetched data to avoid shadowing
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const api = 'http://localhost:5000/api/get-users';
    axios.get(api)
      .then((res) => {
        setUsers(res.data.users); // Adjusted to use setUsers
        // Update the rows data here if the table rows depend on the fetched data
      })
      .catch((error) => {
        console.error("Error fetching employees:", error.response ? error.response.data : error.message);
      });
  }, []);

  const handleDelete = (id) => {
    const api = `http://localhost:3000/api/delete-user/${id}`;
    axios.delete(api).then((response) => {
      if (response.status === 200) {
        alert("Deleted successfully.");
        setUsers(users.filter(employee => employee._id !== id)); // Use setUsers here
      }
    }).catch((error) => {
      console.error("Failed to delete:", error);
      alert("Could not delete the employee.");
    });
  };
  const breadcrumbItems = [
    { title: "Lexa", link: "#" },
    { title: "Tables", link: "#" },
    { title: "Data Tables", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Data Tables', breadcrumbItems)
  })

  const data = {
    columns: [
      {
        label: "Events ",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Location",
        field: "position",
        sort: "asc",
        width: 270,
      },
      {
        label: "No.Of Participants",
        field: "office",
        sort: "asc",
        width: 200,
      },
      // {
      //   label: "Age",
      //   field: "age",
      //   sort: "asc",
      //   width: 100,
      // },
      {
        label: " Dates",
        field: "date",
        sort: "asc",
        width: 150,
      },
      // {
      //   label: "Registeration amount",
      //   field: "salary",
      //   sort: "asc",
      //   width: 100,
      // },
    {
      label: 'Actions',
      field: 'actions',
      sort: 'disabled', // Disable sorting on actions column
      width: 100,
    },
  ],
  rows: []
};
  const  rows= [
      {
        name: "Youth Day",
        position: "Billgates Bavan",
        office: "350",
        // age: "66",
        date: "2024/01/12",
        // salary: "$198",
      },
      {
        name: "Pongal",
        position: "Colors Ground",
        office: "500",
        // age: "55",
        date: "2024/01/13",
        // salary: "$327",
      },
      {
        name: "Voters Day",
        position: "vishweshwaraya Bavan",
        office: "250",
        // age: "23",
        date: "2024/01/25",
        // salary: "$103",
      },
      {
        name: "Cricket Tournment",
        position: "Polytechnic Ground",
        office: "4 teams",
        // age: "33",
        date: "2024/1/28",
        // salary: "100",
      },
      {
        name: "Sankranthi Sambaralu",
        position: "Mango Gardens",
        office: "800",
        // age: "66",
        date: "2023/01/12",
        // salary: "$198",
      },
      {
        name: "Vasantha Panchami",
        position: "Temples",
        office: "250",
        // age: "55",
        date: "2023/01/25",
        // salary: "$327",
      },
      {
        name: "Republic Day",
        position: "Colours Ground",
        office:"300",
        // age: "23",
        date: "2023/01/26",
        // salary: "$103",
      },
      {
        name: "Women's Day celebrations",
        position: "C V Raman Bhavan",
        office: "400",
        // age: "33",
        date: "2023/03/8",
        // salary: "100",
      },
      {
        name: "International Graduation Day",
        position: "Aditya Temples",
        office: "250",
        // age: "59",
        date: "2023/05/21",
        // salary: "$137",
      },
      {
        name: "Hakathon",
        position: "TechnicalHub",
        office: "300",
        // age: "19",
        date: "2023/08/09",
        // salary: "$385",
      },
      {
        name: "Independence Day",
        position: "Colours Ground",
        office: "200",
        // age: "61",
        date: "2023/08/15",
        // salary: "$372",
      },
      {
        name: "National Sports Day",
        position: "Colours Ground",
        office: "300",
        // age: "39",
        date: "2023/08/29",
        // salary: "$205",
      },
      {
        name: "Teacher's Day",
        position: "Cotton Bavan",
        office: "250",
        // age: "61",
        date: "2023/09/5",
        // salary: "No Fee",
      },
      {
        name: "Bootcamp on AGILE & JIRA",
        position: "TechnicalHub",
        office: "400",
        // age: "30",
        date: "2023/09/07",
        // salary: "$90",
      },
      {
        name: "Ganesh Chathurdhi",
        position: "Hostels",
        office: "400",
        // age: "22",
        date: "2023/09/19",
        // salary: "$342",
      },
      {
        name: "Veda",
        position: "ACET",
        office: "1200",
        // age: "22",
        date: "2023/09/15 & 2023/09/16",
        // salary: "$342",
      },
      {
        name: "Athetic Alumni Meet",
        position: "Hyderabad",
        office: "200",
        // age: "43",
        date: "2023/12/09",
        // salary: "$313",
      },
      {
        name: "Independance Day",
        position: "Colors Ground",
        office: "150",
        // age: "36",
        date: "2023/08/15",
        // salary: "$470",
      },
      {
        name: "National Sports Day",
        position: "Sports Ground",
        office: "300",
        // age: "22",
        date: "2023/08/29",
        // salary: "$342",
      },
      {
        name: "Veda",
        position: "All Three Campus",
        office: "2500",
        // age: "63",
        date: "2023/09/15",
        // salary: "100",
      },
      {
        name: "Ganesh Chaturthi",
        position: "Aditya Temples",
        office: "250",
        // age: "64",
        date: "2023/06/18",
        // salary: "$725",
      },
      {
        name: "South Zone Inter University Kabbadi",
        position: "Colors Ground",
        office: "250",
        // age: "22",
        date: "2023/11/11 to 2023/11/13",
        // salary: "No Fee",
      },
      {
        name: "JNTUK central Zon Atheletrics men & women Championship",
        position: "JNTUK",
        office: "250",
        // age: "22",
        date: "2023/12/16 to 2023/11/17",
        // salary: "No Fee",
      },
      {
        name: "Blood Camp",
        position: "Ramanujan Bavan",
        office: "250",
        // age: "19",
        date: "2024/01/31",
        // salary: "$385",
      },
      {
        name: "Vasantha Panchami",
        position: "Aditya Temples",
        office: "250",
        // age: "59",
        date: "2024/02/14",
        // salary: "$137",
      },
      {
        name: "National Science Day",
        position: "Ratan Tata Bavan",
        office: "200",
        // age: "61",
        date: "2024/2/28",
        // salary: "$372",
      },
      {
        name: "shivratri",
        position: "Aditya  Temples",
        office: "300",
        // age: "39",
        date: "2024/02/07",
        // salary: "$205",
      },
      {
        name: "National Women's Day",
        position: "Cotton Bavan",
        office: "200",
        // age: "61",
        date: "2024/03/08",
        // salary: "No Fee",
      },
      
      {
        name: "Project Space",
        position: "Technical Hub",
        office: "510",
        // age: "66",
        date: "2024/03/15",
        // salary: "4000",
      },
      {
        name: "Holi",
        position: "Aditya Hostles",
        office: "800",
        // age: "30",
        date: "2024/03/25",
        // salary: "$90",
      },
      {
        name: "Endurance ChampionShip",
        position: "Sports Ground",
        office: "300",
        // age: "22",
        date: "2024/04/02",
        // salary: "$342",
      },
      {
        name: "Alumni Meet",
        position: "Hyderabad",
        office: "200",
        // age: "43",
        date: "2024/04/06",
        // salary: "$313",
      },
      {
        name: "Independance Day",
        position: "Colors Ground",
        office: "150",
        // age: "36",
        date: "2023/08/15",
        // salary: "$470",
      },
      {
        name: "National Sports Day",
        position: "Sports Ground",
        office: "300",
        // age: "22",
        date: "2023/08/29",
        // salary: "$342",
      },
      {
        name: "Veda",
        position: "All Three Campus",
        office: "2500",
        // age: "63",
        date: "2023/09/15",
        // salary: "100",
      },
      {
        name: "Ganesh Chaturthi",
        position: "Aditya Temples",
        office: "250",
        // age: "64",
        date: "2023/06/18",
        // salary: "$725",
      },
      
      {
        name: "Alumni Meet",
        position: "Banglore",
        office: "250",
        // age: "22",
        date: "2023/11/25",
        // salary: "No Fee",
      },
      
      
    
    ];
    data.rows = rows.map((row) => ({
      ...row, // Spread existing row data
      actions: <React.Fragment>
                  <Link to={`/edit/${row.id}`}><button className="btn btn-warning btn-sm">Edit</button></Link>
                  {' '}
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(row.id)}>Delete</button>
               </React.Fragment>
    }));
    
   

  return (
    <React.Fragment>

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Default Datatable </CardTitle>
                  <p className="card-title-desc">
                    mdbreact DataTables has most features enabled by default, so
                    all you need to do to use it with your own tables is to call
                    the construction function:{" "}
                    <code>&lt;MDBDataTable /&gt;</code>.
                  </p>

                  <MDBDataTable responsive bordered data={data} />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Stripped example </CardTitle>
                  <p className="card-title-desc">
                    mdbreact DataTables has most features enabled by default, so
                    all you need to do to use it with your own tables is to call
                    the construction function:{" "}
                    <code>&lt;MDBDataTable striped /&gt;</code>.
                  </p>

                  <MDBDataTable responsive striped bordered data={data} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        
    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(DatatableTables);