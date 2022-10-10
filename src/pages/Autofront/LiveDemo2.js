import {Layout, Menu, Row, Col, Image, Typography, Divider, Card, Switch, Upload, Radio } from 'antd';
import ImgCrop from 'antd-img-crop';
import React from 'react';
import CreateContent from './CreateContent';
const { Header, Content, Footer, Sider } = Layout;
const {Text} = Typography


const LiveDemo2 = (params) => {

    return (
        <>
            {params.currentGeneralStep===1 &&
                <Row style={{marginBottom:'20px'}} gutter={10}>
                    <Divider orientation='center'>Configurations</Divider>
                    <Col>
                        <Card style={{minWidth:'225px'}} title='Header'>
                            <Switch
                                checked={params.headerOrientation === 'Left to Right'}
                                onChange={params.changeHeaderOrientation}
                                checkedChildren="Left to Right"
                                unCheckedChildren="Right to Left"
                            />
                            
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{minWidth:'225px'}} title='Menu'>
                            <Switch
                                checked={params.theme === 'dark'}
                                onChange={params.changeTheme}
                                checkedChildren="Dark"
                                unCheckedChildren="Light"
                            />
                            <Switch
                                style={{marginLeft:'10px'}}
                                checked={params.menuWithIcons}
                                onChange={params.changeMenuWithIcons}
                                checkedChildren={'With Icons'}
                                unCheckedChildren={'No Icons'}
                            />
                            
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{minWidth:'225px'}} title='Logo'>
                            <Switch
                                checked={params.logoTheme === 'dark'}
                                onChange={params.changeLogoTheme}
                                checkedChildren="Dark"
                                unCheckedChildren="Light"
                            />
                            <Switch
                                style={{marginLeft:'10px'}}
                                checked={params.logoType === "Text"}
                                onChange={params.changeLogoType}
                                checkedChildren="Text"
                                unCheckedChildren="Image"
                            />
                            {params.logoType==="Image" && 
                                <Row style={{marginTop:'20px'}}>
                                    <ImgCrop rotate aspect={2}>
                                        <Upload
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        listType="picture-card"
                                        fileList={params.fileList}
                                        onChange={params.onChange}
                                        onPreview={params.onPreview}
                                        >
                                        {params.fileList.length === 0 && '+ Upload'}
                                        </Upload>
                                    </ImgCrop>
                                </Row>
                            }
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{minWidth:'225px'}} title='Footer'>
                            <Switch
                                checked={params.footerTheme === 'dark'}
                                onChange={params.changeFooterTheme}
                                checkedChildren="Dark"
                                unCheckedChildren="Light"
                            />
                            <Radio.Group style={{marginLeft:'10px'}} onChange={params.handleFooterPositionChange} defaultValue={params.footerPosition} buttonStyle="solid">
                                <Radio.Button value="left">Left</Radio.Button>
                                <Radio.Button value="center">Center</Radio.Button>
                                <Radio.Button value="right">Right</Radio.Button>
                            </Radio.Group>
                            
                        </Card>
                    </Col>
                </Row>
            }

            
            <Layout
                style={{minHeight:'600px', border:'2px black solid'}}
            >   
                { params.headerOrientation==="Left to Right" &&
                
                    <Row style={{backgroundColor:(params.logoTheme==='dark'?'#031529':'white'),transition:'300ms'}}>
                        <Col sm={0} xs={0} md={23} xl={23} xlg={23}>
                            <Sider style={{backgroundColor:(params.logoTheme==='dark'?'#031529':'white'),transition:'300ms',}}>
                                {params.logoType==="Text" &&
                                    <div style={{textAlign:'center', marginTop:'15px', marginBottom:'15px',}}>
                                        <Text style={{color:(params.logoTheme==='dark'?'white':'#031529'), transition:'1000ms' ,fontWeight:'bold', fontSize:'2em'}} editable={{onChange: params.setLogo}}>{params.logo}</Text>
                                    </div>
                                }
                                {params.logoType==="Image" && params.fileList.length > 0 &&
                                    <Image
                                        src={params.fileList[0]["thumbUrl"]}
                                    />
                                    // Need to imrpove quality. 
                                    // Need to Back-end process.
                                }
                                <Menu theme={params.theme} defaultSelectedKeys={['1']} mode="inline" items={(params.menuWithIcons?params.itemsWithIcon:params.itemsWithoutIcon)} />
                            </Sider>
                        </Col>
                    </Row>            
                }
                
                <Layout>
                    <Col sm={24} md={0} xl={0} xlg={0}>
                        <Header  style={{backgroundColor:(params.logoTheme==='dark'?'#031529':'white'),transition:'300ms',}}>
                            <Row>
                                <Col xs={20} sm={8} md={8} xl={0} xlg={0} order={params.headerOrientation==="Left to Right"?1:2} style={{textAlign:(params.headerOrientation==="Left to Right"?'left':'right'),}}>
                                    {params.logoType==="Text" &&
                                        <Text style={{color:(params.logoTheme==='dark'?'white':'#031529'), transition:'1000ms' ,fontWeight:'bold', fontSize:'2em'}} editable={{onChange: params.setLogo}}>{params.logo}</Text>
                                    }
                                    {params.logoType==="Image" && params.fileList.length > 0 &&
                                    <Image
                                            width={'80%'}
                                            height={'60%'}
                                            src={params.fileList[0]["thumbUrl"]}
                                        />
                                        // Need to imrpove quality. 
                                        // Need to Back-end process.
                                    }

                                </Col>
                                <Col xs={4} sm={16} md={16} xl={0} xlg={0} order={params.headerOrientation==="Left to Right"?2:1}>
                                    <Menu
                                        theme={params.theme}
                                        mode="horizontal"
                                        defaultSelectedKeys={['2']}
                                        items={(params.menuWithIcons?params.itemsWithIcon:params.itemsWithoutIcon)}
                                        style={{justifyContent: (params.headerOrientation==="Left to Right"?'flex-end':'flex-start')}}
                                    />
                                </Col>
                            </Row>
                        </Header>
                    </Col>
                    <Content style={{
                        textAlign: 'center',
                        minHeight:'450px',
                        backgroundColor:'white'
                        }}>
                        <CreateContent currentGeneralStep={params.currentGeneralStep}/>
                    </Content>
                    <Footer
                        style={{
                        textAlign: params.footerPosition,
                        fontWeight:'bold',
                        backgroundColor:(params.footerTheme==="dark"?'#3E3E3E':'lightgray'),
                        transition:'all 300ms,'
                        }}
                        
                    >
                        <Text style={{color:(params.footerTheme==="dark"?'white':'black'),transition:'1000ms'}} editable={{onChange: params.setFooter}}>{params.footer}</Text>
                    </Footer>
                </Layout>

                { params.headerOrientation==="Right to Left" &&

                    <Row style={{backgroundColor:(params.logoTheme==='dark'?'#031529':'white'),transition:'300ms'}}>
                        <Col sm={0} xs={0} md={23} xl={23} xlg={23}>
                            <Sider style={{backgroundColor:(params.logoTheme==='dark'?'#031529':'white'),transition:'300ms',}}>
                                {params.logoType==="Text" &&
                                    <div style={{textAlign:'center', marginTop:'15px', marginBottom:'15px',}}>
                                        <Text style={{color:(params.logoTheme==='dark'?'white':'#031529'), transition:'1000ms' ,fontWeight:'bold', fontSize:'2em'}} editable={{onChange: params.setLogo}}>{params.logo}</Text>
                                    </div>
                                }
                                {params.logoType==="Image" && params.fileList.length > 0 &&
                                    <Image
                                        
                                        src={params.fileList[0]["thumbUrl"]}
                                    />
                                    // Need to imrpove quality. 
                                    // Need to Back-end process.
                                }
                                <Menu theme={params.theme} defaultSelectedKeys={['1']} mode="inline" items={(params.menuWithIcons?params.itemsWithIcon:params.itemsWithoutIcon)} />
                            </Sider>
                        </Col>
                    </Row>
                }
            </Layout>
            
        </>
    );
  };
  
  export default LiveDemo2;