import "./Projectspace.css"; // Import your CSS file
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
//Import Images
import img20 from "../../assets/images/p6.jpg";
import p5 from "../../assets/images/p5.jpg";
import img6 from "../../assets/images/img6.jpg";
import img16 from "../../assets/images/p4.jpg";
import img5 from "../../assets/images/ii.jpg";
import img4 from "../../assets/images/img11.jpg";
import img8 from "../../assets/images/img16.jpg";
import img11 from "../../assets/images/img4.jpg";
import img10 from "../../assets/images/img8.jpg";

const Past = () => {
  document.title = "Pastevents";
    const gridSpacing = 3;

  const items = [
    {
      src: img20,
      altText: "Slide 1",
      caption: "Slide 1",
    },
    {
      src: p5,
      altText: "Slide 2",
      caption: "Slide 2",
    },
    {
      src: img6,
      altText: "Slide 3",
      caption: "Slide 3",
    },
    {
        src: img16,
        altText: "Slide 4",
        caption: "Slide 4",
      },
      {
        src: img5,
        altText: "Slide 5",
        caption: "Slide 5",
      },
      {
        src: img4,
        altText: "Slide 6",
        caption: "Slide 6",
      },
      {
        src: img8,
        altText: "Slide 7",
        caption: "Slide 7",
      },
      {
        src: img11,
        altText: "Slide 8",
        caption: "Slide 8",
      },
      {
        src: img10,
        altText: "Slide 9",
        caption: "Slide 9",
      },
  ]
  return (
      <React.Fragment>
      <Grid container spacing={gridSpacing}>
        <Grid item>
          <Card className="c">
            <CardHeader
              title={
                <Typography component="div" className="card-header"  id = "INTRODUCTION">
                    <h4><center><b >Vasantha Panchami</b></center></h4>
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" className='b'>
              <center><img src = {img20} alt = ""/></center>
                <br/>
              <p>Celebrating Vasanth Panchami in your college can be a vibrant and culturally rich experience, often filled 
                with a variety of activities and rituals centered around the worship of Goddess Saraswati and the arrival of spring.
                 Vasanth Panchami celebrations in our college are an opportunity t
            </p>
              </Typography>
            </CardContent>
          </Card>
          <Card className="c">
            <CardHeader
              title={
                <Typography component="div" className="card-header"  id = "INTRODUCTION">
                <h4><center><b >Sivarathi </b></center></h4>
                  
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" className='b'>
              <center><img src = {p5} alt = ""/></center>
                <br></br>
              <p>Shivaratri, also known as Maha Shivaratri, is one of the most significant Hindu festivals dedicated to Lord Shiva.
                 Celebrated annually, Shivaratri falls on the 14th night of the lunar month of Phalguna or Maagha, usually in February or March. 
                Overall, Shivaratri celebrations in our college are a time of reverence, devotion, and spiritual awakening.
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
                  <h4><center><b >Independence day</b></center></h4>
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" className='b'>
              <center><img src = {img6} alt = ""/></center>
                <br></br>
              <p>Independence Day, celebrated on the 15th of August every year, commemorates the day in 1947 when India gained independence 
                from British rule after years of struggle and sacrifices. It's a significant national holiday in India, 
                marked by patriotic fervor, flag hoisting ceremonies, cultural programs, and various other activities across the country,
                 including in colleges and educational institutions.
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
              <center><img src = {img16} alt = ""/></center>
                <br></br>
              <p>International Women's Day, celebrated on March 8th every year, is a global event dedicated to honoring the achievements
                 of women and advocating for gender equality and women's rights. In your college, Women's Day celebrations are likely to be 
                 vibrant and meaningful, focusing on empowering women, raising awareness about gender issues, and celebrating their contributions
                  to society.
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
              <center><img src = {img5} alt = ""/></center>
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
                  <h4><center><b >National Youth Day</b></center></h4>
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" className='b'>
              <center><img src = {img4} alt = ""/></center>
                <br></br>
              <p>The National Youth Day is observed all over India at schools and colleges, with processions, speeches, music, youth conventions,
                 seminars, Yogasanas, presentations, competitions in essay-writing, recitations and sports on 12 January every year. 
                 Swami Vivekananda's lectures and writings, deriving their inspiration from Indian spiritual tradition and the broad outlook 
                 of his Master Sri Ramakrishna Paramahansa. 
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
                  <h4><center><b >Sankarthi sambaralu</b></center></h4>
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" className='b'>
              <center><img src = {img8} alt = ""/></center>
                <br></br>
              <p>Sankranti, also known as Makar Sankranti, is a vibrant and joyous Hindu festival celebrated across India, 
                marking the transition of the sun into the zodiac sign of Capricorn (Makara). This auspicious occasion typically falls
                 on January 14th or 15th each year, depending on the Hindu calendar. 
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
                  <h4><center><b >Christmas</b></center></h4>
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" className='b'>
              <center><img src = {img11} alt = ""/></center>
                <br></br>
              <p>Christmas Day in your college is a festive and joyous occasion that brings together students, faculty, 
                and staff to commemorate the birth of Jesus Christ and spread the spirit of love, peace, and goodwill. 
                 Christmas Day celebrations in your college are a time of joy, fellowship, and spiritual renewal, as students and faculty
                  come together to celebrate the birth of Jesus Christ and embrace the values of love, peace, and goodwill towards all.
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
                  <h4><center><b >National sports Day</b></center></h4>
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" className='b'>
              <center><img src = {img10} alt = ""/></center>
                <br></br>
              <p>Celebrating Sports Day in your college is an exciting event that fosters a spirit of sportsmanship, teamwork,
                 and healthy competition among students and faculty members. Sports Day celebrations in your college are a testament 
                 to the importance of physical fitness, teamwork, and holistic development. They provide a platform for students to 
                 showcase their athletic talents, cultivate leadership skills, and build lasting memories of camaraderie and achievement.
            </p>
               {/* <br/> */}
              {/* <center><img src = {eca} alt=''/></center> */}
              </Typography>
            </CardContent>
          </Card>
          
          <card>
            <cardbody>
              sliding

            </cardbody>
          </card>
        </Grid>
      </Grid>
      </React.Fragment>
  );
}

export default Past ;