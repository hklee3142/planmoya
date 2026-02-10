

import {
    Card,
    Select,
    Tabs,
    Calendar,
    Progress,
    Button,
    Row,
    Col,
    Tag,
} from "antd";

import {
    CheckCircleOutlined,
    EditOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";

const {Option} = Select;




const PjojectDetailContainer = () => {
    
    return (
        <div className="page-container">
            <Card className="page-card">
                <Row align="middle" justify="space-between">
                    <Col>
                        <strong style={{marginRight: 12}}>프로젝트</strong>
                        <Select defaultValue="2026 상반기 개발" style={{width: 260}}>
                            <Option value="p1">2026 상반기 개발</Option>
                            <Option value="p2">개인 성장 프로젝트</Option>
                        </Select>
                    </Col>
                </Row>
            </Card>
        </div>
    )

}

export default PjojectDetailContainer;