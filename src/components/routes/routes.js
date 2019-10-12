import React from "react";
import { Route } from "react-router-dom";
import Contact from "../../components/forms/contact/contact";
import Posts from "../../components/posts/posts";
import Home from "../home/home";

const fetchTopicRoutes = () => {
  return [
    {
      path: "/helloworld",
      component: Home,
      exact: true
    }
  ];
};

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/posts",
    component: Posts,
    exact: true
  },
  {
    path: "/contact",
    component: Contact,
    exact: true
  },
  {
    path: "/topics",
    component: Home,
    exact: true,
    routes: [
      {
        path: "/topics/:topicId",
        component: Home,
        exact: true,
        routes: fetchTopicRoutes
      }
    ]
  }
];

const MakeRouteWithSubRoutes = route => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
};

export default function RouteList() {
  return (
    <>
      {routes.map((route, index) => (
        <MakeRouteWithSubRoutes key={index} {...route} />
      ))}
    </>
  );
}
