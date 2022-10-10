import {Layout, Menu, Row, Col, Image, Typography} from 'antd';
import React from 'react';
import CreateContent from './CreateContent';
const { Header, Content, Footer, Sider } = Layout;
const {Text} = Typography


const LiveContentDemo2 = (params) => {

    return (
        <>
            
            <Layout
                style={{minHeight:'600px', border:'2px black solid'}}
            >   
                { params.headerOrientation==="Left to Right" &&
                
                    <Row style={{backgroundColor:(params.logoTheme==='dark'?'#031529':'white'),transition:'300ms'}}>
                        <Col sm={0} xs={0} md={23} xl={23} xlg={23}>
                            <Sider style={{backgroundColor:(params.logoTheme==='dark'?'#031529':'white'),transition:'300ms',}}>
                                {params.logoType==="Text" &&
                                    <div style={{textAlign:'center', marginTop:'15px', marginBottom:'15px',}}>
                                        <Text style={{color:(params.logoTheme==='dark'?'white':'#031529'), transition:'1000ms' ,fontWeight:'bold', fontSize:'2em'}}>{params.logo}</Text>
                                    </div>
                                }
                                {params.logoType==="Image" && params.fileList.length > 0 &&
                                    <Image
                                        src={params.fileList[0]["thumbUrl"]}
                                    />
                                    // Need to imrpove quality. 
                                    // Need to Back-end process.
                                }
                                <Menu theme={params.theme} defaultSelectedKeys={['1']} mode="inline" items={(params.menuWithIcons?params.itemsWithIconFinal:params.itemsWithoutIconFinal)} />
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
                                        <Text style={{color:(params.logoTheme==='dark'?'white':'#031529'), transition:'1000ms' ,fontWeight:'bold', fontSize:'2em'}} >{params.logo}</Text>
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
                                        items={(params.menuWithIcons?params.itemsWithIconFinal:params.itemsWithoutIconFinal)}
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
                        <Text style={{color:(params.footerTheme==="dark"?'white':'black'),transition:'1000ms'}}>{params.footer}</Text>
                    </Footer>
                </Layout>

                { params.headerOrientation==="Right to Left" &&

                    <Row style={{backgroundColor:(params.logoTheme==='dark'?'#031529':'white'),transition:'300ms'}}>
                        <Col sm={0} xs={0} md={23} xl={23} xlg={23}>
                            <Sider style={{backgroundColor:(params.logoTheme==='dark'?'#031529':'white'),transition:'300ms',}}>
                                {params.logoType==="Text" &&
                                    <div style={{textAlign:'center', marginTop:'15px', marginBottom:'15px',}}>
                                        <Text style={{color:(params.logoTheme==='dark'?'white':'#031529'), transition:'1000ms' ,fontWeight:'bold', fontSize:'2em'}}>{params.logo}</Text>
                                    </div>
                                }
                                {params.logoType==="Image" && params.fileList.length > 0 &&
                                    <Image
                                        
                                        src={params.fileList[0]["thumbUrl"]}
                                    />
                                    // Need to imrpove quality. 
                                    // Need to Back-end process.
                                }
                                <Menu theme={params.theme} defaultSelectedKeys={['1']} mode="inline" items={(params.menuWithIcons?params.itemsWithIconFinal:params.itemsWithoutIconFinal)} />
                            </Sider>
                        </Col>
                    </Row>
                }
            </Layout>
            
        </>
    );
  };
  
  export default LiveContentDemo2;