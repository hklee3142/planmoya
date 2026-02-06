import 'antd/dist/reset.css';
//import {Button} from "antd";
import {BrowserRouter} from "react-router-dom";
import {createGlobalStyle} from "styled-components";
import "./styles/layout.css";
import "./styles/sidebar.css";
import "./styles/header.css";
import "./styles/content.css";
import "./styles/tabs.css";
import "./styles/breadcrumb.css";

import IndexRoute from 'routes/IndexRoute';



function App() {
    return(
        <>
        <BrowserRouter>
            <IndexRoute/>
        </BrowserRouter>
        </>
    );
}

export default App;