
import React, {useState, useRef} from 'react';
import {Row,Col,Card,Calendar,Checkbox, Tabs,Button, AutoComplete, Input} from 'antd';
import {PlusOutlined, SaveOutlined,DeleteOutlined} from '@ant-design/icons';


const ChecklistWriteContainer = () => {

    const [options, setOptions] = useState([]);
    const [todoList, setTodoList] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const isProcessing = useRef(false);
    //const [projectKeyword, setProjectKeyword] = useState()

    const [projectKeywords, setProjectKeywords] = useState([
        {value : "바닐라 자바스크립트 공부"},
        {value : "김영한 자바강의"},
        {value : "독서(오브젝트)"},
    ]);

    const handlePressEnter = (value) => {

        if(isProcessing.current) return;

        const text = value?.trim();
        if(!text) return;

        isProcessing.current = true;

        try {
            const isDuplicateTodo = todoList.some(todo => todo.text === text);

            if(isDuplicateTodo) return;

            const isNewKeyword = projectKeywords.some(item => item.value === text);

            if(!isNewKeyword) {
                setProjectKeywords(prev => [...prev, {value: text}]);
            };

            const newTodo = {
                id: Date.now(),
                text : text,
                checked : false
            };

            setTodoList(prev => [...prev, newTodo]);
            setInputValue("");
            setOptions([]);            

        }finally {
            setTimeout(() => {
                isProcessing.current = false;
            }, 100);
        }

    };

    const handleDelete = (id) => {
        setTodoList(todoList.filter(item => item.id != id));
    };

    const onSearch = (searchText) => {
        setOptions(
            searchText ? projectKeywords.filter(item => item.value.includes(searchText)) : []
        );
    };

    const editorItems = [
        {key:'1', label:'좋았던 점', children:<div classname="editor-box">에디터가 들어갈 자리입니다.</div>},
        {key:'2', label:'개선 점', children:<div classname="editor-box">오늘의 반성을 적어보세요</div>},
        {key:'3', label:'깨달음', children:<div classname="editor-box">새로운 인사이트!</div>},
        {key:'4', label:'오늘의 목표', children:<div classname="editor-box">내일은 무엇을 할까요?</div>},
    ];

    return (
        <div style={{padding:'20px', background:'#f0f2f5', minHeight: 'calc(100vh-50px)'}}>
            <Row gutter={[16,16]}>
                <Col span={9} style={{display:'flex', flexDirection: 'column'}}>
                    <Card
                        title="2026-01-31 체크리스트"
                        // extra={<Button type="text" icon={<PlusOutlined />} />}
                        // style={{marginBottom:'16px', borderRadius:'12px'}}
                        style={{borderRaius:'12px', height:'100%'}}
                    >
                        <div style={{marginBottom:'15px'}}>
                            <AutoComplete style={{width: '100%', marginBottom: '20x'}}
                                          options={options}
                                          value={inputValue}
                                          onSearch={onSearch}
                                          //onSelect={(val) => handlePressEnter(val)}
                                          onSelect={handlePressEnter}
                                          onChange={setInputValue}
                                         // onSearch={(val) => setInputValue(val)}
                                         // onSelect={(val) => handlePressEnter(val)}
                                          placeholder="할일을 입력하고 Enter!(프로젝트 속성 자동완성)"
                            >
                                {/* <Input.Search
                                    enterButton={<PlusOutlined />}
                                    onSearch={handlePressEnter}
                                /> */}
                                <Input placeholder="할일을 입력하고 Enter!"
                                       value={inputValue}
                                       onKeyDown={(e) => {
                                        if(e.key === 'Enter') {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            handlePressEnter(inputValue);

                                            //setInputValue("");
                                            
                                        }
                                       }}
                                       suffix={<PlusOutlined onClick={() => handlePressEnter(inputValue)} />}
                                    />
                            </AutoComplete>
                            
                        </div>
                        <div style={{
                            maxHeight: '300px',
                            overflowY : 'auto',
                            display : 'flex',
                            flexDirection : 'column',
                            gap : '10px'
                        }}>
                            {todoList.length === 0 ? (
                                    <div style={{color : '#ccc', textAlign: 'center', marginTob : '20px'}}>
                                        등록된 할 일이 없습니다.
                                    </div>
                                ) : (
                                    todoList.map((item) => (
                                        <div key={item.id} style={{display:'flex', alignItems: 'center', gap : '8px'}}>
                                            <Checkbox checked={item.checked} />
                                            <Input variant="filled" value={item.text} readOnly style={{flex : 1}} />
                                            <Button
                                                type="text"
                                                danger
                                                icon={<DeleteOutlined />} 
                                                onClick={() => handleDelete(item.id)}
                                            />
                                        </div>
                                    ))
                                )} 
                        </div>
                        {/* <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
                            {[1,2,3].map(i => (
                                <div key={i} style={{display:'flex', alignItems: 'center', gap: '10px'}}>
                                    <Checkbox />
                                    <Input variant="filled" defaultValue={`오늘의 할일 ${i}`} />
                                </div>
                            ))}
                        </div> */}
                    </Card>
                    <Card size="small" 
                          style={{borderRadius: '12px', flex:1,display:'flex',flexDirection:'column'}}
                          borderStyle={{flex:1, display: 'flex', flexDirection:'column'}}
                          >
                        <div style={{flex:1}}>
                        <Calendar fullscreen={false} headerRender={()=> null} />
                        </div>
                    </Card>
                </Col>
                <Col span={15}>
                    <Card
                        style={{borderRadius:'12px',minHeight:'600px'}}
                        bodyStyle={{padding: '0px'}}
                    >
                        <Tabs
                            defaultActiveKey="1"
                            type="card"
                            items={editorItems}
                            style={{padding:'10px 20px 0'}}
                        />
                        <div style={{
                            padding:'20px',
                            height:'500px',
                            borderTop: '1px solid #f0f0f0',
                            backgroundColor: '#fff'
                        }}>
                            <div style={{
                                height: '100%',
                                border: '1px dashed #d9d9d9',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color:'#8c8c8c'
                            }}>
                                <h3>여기에 웹 에디터 라이브러리(Toast UI등)가 들어옵니다.</h3>
                            </div>
                        </div>
                        <div style={{textAlign: 'right', padding:'16px'}}>
                            <Button type="primary" size="large" icon={<saveOutlined />}>
                                저장하기
                            </Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ChecklistWriteContainer;