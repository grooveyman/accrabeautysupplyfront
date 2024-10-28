import { Home, Details} from "../pages";


let PageComponents = [
    {name: "Home", path: "/", element: <Home />, id:1},
    {name: "Details", path: "/productdetail/:id", element: <Details />, id:2}

]


export {PageComponents}