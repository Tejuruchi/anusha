import React, { useEffect } from 'react';
import { Row } from "reactstrap";

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

//Import Components
import CardUser from "../Extra Pages/card-user";

//Import Images
import user2 from "../../assets/images/ongo.jpg";
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
            id: 1, imgUrl: user2, designation: "Creative Director", name: "Project Space", desc: "Project-based learning is proving to be the best way for them to put their learned concepts into practice. These dedicated individuals are working tirelessly, investing over 10 hours every day alongside their team members to implement a total of 85 unique projects at Project Space.",
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