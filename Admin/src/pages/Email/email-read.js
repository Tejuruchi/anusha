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
import user2 from "../../assets/images/img7.jpg";
import user3 from "../../assets/images/img12.jpg";
import user4 from "../../assets/images/img13.jpg";
import user5 from "../../assets/images/img14.jpg";
import user6 from "../../assets/images/img15.jpg";
import user7 from "../../assets/images/p1.jpg";

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
            id: 1, imgUrl: user2, designation: "Creative Director", name: "Katherine J. McAvoy", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
            socials: [
                { id: 1, title: "Facebook", icon: "fab fa-facebook-f", link: "#", colorclass: "px-0 btn primary" },
                { id: 2, title: "Twitter", icon: "fab fa-twitter", link: "#", colorclass: "px-0 btn info" },
                { id: 3, title: "mobile", icon: "fa fa-phone", link: "#", colorclass: "px-0 btn danger" },
                { id: 4, title: "skype", icon: "fab fa-skype", link: "#", colorclass: "px-0 btn info" },
            ]
        },
        {
            id: 2, imgUrl: user3, designation: "Creative Director", name: "Richard L. Jackson", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
            socials: [
                { id: 1, title: "Facebook", icon: "fab fa-facebook-f", link: "#", colorclass: "px-0 btn primary" },
                { id: 2, title: "Twitter", icon: "fab fa-twitter", link: "#", colorclass: "px-0 btn info" },
                { id: 3, title: "mobile", icon: "fa fa-phone", link: "#", colorclass: "px-0 btn danger" },
                { id: 4, title: "skype", icon: "fab fa-skype", link: "#", colorclass: "px-0 btn info" },
            ]
        },
        {
            id: 3, imgUrl: user4, designation: "Creative Director", name: "Joshua D. Pearson", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
            socials: [
                { id: 1, title: "Facebook", icon: "fab fa-facebook-f", link: "#", colorclass: "px-0 btn primary" },
                { id: 2, title: "Twitter", icon: "fab fa-twitter", link: "#", colorclass: "px-0 btn info" },
                { id: 3, title: "mobile", icon: "fa fa-phone", link: "#", colorclass: "px-0 btn danger" },
                { id: 4, title: "skype", icon: "fab fa-skype", link: "#", colorclass: "px-0 btn info" },
            ]
        },
        {
            id: 4, imgUrl: user5, designation: "Creative Director", name: "Michael J. Folma", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
            socials: [
                { id: 1, title: "Facebook", icon: "fab fa-facebook-f", link: "#", colorclass: "px-0 btn primary" },
                { id: 2, title: "Twitter", icon: "fab fa-twitter", link: "#", colorclass: "px-0 btn info" },
                { id: 3, title: "mobile", icon: "fa fa-phone", link: "#", colorclass: "px-0 btn danger" },
                { id: 4, title: "skype", icon: "fab fa-skype", link: "#", colorclass: "px-0 btn info" },
            ]
        },
        {
            id: 5, imgUrl: user6, designation: "Creative Director", name: "Samuel P. Augustus", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
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
        }
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

