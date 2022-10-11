import { Col, Layout, Menu, Typography, Row, Divider, Switch, Card, Upload, Image, Radio, Button, Affix, Tooltip, Popover } from 'antd';
import {PlusCircleOutlined, DeleteOutlined} from '@ant-design/icons';


import React from 'react';

import MCRow from './MCRow';
import { useEffect } from 'react';
import { useState } from 'react';

const { Header, Content } = Layout;
const {Text} = Typography


const CreateContent = (params) => {
    
    
    const [mcrows, setMcrows] = useState([
        
    ])

    const [rowCounter, setRowCounter] = useState(0)

    const addRow = () => {
        const newRow = {id:rowCounter + 1,}
        setMcrows([...mcrows,newRow])
        setRowCounter(rowCounter+1)
    }

    

    const [createContentMode, setCreateContentMode] = useState("Edit Mode")
    const handleCreateContentModeChange = (value) => {
        setCreateContentMode(value?"Edit Mode":"View Mode")
    }

    return (
        <div>
            {params.currentGeneralStep===1 &&
                <Row justify='center' style={{fontSize:'2em', textAlign:'center', marginTop:'20%'}}>
                    <Text>Page Content Will be here in the next step!</Text>
                </Row>
            }
            {params.currentGeneralStep===2 &&
                <div>
                    <Content style={{minHeight:'450px', overflowY:'auto', maxHeight:'450px'}}>
                        {   
                            mcrows.map(mcrow =>
                                <MCRow createContentMode={createContentMode} key={mcrow.id} mcrows={mcrows} setMcrows={setMcrows} mcrow={mcrow}/>      
                            ) 
                        }
                        
                    </Content>
                    <Affix offsetBottom={5} style={{textAlign:'center', margin:'10px'}}>
                        <Row justify='center'>
                            <Row align='middle' justify='space-around' style={{width:'150px', padding:'5px', backgroundColor:'lightgray', borderRadius:'10px'}}>
                                <Tooltip placement='top' title="Add a new row">
                                    <Button onClick={()=>addRow()} type="primary" shape="circle" icon={<PlusCircleOutlined />}/>
                                </Tooltip>
                                <Switch
                                    checked={createContentMode==="Edit Mode"}
                                    onChange={handleCreateContentModeChange}
                                    checkedChildren="Edit Mode"
                                    unCheckedChildren="View Mode"
                                />
                            </Row>
                        </Row>
                    </Affix>
                </div>
            }
        </div>
    )
}


export default CreateContent;