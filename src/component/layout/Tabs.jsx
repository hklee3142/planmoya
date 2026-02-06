


const Tabs = ({tabs, active}) => {
    return (
        <div className="tabs">
            {tabs.map(tab => (
                <div keu={tab}
                    className={`tab ${active === tab ? "active" : ""}`} 
                >{tab}
                </div>
            ))}
        </div>
    )
}

export default Tabs;