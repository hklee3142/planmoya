

import React, {useState} from 'react';
import {Card, Row, Col, Tabs, Calendar, Progress, Badge, Button, Select} from 'antd';
import {EditOutlined, PlusOutlined} from '@ant-design/icons';
import dayjs from 'dayjs';
import locale from 'antd/es/date-picker/locale/ko_KR';
import ChecklistWritePage from 'pages/ChecklistWritePage';



const ProjectDetailContainer = ({onOpenTab}) => {

    

    const getListData = (value) => {
        const day = value.date();
        if(day % 10 === 0) return {percent : 30, color : '#ff4d4f'};
        if(day % 5 === 0) return {percent : 60, color : '#faad14'};
        if(day % 3=== 0) return {percent : 60, color : '#52c41a'};

        return null;
    };

    const handleGoToWrite = () => {

        onOpenTab({
            id:"checklist-write",
            title: "체크리스트 작성",
            component : <ChecklistWritePage onOpenTab={onOpenTab} />
        })
        
    }

    const [activeMonth, setActiveMonth] = useState("1");

    const dateCellRender = (value) => {
        
        let data = getListData(value); 
        const isToday = value.isSame(dayjs('2026-01-31'), 'day'); //dayjs에 인자값을 오늘날짜로 넣어야 함

        data = value.month() + 1 === Number(activeMonth) ? data : null

    

        // 배경색 및 텍스트 색상 결정
        const bgColor = data ? data.color : 'transparent';
        const textColor = data ? '#fff' : '#000';
        const todayBg = isToday ? '#1890ff' : bgColor; // 오늘 날짜 기본 파란색(이미지 참고)

    
        const isCurrentMonth = value.month() + 1 === Number(activeMonth);

        return (
            <div className="custom-date-cell" style={{opacity:isCurrentMonth ? 1: 0.5}}>
                <div 
                    className="date-circle"
                    style={{
                    backgroundColor: isCurrentMonth?todayBg: 'none',
                    color: textColor,
                    border: isToday ? '2px solid #722ecd1' : 'none', // 오늘 표시를 배경색으로 대체하거나 테두리 유지
                    }}
                >
                    {value.date()}
                </div>
            </div>
        )
    }

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
                        onClick={handleGoToWrite}>체크리스트 작성
                </Button>
                <Card style={{borderRadius:'0 0 10px 10px', borderTop:'none'}}>
                    <Row gutter={16} style={{display:'flex'}}>
                        <Col span={9}>
                            <div className="calendar-wrapper" style={{border:'1px solid #f0f0f0', padding: 8}}>
                                <Calendar
                                    fullscreen={false}
                                    headerRender={() => null}
                                    locale={locale}
                                    fullCellRender={dateCellRender}
                                    value={dayjs(`2026-0${activeMonth}-31`)}
                                />
                            </div>
                        </Col>
                      <Col span={15} style={{display:'flex', flexDirection: 'column'}}>
                      <Row gutter={[16, 16]} style={{flex: 1}}>
                        <Col span={12} style={{height:'50%'}}><Card title="좋았던 점" className="feedback-card blue" style={{ height: '100%' }}><li>계획대로 진행 중</li></Card></Col>
                        <Col span={12} style={{height:'50%'}}><Card title="개선점" className="feedback-card green" style={{ height: '100%' }}><li>운동시간 부족</li></Card></Col>
                        <Col span={12} style={{height:'50%'}}><Card title="깨달음" className="feedback-card yellow" style={{ height: '100%' }}><li>하면 된다!</li></Card></Col>
                        <Col span={12} style={{height:'50%'}}><Card title="오늘의 목표" className="feedback-card pink" style={{ height: '100%' }}><li>API 연동 완료하기</li></Card></Col>
                      </Row>
                    </Col>
                    </Row>
                </Card>
            </div>
            <Card size="small" style={{marginTop: 16, borderRadius:10, backgroundColor: '#fafafa'}}>
                <Row gutter={32}>
                    <Col span={12} style={{borderRight:'1px solid #eee', paddingRight: '24px'}}>
                        <div style={{marginBottom:'12px', fontWeight:'bold', color:'#ff4d4f', textAlign:'center'}}>
                            이주의 달성율
                        </div>
                        {['1주','2주','3주','4주','5주'].map((week, idx) =>{
                            const percent = (idx + 1) *20 -10;
                            const strokeColor = percent >= 40? '#ff4d4f' : '#8bc34a';

                            return (
                                <Row key={idx} align="middle" style={{marginBottom: 8}}>
                                    <Col span={6} style={{fintSize: '12px', color:'#666'}}>{week} 달성률 : </Col>
                                    <Col span={14}>
                                        <Progress 
                                            percent={percent}
                                            showInfo={false}
                                            strokeColor={strokeColor}
                                            strokeWidth={10}
                                            tailColor="#eee"
                                        />
                                    </Col>
                                    <Col span={4} style={{textAlign:'right', fontSize: '12px', color:'#888'}}>
                                        {percent}%
                                    </Col>
                                </Row>
                            );
                        })}
                    </Col>
                    <Col span={12} style={{paddingLeft:'24px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <div style={{marginBottom:'20px', fontWeight: 'bold',color:'#ff4d4f', textAlign: 'center'}}>이달의 달성율</div>
                        <div style={{textAlign: 'center'}}>
                            <Progress
                                percent={65}
                                status="active"
                                storokeColor="#8bc34a"
                                strokeWidth={15}
                                format={(percent) => (
                                    <span style={{fontSize: '18px', fontWeight: 'bold', color : '#333'}}>{percent}%</span>
                                )} />
                        </div>
                        <div style={{marginTop: '10px', color: '#888', fontSize: '12px'}}>
                            이번 달 전체 목표 달성률 입니다.
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
        

       

    );

}

export default ProjectDetailContainer;