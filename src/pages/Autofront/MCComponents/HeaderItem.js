import {Typography, Row, Col, Card, Drawer, Slider, Select, Divider} from 'antd';
import React, {useEffect, useState } from 'react';

import { useCookies } from 'react-cookie';

// Color picker
import { SliderPicker, CirclePicker } from 'react-color';

const {Text, Title} = Typography
const {Option} = Select


const HeaderItem = (params) => {
    // Cookies of this Item (Component)
    const [cookies, setCookie, removeCookie] = useCookies();

    let prefixForCookiesName = params.mcrow.pageId + "/" + params.mcrow.id + "/" + params.mccol.id

    
    const [headerItemCookies, setHeaderItemCookies] = useState( {...cookies[prefixForCookiesName]}|| {
        'headerText': 'Change!',
        'headerSize': '12px',
        'headerColor': 'black',
        'headerBackgroundColor': 'inherit',
        'headerBorder': '0px',
        'headerBorderRadius': '0px',
        'headerBorderColor': 'black',
        'headerFont':'Times New Roman (serif)'
    })

    const headerItemStyles = {
        fontSize: headerItemCookies["headerSize"]==null?"12px":headerItemCookies["headerSize"],
        color: headerItemCookies["headerColor"]==null?"black":headerItemCookies["headerColor"],
        backgroundColor: headerItemCookies["headerBackgroundColor"]==null?"inherit":headerItemCookies["headerBackgroundColor"],
        border: headerItemCookies["headerBorderWidth"]==null?"0px":headerItemCookies["headerBorderWidth"] + " solid ",
        borderRadius: headerItemCookies["headerBorderRadius"]==null?"0px":headerItemCookies["headerBorderRadius"],
        borderColor: headerItemCookies["headerBorderColor"]==null?"black":headerItemCookies["headerBorderColor"],
        fontFamily: headerItemCookies["headerFont"]==null?"serif":headerItemCookies["headerFont"]
    }

    useEffect(()=>{
        let cookieStr = JSON.stringify(headerItemCookies)
        setCookie(prefixForCookiesName, cookieStr)
    },[headerItemCookies])
    

    return (
        <>
            {params.createContentMode === "Edit Mode" &&
                <Text style={headerItemStyles} editable={{onChange: (value) => setHeaderItemCookies({...headerItemCookies, "headerText":value})}}>{headerItemCookies["headerText"]==null?"change!":headerItemCookies["headerText"]}</Text>
            }
            {params.createContentMode === "View Mode" &&
                <Text style={headerItemStyles}>{headerItemCookies["headerText"]==null?"change!":headerItemCookies["headerText"]}</Text>
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
                        <Col sm={12} md={6} lg={4} xl={4}>
                            <Card
                                title="Font"
                                bordered={false}
                                size="small"
                                >
                                    <Slider
                                        min={1}
                                        max={72}
                                        onChange={(value)=>setHeaderItemCookies({...headerItemCookies, "headerSize":value+"px"})}
                                    />
                                   
                                    <Select
                                        getPopupContainer={()=>document.querySelector('[data-tag="mainContainer"]')}
                                        style={{width:'100%'}}
                                        placement="topLeft"
                                        defaultValue={headerItemCookies["headerFont"]==null?"serif":headerItemCookies["headerFont"]}
                                        onChange={(fonttype)=>setHeaderItemCookies({...headerItemCookies, "headerFont":fonttype})}
                                        >
                                            <Option value="serif">Serif</Option>
                                            <Option value="cursive">Cursive</Option>
                                            <Option value="fantasy">Fantasy</Option>
                                            <Option value="monospace">Monospace</Option>
                                    </Select>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} xl={4}>
                            <Card
                                title="Text Color"
                                bordered={false}
                                size="small"
                                style={{backgroundColor:'lightgray', borderRadius:'5px'}}
                                >
                                    
                                    <SliderPicker color={headerItemCookies["headerColor"]} onChange={(color)=>setHeaderItemCookies({...headerItemCookies, "headerColor":color.hex})} />
                                    <br/>
                                    <Row>
                                        <CirclePicker colors={["white", "gray", "black",]} onChange={(color)=>setHeaderItemCookies({...headerItemCookies, "headerColor":color.hex})}/>
                                    </Row>
                                    
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} xl={4}>
                            <Card
                                title="Text Back-Color"
                                bordered={false}
                                size="small"
                                style={{backgroundColor:'lightgray', borderRadius:'5px'}}
                                >
                                    <SliderPicker color={headerItemCookies["headerBackgroundColor"]} onChange={(color)=>setHeaderItemCookies({...headerItemCookies, "headerBackgroundColor":color.hex})} />
                                    <br/>
                                    <Row>
                                        <CirclePicker colors={["white", "gray", "black",]} onChange={(color)=>setHeaderItemCookies({...headerItemCookies, "headerBackgroundColor":color.hex})}/>
                                    </Row>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} xl={4}>
                            <Card
                                title="Border Width"
                                bordered={false}
                                size="small"
                                >
                                    <Slider
                                        min={0}
                                        max={10}
                                        onChange={(value)=>setHeaderItemCookies({...headerItemCookies, "headerBorderWidth":value+"px"})}
                                    />
                                    <Text>{headerItemCookies["headerBorderWidth"]}</Text>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} xl={4}>
                            <Card
                                title="Border Color"
                                bordered={false}
                                size="small"
                                style={{backgroundColor:'lightgray', borderRadius:'5px'}}
                                >
                                    
                                    <SliderPicker color={headerItemCookies["headerBorderColor"]} onChange={(color)=>setHeaderItemCookies({...headerItemCookies, "headerBorderColor":color.hex})} />
                                    <br/>
                                    <Row>
                                        <CirclePicker colors={["white", "gray", "black"]} onChange={(color)=>setHeaderItemCookies({...headerItemCookies, "headerBorderColor":color.hex})}/>
                                    </Row>
                                    
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} xl={4}>
                            <Card
                                title="Border Radius"
                                bordered={false}
                                size="small"
                                >
                                    <Slider
                                        min={0}
                                        max={50}
                                        onChange={(value)=>setHeaderItemCookies({...headerItemCookies, "headerBorderRadius":value+"px"})}
                                    />
                                    <Text>{headerItemCookies["headerBorderRadius"]}</Text>
                            </Card>
                        </Col>
                        <Text style={{fontFamily:''}}></Text>
                    </Row>

            </Drawer>
        </>
    )
}


export default HeaderItem;