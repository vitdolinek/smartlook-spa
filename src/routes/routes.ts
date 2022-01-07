interface Route {
  name: string;
  path: string;
  icon?: Element;
}

const routes: Route[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Users",
    path: "/users",
  },
  {
    name: "Posts",
    path: "/posts",
  },
];

export { routes };
