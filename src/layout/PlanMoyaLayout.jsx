import {Outlet} from "react-router-dom";
import {useState} from "react";
import PlanMoyaLayoutSidebar from "component/layout/PlanMoyaLayoutSidebar";
import TabBar from "component/layout/TabBar";
import BreadCrumb from "component/layout/BreadCrumb";




const PlanMoyaLayout = () => {

    const [tabs, setTabs] = useState([]);
    const [activeTabId, setActiveTabId] = useState(null);

    const openTab = (tab) => {
        setTabs((prev) => {
            const exists = prev.find((t) => t.id === tab.id);
            if(exists) {
                setActiveTabId(tab.id);
                return prev;
            }
            if(prev.length >= 10) return prev;
            setActiveTabId(tab.id);
            return [...prev, tab];
        });
    };

    const closeTab = (id) => {
        setTabs((prev) => {
            const filtered = prev.filter((t) => t.id !== id);
            if(id === activeTabId && filtered.length > 0) {
                setActiveTabId(filtered[filtered.length -1].id);
            }
            return filtered;
        });
    };
    const activeTab = tabs.find((t) => t.id ===activeTabId);

    return (
        <div className="app-layout">
            <PlanMoyaLayoutSidebar onOpenTab={openTab} />
            <div className="main-area">
                <TabBar 
                    tabs={tabs}
                    activeTabId={activeTabId}
                    onSelect={setActiveTabId}
                    onClose={closeTab}
                />
                <div className="page-area">
                    <div className="page-container">
                        {tabs.length === 0 && <Outlet />}
                        {tabs.map((tab)=> (
                            <div key={tab.id}
                                style={{display: tab.id === activeTabId ? "block" : "none"}}>
                            {tab.component} 
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    );

};


export default PlanMoyaLayout;