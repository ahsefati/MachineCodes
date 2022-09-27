import {Col, Row, Typography, Divider, Card , Menu, Switch } from 'antd';
import {InfoCircleOutlined, HomeOutlined, SettingOutlined, UserOutlined, BarChartOutlined } from '@ant-design/icons';
import { useState, useEffect, useRef, forwardRef } from 'react';
import '../../css/AutoFrontend.css';
import CreateOption from './CreateOption';




const {Title, Text, Paragraph} = Typography
const {Meta} = Card






const MenuCustomization =  (params) => {
    
    const changeTheme = (value) => {
        params.setTheme(value ? 'dark' : 'light');
    };
    // Collapsed
    const [collapsedMobile,setCollapsedMobile] = useState(false)
    const changeCollapsedMobile = (value) => {
        setCollapsedMobile(value?true:false)
    }

    const [menuWithIcons,setMenuWithIcons] = useState(true)
    const changeMenuWithIcons = (value) => {
        setMenuWithIcons(value?true:false)
    }

    const [current, setCurrent] = useState('1');
    const desktopMenuRef = useRef(null)

    
    const onMenuClick = (e) => {
        setCurrent(e.key);
    };


    useEffect(()=>{
        if (menuWithIcons){
            params.setItems2([...params.itemsWithIcon])
        }else{
            params.setItems2([...params.itemsWithoutIcon])
        }
    },[params.itemsWithIcon, params.itemsWithoutIcon])

    return (
        <>      
                <Row>
                    <Divider orientation='left'>Configurations</Divider>
                    <Col>
                        <Text>Theme: </Text>
                        <Switch
                            checked={params.theme === 'dark'}
                            onChange={changeTheme}
                            checkedChildren="Dark"
                            unCheckedChildren="Light"
                        />
                        <br/>
                        <Text> Collapse: </Text>
                        <Switch
                            checked={collapsedMobile}
                            onChange={changeCollapsedMobile}
                            checkedChildren={false}
                            unCheckedChildren={true}
                        />
                        <br/>
                        <Text> With Icons: </Text>
                        <Switch
                            checked={menuWithIcons}
                            onChange={changeMenuWithIcons}
                            checkedChildren={false}
                            unCheckedChildren={true}
                        />
                        <br/>
                        <Text style={{fontWeight:'bold', color:'red'}}>Want more options/configs? Contact our team.</Text>
                    </Col>
                </Row>

                
                <Row style={{marginTop:'25px'}}><Divider orientation='left'>Desktop Version:</Divider>  </Row>
                <Menu theme={params.theme} ref={desktopMenuRef} onClick={onMenuClick} selectedKeys={[current]} mode="horizontal" items={params.items2} />   
                <Divider/>
                <Row style={{marginTop:'25px'}}><Divider orientation='left'>Mobile Version:</Divider>  </Row>
                <Row>
                    <Col span={6}>
                        <Menu theme={params.theme} inlineCollapsed={collapsedMobile} onClick={onMenuClick} selectedKeys={[current]} mode="inline" items={params.items2} />
                    </Col>
                </Row>
                {/* <Button onClick={()=>newMenu()}>+</Button> */}
        </>
    );
};
  
export default MenuCustomization;