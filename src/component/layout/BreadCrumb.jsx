


const BreadCrumb = ({items}) => {

    return (
        <div className="breadcrumb">
          <span className="breadcrumb-current">
            {items.join(" > ")}
          </span>
        </div>
    )

}

export default BreadCrumb;