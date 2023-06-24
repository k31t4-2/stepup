import { About } from "../About";
import { AboutDetailA } from "../AboutDetailA";
import { AboutDetailB } from "../AboutDetailB";


export const RoutesAbout = [
  {
    path: "/",
    exact : true,
    children:<About />
  },

  {
    path: "/AboutDetailA",
    exact : false,
    children:<AboutDetailA />
  },
  {
    path: "/AboutDetailB",
    exact: false,
    children: <AboutDetailB />
  },
 ]
