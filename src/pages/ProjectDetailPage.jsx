
import PjojectDetailContainer from "container/ProjectDetailContainer";


const ProjectDetailPage = ({onOpenTab}) => {

    console.log("전달된 함수 확인:", onOpenTab);

    return(
        <PjojectDetailContainer onOpenTab={onOpenTab}/>
    )

}

export default ProjectDetailPage;