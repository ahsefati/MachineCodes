import {Col, Row, Typography, Divider, Card, Tooltip, Skeleton } from 'antd';
import { EyeOutlined, HeartFilled, DownloadOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import '../../css/AutoFrontend.css';

const {Text} = Typography
const {Meta} = Card



const FreeTemplates = () => {
    const [isCardloading, setIsCardloading] = useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setIsCardloading(false)
        }, 1000);
    },[])
    return (
        <>
            
            <Row justify='space-around' align='middle' style={{margin:'1%'}}>
                <Text>Followings are completely free React/VueJS/Angular or just HTML templates. List will be updated daily!</Text>
            </Row>
            <Divider></Divider>
            
            <Row gutter={[0,16]} style={{marginBottom:'5%',}}>
                <Col style={{margin:'20px'}} xs={23} sm={23} md={11} lg={7} xl={5} xxl={5}>
                    <Card loading={isCardloading} className='featuresCard'
                        cover={
                            
                                isCardloading ? <div style={{textAlign:'center'}}><Skeleton.Image  active/></div> :
                                    <img
                                        alt="Material Dashboard - Free React Template"
                                        src="https://s3.amazonaws.com/creativetim_bucket/products/71/original/material-dashboard-react.jpg?1638950990"
                                    />
                            
                        }
                        actions={[
                        <Tooltip title="Online Demo"><EyeOutlined onClick={()=>window.location.href="https://demos.creative-tim.com/material-dashboard-react/#/dashboard"}/></Tooltip>,
                        <Tooltip title="Download"><DownloadOutlined /></Tooltip>,
                        <Text><HeartFilled style={{color:'red'}}/> {isCardloading ? <Skeleton.Input size='default' active /> :<>100</>}</Text>,
                        ]}
                    >
                            <Meta
                            
                            title="Material Dashboard"
                            description="React Free Dashboard. From Creative-Tim."
                            />
                        
                    </Card>
                </Col>
                <Col style={{margin:'20px'}} xs={23} sm={23} md={11} lg={7} xl={5} xxl={5}>
                    <Card loading={isCardloading} className='featuresCard'
                        cover={
                            isCardloading ? <div style={{textAlign:'center'}}><Skeleton.Image  active={isCardloading}/></div> :
                                            <img
                                                alt="Gaia Template - Free HTML Template"
                                                src="https://s3.amazonaws.com/creativetim_bucket/products/45/original/opt_gbt_thumbnail.jpg?1463139458"
                                            />
                        }
                        actions={[
                        <Tooltip title="Online Demo"><EyeOutlined onClick={()=>window.location.href="https://demos.creative-tim.com/gaia-bootstrap-template/freebie.html"}/></Tooltip>,
                        <Tooltip title="Download"><DownloadOutlined onClick={()=>window.location.href="https://www.creative-tim.com/product/gaia-bootstrap-template"}/></Tooltip>,
                        <Text><HeartFilled style={{color:'red'}}/> {isCardloading ? <Skeleton.Input size='default' active /> :<>83</>}</Text>,
                        ]}
                    >
                        <Meta
                        
                        title="Gaia HTML Template"
                        description="HTML Free Template. From Creative-Tim."
                        />
                    </Card>
                </Col>
                <Col style={{margin:'20px'}} xs={23} sm={23} md={11} lg={7} xl={5} xxl={5}>
                    <Card loading={isCardloading} className='featuresCard'
                        cover={
                            isCardloading ? <div style={{textAlign:'center'}}><Skeleton.Image  active={isCardloading}/></div> :
                                            <img
                                                alt="Landing Page - Free HTML Template"
                                                src="https://s3.amazonaws.com/creativetim_bucket/products/27/original/opt_alp_thumbnail.jpg?1431435598"
                                            />
                        }
                        actions={[
                        <Tooltip title="Online Demo"><EyeOutlined onClick={()=>window.location.href="https://demos.creative-tim.com/awesome-landing-page/index.html"}/></Tooltip>,
                        <Tooltip title="Download"><DownloadOutlined onClick={()=>window.location.href="https://www.creative-tim.com/product/awesome-landing-page"}/></Tooltip>,
                        <Text><HeartFilled style={{color:'red'}}/> {isCardloading ? <Skeleton.Input size='default' active /> :<>34</>}</Text>,
                        ]}
                    >
                        <Meta
                        
                        title="Landing Page"
                        description="HTML Free Template. From Creative-Tim."
                        />
                    </Card>
                </Col>
                <Col style={{margin:'20px'}} xs={23} sm={23} md={11} lg={7} xl={5} xxl={5}>
                    <Card loading={isCardloading} className='featuresCard'
                        cover={
                            isCardloading ? <div style={{textAlign:'center'}}><Skeleton.Image  active={isCardloading}/></div> :
                                            <img
                                                alt="NOW UI - Free Angular Kit"
                                                src="https://s3.amazonaws.com/creativetim_bucket/products/77/original/opt_nuk_angular_thumbnail.jpg?1551358195"
                                            />
                        }
                        actions={[
                        <Tooltip title="Online Demo"><EyeOutlined onClick={()=>window.location.href="https://demos.creative-tim.com/now-ui-kit-angular/"}/></Tooltip>,
                        <Tooltip title="Download"><DownloadOutlined onClick={()=>window.location.href="https://www.creative-tim.com/product/now-ui-kit-angular"}/></Tooltip>,
                        <Text><HeartFilled style={{color:'red'}}/> {isCardloading ? <Skeleton.Input size='default' active /> :<>12</>}</Text>,
                        ]}
                    >
                        <Meta
                        
                        title="NOW UI - Free Angular Kit"
                        description="Angular Free Kit. From Creative-Tim."
                        />
                    </Card>
                </Col>
                
                <Col style={{margin:'20px'}} xs={23} sm={23} md={11} lg={7} xl={5} xxl={5}>
                    <Card loading={isCardloading} className='featuresCard'
                        cover={
                            isCardloading ? <div style={{textAlign:'center'}}><Skeleton.Image  active={isCardloading}/></div> :
                                            <img
                                                alt="Argon Dashboard - Free VueJS Template"
                                                src="https://s3.amazonaws.com/creativetim_bucket/products/156/original/vue-argon-dashboard.jpg?1653536619"
                                            />
                        }
                        actions={[
                        <Tooltip title="Online Demo"><EyeOutlined onClick={()=>window.location.href="https://demos.creative-tim.com/vue-argon-dashboard/"}/></Tooltip>,
                        <Tooltip title="Download"><DownloadOutlined onClick={()=>window.location.href="https://www.creative-tim.com/product/vue-argon-dashboard"}/></Tooltip>,
                        <Text><HeartFilled style={{color:'red'}}/> {isCardloading ? <Skeleton.Input size='default' active /> :<>36</>}</Text>,
                        ]}
                    >
                        <Meta
                        
                        title="Material Dashboard"
                        description="React Free Dashboard. From Creative-Tim."
                        />
                    </Card>
                </Col>
                <Col style={{margin:'20px'}} xs={23} sm={23} md={11} lg={7} xl={5} xxl={5}>
                    <Card loading={isCardloading} className='featuresCard'
                        cover={
                            isCardloading ? <div style={{textAlign:'center'}}><Skeleton.Image  active={isCardloading}/></div> :
                                            <img
                                                alt="NOW UI - Free React Kit"
                                                src="https://s3.amazonaws.com/creativetim_bucket/products/170/original/opt_nuk_react_thumbnail.jpg?1563782899"
                                            />
                        }
                        actions={[
                        <Tooltip title="Online Demo"><EyeOutlined onClick={()=>window.location.href="https://demos.creative-tim.com/now-ui-kit-react/#/index"}/></Tooltip>,
                        <Tooltip title="Download"><DownloadOutlined onClick={()=>window.location.href="https://www.creative-tim.com/product/now-ui-kit-react"}/></Tooltip>,
                        <Text><HeartFilled style={{color:'red'}}/> {isCardloading ? <Skeleton.Input size='default' active /> :<>14</>}</Text>,
                        ]}
                    >
                        <Meta
                        
                        title="Material Dashboard"
                        description="React Free Dashboard. From Creative-Tim."
                        />
                    </Card>
                </Col>
            </Row>
        </>

    );
};
  
export default FreeTemplates;