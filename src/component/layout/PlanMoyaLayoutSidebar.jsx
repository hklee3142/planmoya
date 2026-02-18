
import AdminPage from "pages/AdminPage";
import BlogPage from "pages/BlogPage";
import ChecklistWritePage from "pages/ChecklistWritePage";
import JournalPage from "pages/JournalPage";
import ProjectDetailPage from "pages/ProjectDetailPage";
import {NavLink} from "react-router-dom";


const PlanMoyaLayoutSidebar = ({onOpenTab}) => {
    return (
        // <aside className="sidebar">
        //     <div className="sidebar-logo">PlanMoya</div>
        //     <nav className="sidebar-menu">
        //         {/* <div className="sidebar-item active">프로젝트</div> */}
        //         <NavLink to="project/detail" className={({isActive}) =>
        //             isActive ? "sidebar-item active" : "sidebar-item"
        //         }>프로젝트</NavLink>
        //         <NavLink to="/checklist" className={({isActive}) =>
        //             isActive ? "sidebar-item active" : "sidebar-item"
        //         }>체크리스트(회고)</NavLink>
        //         <NavLink to="/journal" className={({isActive}) =>
        //             isActive ? "sidebar-item active" : "sidebar-item"
        //         }>저널링</NavLink>
        //         <NavLink to="/blog" className={({isActive}) =>
        //             isActive ? "sidebar-item active" : "sidebar-item"
        //         }>블로그</NavLink>
        //         <NavLink to="/admin" className={({isActive}) =>
        //             isActive ? "sidebar-item active" : "sidebar-item"
        //         }>관리자</NavLink>
        //     </nav>
        // </aside>

        <aside className="sidebar">
            <div className="sidebar-logo">PlanMoya</div>
            <div className="sidebar-item" onClick={() =>
                onOpenTab({
                    id: "project",
                    title: "프로젝트",
                    component: <ProjectDetailPage />
                })
            }>프로젝트</div>
            <div className="sidebar-item" onClick={() =>
                onOpenTab({
                    id: "checklist",
                    title: "체크리스트",
                    component: <ChecklistWritePage today={'2026-01-31'} />
                })
            }>체크리스트</div>            
            <div className="sidebar-item" onClick={() =>
                onOpenTab({
                    id: "journal",
                    title: "저널링",
                    component: <JournalPage />
                })
            }>저널링</div>            
            <div className="sidebar-item" onClick={() =>
                onOpenTab({
                    id:"blog",
                    title:"블로그",
                    component:<BlogPage />
                })
            }>블로그</div>
            <div className="sidebar-item" onClick={() => 
                onOpenTab({
                    id:"admin",
                    title:"관리자",
                    component:<AdminPage />
                })
            }>관리자</div>
        </aside>
    );
};

export default PlanMoyaLayoutSidebar;