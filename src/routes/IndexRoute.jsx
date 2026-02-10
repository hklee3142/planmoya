import {Routes, Route} from "react-router-dom";
import PlanMoyaMainPage from "pages/PlanMoyaMainPage";
import PlanMoyaLayout from "layout/PlanMoyaLayout";
import ProjectDetailPage from "pages/ProjectDetailPage";



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