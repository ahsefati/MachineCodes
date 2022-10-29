import {Typography, Row, Col, Card, Drawer, Radio, Select, Alert, Input, Switch} from 'antd';
import React, {useEffect, useState } from 'react';

import { useCookies } from 'react-cookie';

// Color picker
import { SliderPicker, CirclePicker } from 'react-color';

const {Text, Title} = Typography
const {Option} = Select


const AlertItem = (params) => {
    // Cookies of this Item (Component)
    const [cookies, setCookie, removeCookie] = useCookies();

    let prefixForCookiesName = params.mcrow.pageId + "/" + params.mcrow.id + "/" + params.mccol.id

    
    const [alertItemCookies, setAlertItemCookies] = useState( {...cookies[prefixForCookiesName]}|| {
        'alertAlign':'left',
        'alertText': 'Title',
        'alertDescription': 'Description',
        'alertType': 'success',
        'alertWithIcon': true,
        'alertCollapsable': true,
    })

    useEffect(()=>{
        let cookieStr = JSON.stringify(alertItemCookies)
        setCookie(prefixForCookiesName, cookieStr)
    },[alertItemCookies])
    

    return (
        <>
            {params.createContentMode === "Edit Mode" &&
                <Alert
                    style={{textAlign:alertItemCookies["alertAlign"]==null?"left":alertItemCookies["alertAlign"]}}
                    message={alertItemCookies["alertText"]==null?"Title":alertItemCookies["alertText"]}
                    description={alertItemCookies["alertDescription"]==null?"Description":alertItemCookies["alertDescription"]}
                    type={alertItemCookies["alertType"]==null?"success":alertItemCookies["alertType"]}
                    showIcon={alertItemCookies["alertWithIcon"]==null?true:alertItemCookies["alertWithIcon"]}
                    closable={alertItemCookies["alertCollapsable"]==null?true:alertItemCookies["alertCollapsable"]}
                />
            }
            {params.createContentMode === "View Mode" &&
                <Alert
                    style={{textAlign:alertItemCookies["alertAlign"]==null?"left":alertItemCookies["alertAlign"]}}
                    message={alertItemCookies["alertText"]==null?"Title":alertItemCookies["alertText"]}
                    description={alertItemCookies["alertDescription"]==null?"Description":alertItemCookies["alertDescription"]}
                    type={alertItemCookies["alertType"]==null?"success":alertItemCookies["alertType"]}
                    showIcon={alertItemCookies["alertWithIcon"]==null?true:alertItemCookies["alertWithIcon"]}
                    closable={alertItemCookies["alertCollapsable"]==null?true:alertItemCookies["alertCollapsable"]}
                />
            }

            {/* Setting of this item */}
            <Drawer
                getContainer={()=>document.querySelector('[data-tag="mainContainer"]')}
                title={"Edit Panel"}
                height={'300px'}
                placement={'bottom'}
                width={600}
                onClose={params.closeSettingPanel}
                open={params.openSettingPanel}>
                    <Row gutter={[12,12]}>
                        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                            <Card
                                title="Title"
                                bordered={false}
                                size="small"
                                >
                                    <Input placeholder="Type Title..." onChange={(e)=>setAlertItemCookies({...alertItemCookies, "alertText":e.target.value})}/> 
                                    
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                            <Card
                                title="Description"
                                bordered={false}
                                size="small"
                                >
                                    <Input.TextArea placeholder="Type description..." onChange={(e)=>setAlertItemCookies({...alertItemCookies, "alertDescription":e.target.value})}/> 
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={6} xl={6}>
                            <Card
                                title="Description"
                                bordered={false}
                                size="small"
                                >
                                    <Col xs={0} sm={0} md={0} lg={0} xl={24}>
                                        <Radio.Group 
                                            size="large"
                                            onChange={(e)=>setAlertItemCookies({...alertItemCookies, "alertAlign":e.target.value})}>
                                                <Radio.Button value="left">Left</Radio.Button>
                                                <Radio.Button value="center">Center</Radio.Button>
                                                <Radio.Button value="right">Right</Radio.Button>
                                        </Radio.Group>
                                    </Col>
                                    <Col xs={0} sm={0} md={0} lg={24} xl={0}>
                                        <Radio.Group 
                                            size="small"
                                            onChange={(e)=>setAlertItemCookies({...alertItemCookies, "alertAlign":e.target.value})}>
                                                <Radio.Button value="left">Left</Radio.Button>
                                                <Radio.Button value="center">Center</Radio.Button>
                                                <Radio.Button value="right">Right</Radio.Button>
                                        </Radio.Group>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={0} xl={0}>
                                        <Radio.Group 
                                            size="small"
                                            onChange={(e)=>setAlertItemCookies({...alertItemCookies, "alertAlign":e.target.value})}>
                                                <Radio.Button value="left">Left</Radio.Button>
                                                <Radio.Button value="center">Center</Radio.Button>
                                                <Radio.Button value="right">Right</Radio.Button>
                                        </Radio.Group>
                                    </Col>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={3} xl={3}>
                            <Card
                                title="Alert Type"
                                bordered={false}
                                size="small"
                                style={{backgroundColor:'lightgray', borderRadius:'5px'}}
                                >
                                    <Select
                                        getPopupContainer={()=>document.querySelector('[data-tag="mainContainer"]')}
                                        style={{width:'100%'}}
                                        placement="topLeft"
                                        defaultValue={alertItemCookies["alertType"]==null?"success":alertItemCookies["alertType"]}
                                        onChange={(type)=>setAlertItemCookies({...alertItemCookies, "alertType":type})}
                                        >
                                            <Option value="success">Success</Option>
                                            <Option value="info">Info</Option>
                                            <Option value="warning">Warning</Option>
                                            <Option value="error">Error</Option>
                                    </Select>
                                    
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={3} xl={3}>
                            <Card
                                title="Icon?"
                                bordered={false}
                                size="small"
                                >
                                    <Switch
                                        checked={alertItemCookies["alertWithIcon"]}
                                        onChange={(value)=>setAlertItemCookies({...alertItemCookies, "alertWithIcon":value})}
                                    />
                            </Card>
                            <Card
                                title="Closable?"
                                bordered={false}
                                size="small"
                                >
                                    <Switch
                                        checked={alertItemCookies["alertCollapsable"]}
                                        onChange={(value)=>setAlertItemCookies({...alertItemCookies, "alertCollapsable":value})}
                                    />
                            </Card>
                        </Col>
                        
                    </Row>

            </Drawer>
        </>
    )
}


export default AlertItem;