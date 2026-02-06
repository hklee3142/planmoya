import {Routes, Route} from "react-router-dom";
import PlanMoyaMainPage from "pages/PlanMoyaMainPage";
import PlanMoyaLayout from "layout/PlanMoyaLayout";



const IndexRoute = () => {

    return (
        <Routes>
            <Route element={<PlanMoyaLayout/>}>
                <Route path="/" element={<PlanMoyaMainPage />} />
            </Route>
        </Routes>
    )

};


export default IndexRoute;