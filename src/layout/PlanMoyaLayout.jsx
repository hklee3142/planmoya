import {Outlet} from "react-router-dom";
import {useState} from "react";
import PlanMoyaLayoutSidebar from "component/layout/PlanMoyaLayoutSidebar";
import BreadCrumb from "component/layout/BreadCrumb";


const TABS = [
    "HOME",
    "프로젝트",
    "체크리스트 작성",
    "주간 회고 작성",
    "월간 회고 작성"
];



const PlanMoyaLayout = () => {

    const [activeTab, setActiveTab] = useState("HOME");

    return (
        <div className="app-layout">
            <PlanMoyaLayoutSidebar />
            <div className="main-area">
                <header className="header">
                    <div className="header-tabs">
                        {TABS.map(tab => (

                            <div key={tab}
                                 className={`header-tab ${activeTab === tab ? "active" : ""}`}
                                 onClick={() => setActiveTab(tab)}>
                                {tab}
                            </div>
                        ))}
                    </div>
                </header>
                <BreadCrumb items={
                    activeTab === "HOME" ? ["HOME"] : 
                    ["HOME",activeTab]} />

                <div className="content-wrapper">
                    <div className="content-box">
                        <div className="content-header">{activeTab}</div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );

};


export default PlanMoyaLayout;