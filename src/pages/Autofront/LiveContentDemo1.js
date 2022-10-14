import { Col, Layout, Menu, Typography, Row, Image } from 'antd';
import React from 'react';
import CreateContent from './CreateContent';
const { Header, Content, Footer } = Layout;
const {Text} = Typography

const LiveContentDemo1 = (params) => {
    const pageToShow = params.pages.map(page => {return(<CreateContent pages={params.pages} setPages={params.setPages} addPage={params.addPage} page={page} selectedPage={params.selectedPage} setSelectedPage={params.setSelectedPage} currentGeneralStep={params.currentGeneralStep}/>)})
    
    return (
        <>
            <Layout style={{background: '#fff', border:'2px solid black'}}>
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
                                theme={params.theme}
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                items={(params.menuWithIcons?params.itemsWithIconFinal:params.itemsWithoutIconFinal)}
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
                    {
                        // pageToShow[params.selectedPage - 1]
                        pageToShow.filter((page) => page.props.page.id == params.selectedPage)[0]
                    }
                    {
                        // pageToShow[1]
                    }
                        
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
        </>
    )
}


export default LiveContentDemo1;