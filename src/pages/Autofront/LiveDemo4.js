import { Col, Layout, Menu, Typography, Row, Divider, Switch, Card, Upload, Image, Radio } from 'antd';
import ImgCrop from 'antd-img-crop';
import React from 'react';
import CreateContent from './CreateContent';
const { Header, Content } = Layout;
const {Text} = Typography

const LiveDemo4 = (params) => {

    return (
        <>
            {params.currentGeneralStep===1 &&
                <Row style={{marginBottom:'20px'}} gutter={10}>
                    <Divider orientation='center'>Configurations</Divider>
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
                            <Radio.Group style={{marginLeft:'10px'}} onChange={params.handleMenuPositionChange} defaultValue={params.menuPosition} buttonStyle="solid">
                                <Radio.Button value="left">Left</Radio.Button>
                                <Radio.Button value="center">Center</Radio.Button>
                                <Radio.Button value="right">Right</Radio.Button>
                            </Radio.Group>
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
                            <Radio.Group style={{marginLeft:'10px'}} onChange={params.handleLogoPositionChange} defaultValue={params.logoPosition} buttonStyle="solid">
                                <Radio.Button value="left">Left</Radio.Button>
                                <Radio.Button value="center">Center</Radio.Button>
                                <Radio.Button value="right">Right</Radio.Button>
                            </Radio.Group>
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
                
                </Row>
            }
            <Layout style={{background: '#fff', border:'2px solid black',}}>
                <Header style={{backgroundColor:(params.logoTheme==='dark'?'#031529':'white'),transition:'300ms',}}>
                    <Row>
                        <Col xs={24} sm={24} md={24} xl={24} xlg={24} style={{textAlign:params.logoPosition}}>
                            {params.logoType==="Text" &&
                                <Text style={{color:(params.logoTheme==='dark'?'white':'#031529'), transition:'1000ms' ,fontWeight:'bold', fontSize:'2em'}} editable={{onChange: params.setLogo}}>{params.logo}</Text>
                            }
                            {params.logoType==="Image" && params.fileList.length > 0 &&
                               <Image
                                    width={'12%'}
                                    style={{minWidth:'100px', minHeight:'60px' }}
                                    height={'65%'}
                                    src={params.fileList[0]["thumbUrl"]}
                                />
                                // Need to imrpove quality. 
                                // Need to Back-end process.
                            }

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
                
                <Row>
                    <Col style={{width:'100%'}} xs={0} sm={0} md={24}>
                        <Menu
                            theme={params.theme}
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            items={(params.menuWithIcons?params.itemsWithIcon:params.itemsWithoutIcon)}
                            style={{justifyContent: params.menuPosition}}
                        />
                    </Col>

                    <Col style={{width:'100%'}} xs={24} sm={24} md={0}>
                        <Menu
                            theme={params.theme}
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            items={params.itemsWithJustIcon}
                            style={{justifyContent: params.menuPosition}}
                        />
                    </Col>
                </Row>
                
            </Layout>
        </>
    )
}


export default LiveDemo4;