import Vue from "vue";
import Router from "vue-router";
import Route from "./route";

Vue.use(Router);

// const Layout = (name) => Route('layout', name)
// const View = name => Route("views", name);
const DefaultPages = name => Route("pages/default", name);

// const DefaultViews = name => Route("views/default", name);
const DefaultViews = (path, name) => Route(`views/default/${path}`, name);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: DefaultPages("Login")
    },
    {
      path: "/admin",
      name: "Admin",
      component: DefaultPages("Admin"),
      redirect: "/admin/page",
      children: [
        {
          path: "page",
          name: "Page",
          component: DefaultViews("page"),
          redirect: "/admin/page/admin",
          children: [
            {
              path: "admin",
              name: "PageAdmin",
              component: DefaultViews("page", "Admin")
            },
            {
              path: "category",
              name: "PageCategory",
              component: DefaultViews("page", "Category")
            }
          ]
        }
      ]
    }
  ]
});
