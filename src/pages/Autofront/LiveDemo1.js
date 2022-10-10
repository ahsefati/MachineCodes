import { Col, Layout, Menu, Typography, Row, Divider, Switch, Card, Upload, Image, Radio } from 'antd';
import ImgCrop from 'antd-img-crop';
import React from 'react';
import CreateContent from './CreateContent';
const { Header, Content, Footer } = Layout;
const {Text} = Typography

const LiveDemo1 = (params) => {

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

            <Layout style={{background: '#fff', border:'2px solid black'}}>
                <Header style={{backgroundColor:(params.logoTheme==='dark'?'#031529':'white'),transition:'300ms',}}>
                    <Row>
                        <Col xs={20} sm={15} md={12} xl={4} xlg={4} order={params.headerOrientation==="Left to Right"?1:2} style={{textAlign:(params.headerOrientation==="Left to Right"?'left':'right'),}}>
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
                        <Col xs={4} sm={9} md={12} xl={20} xlg={20} order={params.headerOrientation==="Left to Right"?2:1}>
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
        </>
    )
}


export default LiveDemo1;