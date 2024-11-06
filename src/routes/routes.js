import { Home, Details, List} from "../pages";


let PageComponents = [
    {name: "Home", path: "/", element: <Home />, id:1},
    {name: "Details", path: "/productdetail/:id", element: <Details />, id:2},
    {name: "Cosmetics", path: "/:category", element: <List />, id:3},
    {name: "Humanhair", path: "/:category", element: <List />, id:4},
    {name: "Artificialhair", path: "/:category", element: <List />, id:5},
    {name: "Fabrics", path: "/:category", element: <List />, id:6},
    {name: "Fashion", path: "/:category", element: <List />, id:7},
    {name: "Newarrivals", path: "/:category", element: <List />, id:8}

]


export {PageComponents}