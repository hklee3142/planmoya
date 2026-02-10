


const TabBar = ({tabs, activeTabId, onSelect, onClose}) => {

    
    return (
        <div className="tab-bar">
            {tabs.map((tab) => (
                <div 
                    key={tab.id}
                    className={`tab ${tab.id === activeTabId ? "active" : ""}`}
                    onClick={() => onSelect(tab.id)}
                >{tab.title}
                    <span className="tab-close"
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose(tab.id);
                        }}>x</span>
                </div>
            ))}
        </div>

    );

};

export default TabBar;