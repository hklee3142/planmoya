

import React, {useState} from 'react';
import {Card, Row, Col, Tabs, Calendar, Progress, Badge, Button, Select} from 'antd';
import {EditOutlined, PlusOutlined} from '@ant-design/icons';
import dayjs from 'dayjs';



const ProjectDetailContainer = () => {

    const [activeMonth, setActiveMonth] = useState("1");

    const tabItems = [
        {key:'1', label: '2026-01'},
        {key:'2', label: '2026-02'},
        {key:'3', label: '2026-03'},
    ]

    //const isToday = value.isSame(dayjs(),'day');//오늘날짜인지 확인

    return (
        <div className="project-detail-container">
            <div style={{ marginBottom: 16 }}>
            <Card size="small" style={{ borderRadius: 10, marginBottom: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontWeight: 'bold', color: '#555', fontSize: '14px' }}>프로젝트 선택</span>
                <Select 
                    defaultValue="2026-1" 
                    style={{ width: 250 }}
                    suffixIcon={<span style={{fontSize: '10px'}}>▼</span>}
                >
                    <Select.Option value="2026-1">2026 상반기 개발</Select.Option>
                    <Select.Option value="2026-2">차세대 시스템 구축 프로젝트</Select.Option>
                </Select>
                </div>
            </Card>

            {/* [아래 - 2뎁스] 프로젝트 상세 정보 카드 */}
            <Card size="small" style={{ borderRadius: 10, backgroundColor: '#fafafa' }}>
                <div style={{ fontSize: '11px', color: '#aaa', marginBottom: '6px' }}>
                ── 프로젝트 상세 정보
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#888' }}>프로젝트명 :</span>
                    <span style={{ fontWeight: '600', color: '#333' }}>2026 상반기 개발</span>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#888' }}>시작일 :</span>
                    <span style={{ fontWeight: '600', color: '#333' }}>2026-01-01</span>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#888' }}>종료일 :</span>
                    <span style={{ fontWeight: '600', color: '#333' }}>2026-03-31</span>
                </div>
                </div>
            </Card>

            </div>
             <div style={{position: 'relative'}}>
            <Tabs
                activeKey={activeMonth}
                onChange={setActiveMonth}
                items={tabItems}
                type="card"
                tabBarStyle={{marginBottom:0}}
            />
            <Button type="primary"
                    icon={<PlusOutlined />}
                    style={{position:'absolute', right:0, top:0 ,backgroundCoor:'#faad14', border:'none'}}
                    onClick={()=> console.log('오늘의 체크리스트 작성 이동')}>체크리스트 작성
            </Button>
            <Card style={{borderRadius:'0 0 10px 10px', borderTop:'none'}}>
                <Col span={9}>
                    <div className="calendar-wrapper" style={{border:'1px solid #f0f0f0', padding: 8}}>
                        <Calendar
                            fullscreen={false}
                            headerRender={() => null}
                            fullCellRender={dateCellRender}
                            value={dayjs(2026-1-1)}
                        />
                    </div>
                </Col>
            </Card>
        </div>
        </div>

       

    );

}

export default ProjectDetailContainer;