import { Layout, Menu, Image, Typography, Row, Col } from 'antd';
import React from 'react';
import CreateContent from './CreateContent';
const { Header, Content, Footer, Sider } = Layout;
const {Text} = Typography

const LiveContentDemo3 = (params) => {


    return (
        <>
            <Layout style={{border:'2px solid black'}}>
                <Header style={{backgroundColor:(params.logoTheme==='dark'?'#031529':'white'),transition:'300ms',}}>
                    <Row>
                        <Col xs={20} sm={15} md={12} xl={4} xlg={4} order={params.headerOrientation==="Left to Right"?1:2} style={{textAlign:(params.headerOrientation==="Left to Right"?'left':'right'),}}>
                            {params.logoType==="Text" &&
                                <Text style={{color:(params.logoTheme==='dark'?'white':'#031529'), transition:'1000ms' ,fontWeight:'bold', fontSize:'2em'}}>{params.logo}</Text>
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
                        <Col xs={4} sm={9} md={12} xl={20} xlg={20} order={params.headerOrientation==="Left to Right"?2:1}>
                            <Menu
                                theme={params.topMenuTheme}
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                items={params.items1_3}
                                style={{justifyContent: (params.headerOrientation==="Left to Right"?'flex-end':'flex-start')}}
                            />
                        </Col>
                    </Row>
                </Header>

                <Layout> 
                    { params.sideMenuOrientation==="Left" &&
                        <Row style={{backgroundColor:(params.theme==='dark'?'#031529':'white'),transition:'300ms',}}>
                            <Col xs={0} sm={0} md={24}>
                                <Sider>
                                    <Menu
                                    theme={params.theme}
                                    mode="inline"
                                    style={{
                                        height: '100%',
                                        borderRight: 0,
                                    }}
                                    items={(params.menuWithIcons?params.itemsWithIconFinal:params.itemsWithoutIconFinal)}
                                    />
                                </Sider>
                            </Col>
                        </Row>
                    }

                    <Layout>
                        <Row>
                            <Col xs={24} sm={24} md={0}>
                                <Menu
                                    theme={params.theme}
                                    mode="horizontal"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{
                                        borderRight: 0,
                                    }}
                                    items={(params.menuWithIcons?params.itemsWithIconFinal:params.itemsWithoutIconFinal)}
                                />
                            </Col>
                        </Row>

                        <Content style={{
                            textAlign: 'center',
                            minHeight:'500px',
                            backgroundColor:'white'
                            }}>
                            <CreateContent currentGeneralStep={params.currentGeneralStep}/>
                        </Content>

                    </Layout>

                    { params.sideMenuOrientation==="Right" &&
                        <Row style={{backgroundColor:(params.theme==='dark'?'#031529':'white'),transition:'300ms',}}>
                            <Col xs={0} sm={0} md={24}>
                                <Sider>
                                    <Menu
                                    theme={params.theme}
                                    mode="inline"
                                    style={{
                                        height: '100%',
                                        borderRight: 0,
                                    }}
                                    items={(params.menuWithIcons?params.itemsWithIconFinal:params.itemsWithoutIconFinal)}
                                    />
                                </Sider>
                            </Col>
                        </Row>
                    }

                </Layout>
                <Footer
                    style={{
                    textAlign: params.footerPosition,
                    fontWeight:'bold',
                    backgroundColor:(params.footerTheme==="dark"?'#3E3E3E':'lightgray'),
                    transition:'all 300ms,'
                    }}
                    
                >
                    <Text style={{color:(params.footerTheme==="dark"?'white':'black'),transition:'1000ms'}}>{params.footer}</Text>
                </Footer>
            </Layout>
        </>
    )
};

export default LiveContentDemo3;