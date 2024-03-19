// import React , {useEffect} from "react"
// import { Link } from "react-router-dom"
// import { Row, Col, Card, CardBody } from "reactstrap"

// import { connect } from "react-redux";

// //Import Image
// import avatar1 from "../../assets/images/users/user-1.jpg"
// import img3 from "../../assets/images/small/img-3.jpg"
// import img4 from "../../assets/images/small/img-4.jpg"

// import { setBreadcrumbItems } from '../../store/actions';

// //Import Email Sidebar
// import EmailSideBar from "./email-sidebar"

// //Import Email Topbar
// import EmailToolbar from "./email-toolbar"

// const EmailRead = (props) => {
//   document.title = "Email Read | Lexa - Responsive Bootstrap 5 Admin Dashboard";


//   const breadcrumbItems = [
//     { title: "Lexa", link: "#" },
//     { title: "Email", link: "#" },
//     { title: "Email Read", link: "#" },
//   ]

//   useEffect(() => {
//     props.setBreadcrumbItems('Email Read', breadcrumbItems)
//   })

//   return (
//     <React.Fragment>

//       <Row>
//         <Col xs="12">
//           {/* Render Email SideBar */}
//           <EmailSideBar />

//           <div className="email-rightbar mb-3">
//             <Card>
//               {/* Render Email Top Tool Bar */}
//               <EmailToolbar />

//               <CardBody>
//               <div className="d-flex mb-4">
//               <div className="flex-shrink-0  me-3">
//                   <img
//                     className="d-flex me-3 rounded-circle avatar-sm"
//                     src={avatar1}
//                     alt="lexa"
//                   />
//                   </div>
//                   <div className="flex-grow-1 align-self-center">
//                     <h4 className="font-size-14 m-0">
//                       Humberto D. Champion
//                         </h4>
//                     <small className="text-muted">support@domain.com</small>
//                   </div>
//                 </div>

//                 <h4 className="font-size-16">
//                   This Week's Top Stories
//                     </h4>

//                 <p>Dear Lorem Ipsum,</p>
//                 <p>
//                   Praesent dui ex, dapibus eget mauris ut, finibus
//                   vestibulum enim. Quisque arcu leo, facilisis in fringilla
//                   id, luctus in tortor. Nunc vestibulum est quis orci varius
//                   viverra. Curabitur dictum volutpat massa vulputate
//                   molestie. In at felis ac velit maximus convallis.
//                     </p>
//                 <p>
//                   Sed elementum turpis eu lorem interdum, sed porttitor eros
//                   commodo. Nam eu venenatis tortor, id lacinia diam. Sed
//                   aliquam in dui et porta. Sed bibendum orci non tincidunt
//                   ultrices. Vivamus fringilla, mi lacinia dapibus
//                   condimentum, ipsum urna lacinia lacus, vel tincidunt mi
//                   nibh sit amet lorem.
//                     </p>
//                 <p>Sincerly,</p>
//                 <hr />

//                 <Row>
//                   <Col xl="2" xs="6">
//                     <Card>
//                       <img
//                         className="card-img-top img-fluid"
//                         src={img3}
//                         alt="lexa"
//                       />
//                       <div className="my-2 text-center">
//                         <Link to="#" className="text-muted font-weight-normal">
//                           Download
//                             </Link>
//                       </div>
//                     </Card>
//                   </Col>
//                   <Col xl="2" xs="6">
//                     <Card>
//                       <img
//                         className="card-img-top img-fluid"
//                         src={img4}
//                         alt="lexa"
//                       />
//                       <div className="my-2 text-center">
//                         <Link to="#" className="text-muted font-weight-normal">
//                           Download
//                             </Link>
//                       </div>
//                     </Card>
//                   </Col>
//                 </Row>

//                 <Link
//                   to="#"
//                   className="btn btn-secondary waves-effect mt-5"
//                 >
//                   <i className="mdi mdi-reply"></i> Reply
//                     </Link>

//               </CardBody>
//             </Card>
//           </div>
//         </Col>
//       </Row>

//     </React.Fragment>
//   )
// }

// export default connect(null, { setBreadcrumbItems })(EmailRead);




import React, { useEffect } from 'react';
import { Row } from "reactstrap";

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

//Import Components
import CardUser from "../Extra Pages/card-user";

//Import Images
import user2 from "../../assets/images/img20.jpg";
import user3 from "../../assets/images/p5.jpg";
import user4 from "../../assets/images/img6.jpg";
import user5 from "../../assets/images/img16.jpg";
import user6 from "../../assets/images/img5.jpg";
import user7 from "../../assets/images/img4.jpg";
import user8 from "../../assets/images/img8.jpg";
import user9 from "../../assets/images/img11.jpg";
import user10 from "../../assets/images/img10.jpg";
const PagesDirectory = (props) => {
    document.title = "Directory | Lexa - Responsive Bootstrap 5 Admin Dashboard";

    const breadcrumbItems = [
        { title: "Lexa", link: "#" },
        { title: "Pages", link: "#" },
        { title: "Directory", link: "#" },
    ]

    useEffect(() => {
        props.setBreadcrumbItems('Directory', breadcrumbItems)
    })

    const users = [
        {
            id: 1, imgUrl: user2, designation: "Creative Director", name: "Katherine J. McAvoy", desc: "Celebrating Vasanth Panchami in your college can be a vibrant and culturally rich experience, often filled with a variety of activities and rituals centered around the worship of Goddess Saraswati and the arrival of spring. Vasanth Panchami celebrations in our college are an opportunity to honor tradition, showcase talent, and foster a spirit of learning and creativity among students and faculty members. It's a time to come together, celebrate cultural diversity, and welcome the arrival of spring with joy and enthusiasm.",
            socials: [
                { id: 1, title: "Facebook", icon: "fab fa-facebook-f", link: "#", colorclass: "px-0 btn primary" },
                { id: 2, title: "Twitter", icon: "fab fa-twitter", link: "#", colorclass: "px-0 btn info" },
                { id: 3, title: "mobile", icon: "fa fa-phone", link: "#", colorclass: "px-0 btn danger" },
                { id: 4, title: "skype", icon: "fab fa-skype", link: "#", colorclass: "px-0 btn info" },
            ]
        },
        {
            id: 2, imgUrl: user3, designation: "Creative Director", name: "Richard L. Jackson", desc: "Shivaratri, also known as Maha Shivaratri, is one of the most significant Hindu festivals dedicated to Lord Shiva. Celebrated annually, Shivaratri falls on the 14th night of the lunar month of Phalguna or Maagha, usually in February or March. Overall, Shivaratri celebrations in our college are a time of reverence, devotion, and spiritual awakening. ",
            socials: [
                { id: 1, title: "Facebook", icon: "fab fa-facebook-f", link: "#", colorclass: "px-0 btn primary" },
                { id: 2, title: "Twitter", icon: "fab fa-twitter", link: "#", colorclass: "px-0 btn info" },
                { id: 3, title: "mobile", icon: "fa fa-phone", link: "#", colorclass: "px-0 btn danger" },
                { id: 4, title: "skype", icon: "fab fa-skype", link: "#", colorclass: "px-0 btn info" },
            ]
        },
        {
            id: 3, imgUrl: user4, designation: "Creative Director", name: "Joshua D. Pearson", desc: "Independence Day, celebrated on the 15th of August every year, commemorates the day in 1947 when India gained independence from British rule after years of struggle and sacrifices. It's a significant national holiday in India, marked by patriotic fervor, flag hoisting ceremonies, cultural programs, and various other activities across the country, including in colleges and educational institutions.Independence Day celebrations in your college are a tribute to the sacrifices of the freedom fighters, a celebration of India's rich cultural heritage, and an opportunity to instill a sense of patriotism and civic responsibility among the youth.",
            socials: [
                { id: 1, title: "Facebook", icon: "fab fa-facebook-f", link: "#", colorclass: "px-0 btn primary" },
                { id: 2, title: "Twitter", icon: "fab fa-twitter", link: "#", colorclass: "px-0 btn info" },
                { id: 3, title: "mobile", icon: "fa fa-phone", link: "#", colorclass: "px-0 btn danger" },
                { id: 4, title: "skype", icon: "fab fa-skype", link: "#", colorclass: "px-0 btn info" },
            ]
        },
        {
            id: 4, imgUrl: user5, designation: "Creative Director", name: "Michael J. Folma", desc: "Sankranti, also known as Makar Sankranti, is a vibrant and joyous Hindu festival celebrated across India, marking the transition of the sun into the zodiac sign of Capricorn (Makara). This auspicious occasion typically falls on January 14th or 15th each year, depending on the Hindu calendar. Sankranti celebrations in our college are a reflection of India's rich cultural heritage, celebrating the harvest season, and fostering a sense of unity and belonging among students and faculty members.",
            socials: [
                { id: 1, title: "Facebook", icon: "fab fa-facebook-f", link: "#", colorclass: "px-0 btn primary" },
                { id: 2, title: "Twitter", icon: "fab fa-twitter", link: "#", colorclass: "px-0 btn info" },
                { id: 3, title: "mobile", icon: "fa fa-phone", link: "#", colorclass: "px-0 btn danger" },
                { id: 4, title: "skype", icon: "fab fa-skype", link: "#", colorclass: "px-0 btn info" },
            ]
        },
        {
            id: 5, imgUrl: user6, designation: "Creative Director", name: "Samuel P. Augustus", desc: "Vinayaka Chaturthi, is a Hindu festival celebrated to honor Lord Ganesha, the elephant-headed god of wisdom, prosperity, and remover of obstacles. It is typically observed with great enthusiasm and fervor across India, including in colleges and educational institutions.Ganesh Chaturthi celebrations in our college are a time of joy, devotion, and cultural enrichment, bringing together students, faculty, and staff to honor Lord Ganesha and seek his blessings for auspicious beginnings, success, and prosperity in all endeavors.",
            socials: [
                { id: 1, title: "Facebook", icon: "fab fa-facebook-f", link: "#", colorclass: "px-0 btn primary" },
                { id: 2, title: "Twitter", icon: "fab fa-twitter", link: "#", colorclass: "px-0 btn info" },
                { id: 3, title: "mobile", icon: "fa fa-phone", link: "#", colorclass: "px-0 btn danger" },
                { id: 4, title: "skype", icon: "fab fa-skype", link: "#", colorclass: "px-0 btn info" },
            ]
        },
        {
            id: 6, imgUrl: user7, designation: "Creative Director", name: "Joseph D. Starnes", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
            socials: [
                { id: 1, title: "Facebook", icon: "fab fa-facebook-f", link: "#", colorclass: "px-0 btn primary" },
                { id: 2, title: "Twitter", icon: "fab fa-twitter", link: "#", colorclass: "px-0 btn info" },
                { id: 3, title: "mobile", icon: "fa fa-phone", link: "#", colorclass: "px-0 btn danger" },
                { id: 4, title: "skype", icon: "fab fa-skype", link: "#", colorclass: "px-0 btn info" },
            ]
        },{
          id: 7, imgUrl: user8, designation: "Creative Director", name: "Richard L. Jackson", desc: "Celebrating Sports Day in your college is an exciting event that fosters a spirit of sportsmanship, teamwork, and healthy competition among students and faculty members. Sports Day celebrations in your college are a testament to the importance of physical fitness, teamwork, and holistic development. They provide a platform for students to showcase their athletic talents, cultivate leadership skills, and build lasting memories of camaraderie and achievement.",
          socials: [
              { id: 1, title: "Facebook", icon: "fab fa-facebook-f", link: "#", colorclass: "px-0 btn primary" },
              { id: 2, title: "Twitter", icon: "fab fa-twitter", link: "#", colorclass: "px-0 btn info" },
              { id: 3, title: "mobile", icon: "fa fa-phone", link: "#", colorclass: "px-0 btn danger" },
              { id: 4, title: "skype", icon: "fab fa-skype", link: "#", colorclass: "px-0 btn info" },
          ]
      },
      {
        id: 8, imgUrl: user9, designation: "Creative Director", name: "Richard L. Jackson", desc: "The National Youth Day is observed all over India at schools and colleges, with processions, speeches, music, youth conventions, seminars, Yogasanas, presentations, competitions in essay-writing, recitations and sports on 12 January every year. Swami Vivekananda's lectures and writings, deriving their inspiration from Indian spiritual tradition and the broad outlook of his Master Sri Ramakrishna Paramahansa. These were the source of inspiration and have motivated numerous youth organizations, study circles and service projects involving the youth.",
        socials: [
            { id: 1, title: "Facebook", icon: "fab fa-facebook-f", link: "#", colorclass: "px-0 btn primary" },
            { id: 2, title: "Twitter", icon: "fab fa-twitter", link: "#", colorclass: "px-0 btn info" },
            { id: 3, title: "mobile", icon: "fa fa-phone", link: "#", colorclass: "px-0 btn danger" },
            { id: 4, title: "skype", icon: "fab fa-skype", link: "#", colorclass: "px-0 btn info" },
        ]
    },
    {
      id: 9, imgUrl: user10, designation: "Creative Director", name: "Richard L. Jackson", desc: "International Women's Day, celebrated on March 8th every year, is a global event dedicated to honoring the achievements of women and advocating for gender equality and women's rights. In your college, Women's Day celebrations are likely to be vibrant and meaningful, focusing on empowering women, raising awareness about gender issues, and celebrating their contributions to society.Women's Day celebrations in your college are a testament to the strength, resilience, and achievements of women. They provide a platform for empowerment, education, and advocacy, fostering a culture of inclusivity, equality, and respect for women's rights and dignity.",
      socials: [
          { id: 1, title: "Facebook", icon: "fab fa-facebook-f", link: "#", colorclass: "px-0 btn primary" },
          { id: 2, title: "Twitter", icon: "fab fa-twitter", link: "#", colorclass: "px-0 btn info" },
          { id: 3, title: "mobile", icon: "fa fa-phone", link: "#", colorclass: "px-0 btn danger" },
          { id: 4, title: "skype", icon: "fab fa-skype", link: "#", colorclass: "px-0 btn info" },
      ]
  },
    ]

    return (
        <React.Fragment>

            <Row>
                <CardUser users={users} />
            </Row>
        </React.Fragment>
    );
}

export default connect(null, { setBreadcrumbItems })(PagesDirectory);