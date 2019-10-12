import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
import { Home, Book, AccountBox } from "@material-ui/icons";

import { Link } from "react-router-dom";

var linkStyle = {
  color: "white",
  textDecoration: "none"
};

const fetchTopicRoutes = () => {
  return [
    {
      path: "/helloworld",
      name: "Hellworld"
      // component: Home,
      // exact: true
    }
  ];
};

const routes = [
  {
    path: "/",
    name: "Home"
    // component: Home,
    // exact: true
  },
  {
    path: "/posts",
    name: "Posts"
    // component: Posts,
    // exact: true
  },
  {
    path: "/contact",
    name: "Contact"
    // component: Contact,
    // exact: true
  },
  {
    path: "/topics",
    name: "Topics",
    // component: Home,
    // exact: true,
    routes: [
      {
        path: "/topics/:topicId",
        name: "Topics/id",
        // component: Home,
        // exact: true,
        routes: fetchTopicRoutes
      }
    ]
  }
];

const MakeLinkWithSubRoutes = renderRoute => {
  return (
    <ListItemText inset>
      <TypoGraphy color="inherit" variant="title">
        <Link to={renderRoute.renderRoute.path} style={linkStyle}>
          {renderRoute.renderRoute.name}
        </Link>
      </TypoGraphy>
    </ListItemText>
  );
};

function NavBar(props) {
  return (
    <List component="nav">
      <ListItem component="div">
        {routes.map((route, index) => (
          <MakeLinkWithSubRoutes key={index} renderRoute={route} />
        ))}
      </ListItem>
    </List>
  );
}

export default NavBar;
