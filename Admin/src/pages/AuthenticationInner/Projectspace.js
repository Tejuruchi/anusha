import { Button } from "reactstrap";
import image1 from 'assets/images/poster.jpg'; 
import "./Projectspace.css"; // Import your CSS file
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
//     Row,
//     Card,
//     CardBody
// } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

//Import Images
import img1 from "assets/images/img1.jpg";
import img2 from "assets/images/img2.jpg";
import img3 from "assets/images/img3.jpg";
import img4 from "assets/images/img4.jpg";
import img5 from "assets/images/img5.jpg";
import img6 from "assets/images/img6.jpg";


const Projectspace = () => {
  document.title = "Projectspace";
    const gridSpacing = 3;
  const breadcrumbItems = [
      { title: "Lexa", link: "#" },
      { title: "Pages", link: "#" },
      { title: "Timeline", link: "#" },
  ]
  const items = [
    {
      src: img1,
      altText: "Slide 1",
      caption: "Slide 1",
    },
    {
      src: img2,
      altText: "Slide 2",
      caption: "Slide 2",
    },
    {
      src: img3,
      altText: "Slide 3",
      caption: "Slide 3",
    },
  ]



  return (
      <React.Fragment>
        <div className="shadow-md w-full">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* <div className="ml-auto">
            <Button color="#2f3f50" className="mr-2"><a className="text-white-800 hover:text-gray-400 duration-500 cursor-pointer"
                    href="http://localhost:3000/login">Admin</a></Button> 
            <Button color="#2f3f50" className="mr-3"><a className="text-white-800 hover:text-gray-400 duration-500 cursor-pointer"
                    href="http://localhost:3000/userlogin">User</a></Button>
        </div> */}
        <div className="button-container">
        <Button color="#2f3f50" className="button"><a className="text-white-800 hover:text-gray-400 duration-500 cursor-pointer"
              href="http://localhost:3000/ongo">upcoming Events</a></Button> 
        <Button color="#2f3f50" className="button"><a className="text-white-800 hover:text-gray-400 duration-500 cursor-pointer"
              href="http://localhost:3000/pa">Past Events</a></Button>
               
      <Button color="#2f3f50" className="button"><a className="text-white-800 hover:text-gray-400 duration-500 cursor-pointer"
              href="http://localhost:3000/login">Admin</a></Button>
               
      <Button color="#2f3f50" className="button"><a className="text-white-800 hover:text-gray-400 duration-500 cursor-pointer"
              href="http://localhost:3000/userlogin">User</a></Button>
      
    </div>
          <div className="f" >
            <img src={image1} alt="Home"/>
          </div>
        </div>
      </div>
      <br/>
      <Grid container spacing={gridSpacing}>
        <Grid item>
          <Card className="c">
            <CardHeader
              title={
                <Typography component="div" className="card-header"  id = "INTRODUCTION">
                    <h4><center><b >Kabadi Tournament</b></center></h4>
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" className='b'>
              <center><img src = {img1} alt = ""/></center>
                <br/>
              <p>The South Zone Inter-University Kabaddi Tournament is an annual
            sports event organized among universities in the southern region of 
            a country, typically in India. This tournament serves as a platform for 
            university-level kabaddi players to showcase their skills and compete against 
            teams from other universities
            </p>
               {/* <br/> */}
              {/* <center><img src = {eca} alt=''/></center> */}
              </Typography>
            </CardContent>
          </Card>
          <Card className="c">
            <CardHeader
              title={
                <Typography component="div" className="card-header"  id = "INTRODUCTION">
                <h4><center><b >Veda 2k23 </b></center></h4>
                  
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" className='b'>
              <center><img src = {img2} alt = ""/></center>
                <br></br>
              <p>VEDA is a technical fest conducted at the ADITYA CAMPUS for extracting
                the hidden talents in the students and to for their carrier motivation. This is 
                conducted in the month of September of every year. All the surrounding colleges are invited 
                for the participation .Interesting aspects like ROBOTICS is conducted.
            </p>
               {/* <br/> */}
              {/* <center><img src = {eca} alt=''/></center> */}
              </Typography>
            </CardContent>
          </Card>
          <Card className="c">
            <CardHeader
              title={
                <Typography component="div" className="card-header"  id = "INTRODUCTION">
                  <h4><center><b >Golden Day</b></center></h4>
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" className='b'>
              <center><img src = {img3} alt = ""/></center>
                <br></br>
              <p>The purpose of the Golden Day Celebration is to recognize and celebrate
                 exceptional achievements, innovations, and contributions made by individuals,
                  teams, or organizations within the technical hub. It serves as a platform to
                   showcase outstanding work, foster a culture of appreciation, and inspire others
                    to strive for excellence in their endeavors.
            </p>
               {/* <br/> */}
              {/* <center><img src = {eca} alt=''/></center> */}
              </Typography>
            </CardContent>
          </Card>
          <Card className="c">
            <CardHeader
              title={
                <Typography component="div" className="card-header"  id = "INTRODUCTION">
                  <h4><center><b >Women's Day</b></center></h4>
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" className='b'>
              <center><img src = {img6} alt = ""/></center>
                <br></br>
              <p>International Women's Day is a global day celebrating the social, economic,
                 cultural, and political achievements of women. The day also marks a call to action 
                 for accelerating gender parity. Significant activity is witnessed worldwide as groups
                  come together to celebrate women's achievements or rally for women's equality.
            </p>
               {/* <br/> */}
              {/* <center><img src = {eca} alt=''/></center> */}
              </Typography>
            </CardContent>
          </Card>
          <Card className="c">
            <CardHeader
              title={
                <Typography component="div" className="card-header"  id = "INTRODUCTION">
                  <h4><center><b >Ganesh Chaturdhi</b></center></h4>
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" className='b'>
              <center><img src = {img4} alt = ""/></center>
                <br></br>
              <p>At the start of the festival, idols of Ganesha are placed in hostels. The worship begins
                 with the pranapratishtha, a ritual to invoke life in the idols, followed by shhodashopachara,
                 or the 16 ways of paying tribute.At the conclusion of the festival, the idols are carried 
                  local rivers in huge processions accompanied by devotional singing and dancings.
            </p>
               {/* <br/> */}
              {/* <center><img src = {eca} alt=''/></center> */}
              </Typography>
            </CardContent>
          </Card>
          <Card className="c">
            <CardHeader
              title={
                <Typography component="div" className="card-header"  id = "INTRODUCTION">
                  <h4><center><b >Achiever's Day</b></center></h4>
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" className='b'>
              <center><img src = {img5} alt = ""/></center>
                <br></br>
              <p>The Dream of many graduates is to achieve a job.
                 Aditya celebrates the ACHIEVERS DAY -2k23 to congratulate all its 
                 achievers who laid a new mile stone for the year.
            </p>
               {/* <br/> */}
              {/* <center><img src = {eca} alt=''/></center> */}
              </Typography>
            </CardContent>
          </Card>
          <card>
            <cardbody>

            </cardbody>
          </card>
        </Grid>
      </Grid>

      </React.Fragment>
  );
}

export default Projectspace;