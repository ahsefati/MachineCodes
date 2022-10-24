import { Col, Layout, Menu, Typography, Row, Image } from 'antd';
import React from 'react';
import CreateContent from './CreateContent';
const { Header, Content } = Layout;
const {Text} = Typography

const LiveContentDemo4 = (params) => {
    const pageToShow = params.pages.map(page => {return(<CreateContent pages={params.pages} setPages={params.setPages} addPage={params.addPage} page={page} selectedPage={params.selectedPage} setSelectedPage={params.setSelectedPage} currentGeneralStep={params.currentGeneralStep}/>)})

    return (
        <>
            <Layout style={{background: '#fff', border:'2px solid black',}}>
                <Header style={{backgroundColor:(params.logoTheme==='dark'?'#031529':'white'),transition:'300ms',}}>
                    <Row>
                        <Col xs={24} sm={24} md={24} xl={24} xlg={24} style={{textAlign:params.logoPosition}}>
                            {params.logoType==="Text" &&
                                <Text style={{color:(params.logoTheme==='dark'?'white':'#031529'), transition:'1000ms' ,fontWeight:'bold', fontSize:'2em'}}>{params.logo}</Text>
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
                    {
                        // pageToShow[params.selectedPage - 1]
                        pageToShow.filter((page) => page.props.page.id == params.selectedPage)[0]
                    }
                    {
                        // pageToShow[1]
                    }
                                
                </Content>
                
                <Row>
                    <Col style={{width:'100%'}} xs={0} sm={0} md={24}>
                        <Menu
                            theme={params.theme}
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            items={(params.menuWithIcons?params.itemsWithIconFinal:params.itemsWithoutIconFinal)}
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


export default LiveContentDemo4;