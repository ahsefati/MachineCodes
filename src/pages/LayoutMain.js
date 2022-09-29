import { Outlet, Link } from "react-router-dom";
import {Col, Layout, Menu, Row, Typography, Affix } from 'antd';
import '../css/Layout_.css';

const { Header, Content, Footer } = Layout;
const {Text} = Typography;



const LayoutMain = () => {

  return (
    <>
      <Layout className="layout" style={{backgroundColor:"white"}}>
        <Affix offsetTop={0}>
          <Header className="header">
              <Row align="middle">
                <Col xs={22} sm={20} md={12} lg={12} xl={12} xxl={14} order={1}>
                    <Text style={{color:'white', fontSize:'2em'}}>MachineCodes!</Text>               
                </Col>
                <Col xs={2} sm={20} md={12} lg={12} xl={12} xxl={10} order={2}>
                  <Menu
                    
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={window.location.href.split("/").pop()?window.location.href.split("/").pop():"Home"}
                    items={[{key:"Home", label:(<Link style={{fontSize:'16px'}} to={'/'}>Home</Link>)},{key:"autofront",label:<Link style={{fontSize:'16px'}} to={'/autofront'}>Front-End</Link>},{key:"autoback",label:<Link style={{fontSize:'16px'}} to={'/autoback'}>Back-End</Link>},{key:"automl",label:<Link style={{fontSize:'16px'}} to={'/automl'}>Machine Learning</Link>},{key:"autoda",label:<Link style={{fontSize:'16px'}} to={'/autoda'}>Data Analysis</Link>},{key:"automobile",label:<Link style={{fontSize:'16px'}} to={'/automobile'}>Mobile Dev</Link>}]}
                  
                  />
                </Col>
              </Row>
          </Header>
        </Affix>
        <Content>
          <Outlet/>
        </Content>
        
        <Footer>
          <Text>© 2022 MachineCodes, Canada. All rights reserved.</Text>
        </Footer>
        
      </Layout>

    </>
  )
};

export default LayoutMain;