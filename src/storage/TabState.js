import ProjectDetailPage from "pages/ProjectDetailPage";
import ChecklistWritePage from "pages/ChecklistWritePage";
import JournalPage from "pages/JournalPage";
import BlogPage from "pages/BlogPage";
import AdminPage from "pages/AdminPage";

export const ComponentMap = {
    project : (props) => <ProjectDetailPage {...props} /> ,
    checklist: (props) => <ChecklistWritePage {...props} today={'2026-01-31'} /> ,
    "checklist-write": (props) => <ChecklistWritePage {...props} today={'2026-01-31'} />,
    journal : (props) => <JournalPage {...props} />,
    blog : (props) => <BlogPage {...props} />,
    admin : (props) => <AdminPage {...props} />,
};

export const saveTabsToStorage = (tabs, activeId) => {
    const tabData = tabs.map(t => ({id : t.id, title: t.title})) ;
    localStorage.setItem('ide_tabs', JSON.stringify(tabData));
    localStorage.setItem('ide_active_id', activeId);
};

export const loadTabsFromStorage = () => {
    const saved = localStorage.getItem('ide_tabs');
    const activeId = localStorage.getItem('ide_active_id');

    if(!saved) return {tabs:[], activeId : null};

    const parsed = JSON.parse(saved);

    const restoredTabs = parsed.map(t => ({
        ...t,
        component : ComponentMap[t.id] ? ComponentMap[t.id]({}) : null
    })); //...t 이 문법은 t 라는 오브젝트에 component라는 속성을 추가 하여 restoredTabs변수에 삽입

    return {tabs : restoredTabs , activeId} ;
}