import { Breadcrumb, Layout, Menu, Image, Typography, Row, Col, Divider, Switch, Card, Radio, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

import React, {useEffect, useState} from 'react';
const { Header, Content, Footer, Sider } = Layout;
const {Text} = Typography

const items1 = [
    {
        label:'Contact Us',
        key: 'contact'
    },
    {
        label:'Help',
        key:'help'
    },
    {
        label:'Login/Signup',
        key:'login'
    }

]


const LiveDemo3 = (params) => {
    // Configs for Header LTR/RTL
    const [headerOrientation , setHeaderOrientation] = useState("Left to Right")
    const changeHeaderOrientation = (value) => {
        setHeaderOrientation(value ? "Left to Right" : "Right to Left");
    }; // ToDO: Sticky header or not!

    // Configs for Logo Customization
    const [logo, setLogo] = useState('Logo');
    const [logoTheme, setLogoTheme] = useState('dark')
    const changeLogoTheme = (value) => {
        setLogoTheme(value ? 'dark' : 'light');
    };
    const [logoType, setLogoType] = useState('Text')
    const changeLogoType = (value) => {
        setLogoType(value ? 'Text' : 'Image');
    };
    // Config for Logo Type of Image
    const [fileList, setFileList] = useState([]);
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        console.log("New Image Uploaded!")
    };
    const onPreview = async (file) => {
        let src = file.url;

        if (!src) {
            console.log("SRC of IMAGE: ")
            src = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);

            reader.onload = () => resolve(reader.result);
            });
        }

        const image = new Image();
        image.src = src;
        console.log("SRC of IMAGE: ")
        console.log(src)
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };


    // Configs for Side Menu Customization
    const changeTheme = (value) => {
        params.setTheme(value ? 'dark' : 'light');
    };
    const [menuWithIcons,setMenuWithIcons] = useState(true)
    const changeMenuWithIcons = (value) => {
        setMenuWithIcons(value?true:false)
    }
    useEffect(()=>{
        if (menuWithIcons){
            params.setItems2([...params.itemsWithIcon])
        }else{
            params.setItems2([...params.itemsWithoutIcon])
        }
    },[params.itemsWithIcon, params.itemsWithoutIcon])
    const [sideMenuOrientation , setSideMenuOrientation] = useState("Left")
    const changeSideMenuOrientation = (value) => {
        setSideMenuOrientation(value ? "Left" : "Right");
    };


    // Configs for Top Menu Configuration
    const [topMenuTheme, setTopMenuTheme] = useState("dark")
    const changeTopMenuTheme = (value) => {
        setTopMenuTheme(value ? 'dark' : 'light');
    };


    // Configs for Footer Customization
    const [footer, setFooter] = useState('Footer');
    const [footerPosition, setFooterPosition] = useState("center")
    const [footerTheme, setFooterTheme] = useState('dark')
    const changeFooterTheme = (value) => {
        setFooterTheme(value ? 'dark' : 'light');
    };
    const handleFooterPositionChange = (e) => {
        console.log(footerPosition)
        setFooterPosition(e.target.value)
    }

    return (
        <>
            <Row style={{marginBottom:'20px'}} gutter={10}>
                <Divider orientation='center'>Configurations</Divider>
                <Col>
                    <Card style={{minWidth:'225px'}} title='Header'>
                        <Switch
                            checked={headerOrientation === 'Left to Right'}
                            onChange={changeHeaderOrientation}
                            checkedChildren="Left to Right"
                            unCheckedChildren="Right to Left"
                        />
                        
                    </Card>
                </Col>
                <Col>
                    <Card style={{minWidth:'290px'}} title='Side Menu'>
                        <Switch
                            checked={params.theme === 'dark'}
                            onChange={changeTheme}
                            checkedChildren="Dark"
                            unCheckedChildren="Light"
                        />
                        <Switch
                            style={{marginLeft:'10px'}}
                            checked={menuWithIcons}
                            onChange={changeMenuWithIcons}
                            checkedChildren={'With Icons'}
                            unCheckedChildren={'No Icons'}
                        />
                        <Switch
                            style={{marginLeft:'10px'}}
                            checked={sideMenuOrientation === 'Left'}
                            onChange={changeSideMenuOrientation}
                            checkedChildren="Left"
                            unCheckedChildren="Right"
                        />
                        
                    </Card>
                </Col>
                <Col>
                    <Card style={{minWidth:'225px'}} title='Top Menu'>
                        <Switch
                            checked={topMenuTheme === 'dark'}
                            onChange={changeTopMenuTheme}
                            checkedChildren="Dark"
                            unCheckedChildren="Light"
                        />
                    </Card>
                </Col>
                <Col>
                    <Card style={{minWidth:'225px'}} title='Logo'>
                        <Switch
                            checked={logoTheme === 'dark'}
                            onChange={changeLogoTheme}
                            checkedChildren="Dark"
                            unCheckedChildren="Light"
                        />
                        <Switch
                            style={{marginLeft:'10px'}}
                            checked={logoType === "Text"}
                            onChange={changeLogoType}
                            checkedChildren="Text"
                            unCheckedChildren="Image"
                        />
                        {logoType=="Image" && 
                            <Row style={{marginTop:'20px'}}>
                                <ImgCrop rotate aspect={2}>
                                    <Upload
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onChange={onChange}
                                    onPreview={onPreview}
                                    >
                                    {fileList.length == 0 && '+ Upload'}
                                    </Upload>
                                </ImgCrop>
                            </Row>
                        }
                    </Card>
                </Col>
                <Col>
                    <Card style={{minWidth:'225px'}} title='Footer'>
                        <Switch
                            checked={footerTheme === 'dark'}
                            onChange={changeFooterTheme}
                            checkedChildren="Dark"
                            unCheckedChildren="Light"
                        />
                        <Radio.Group style={{marginLeft:'10px'}} onChange={handleFooterPositionChange} defaultValue="center" buttonStyle="solid">
                            <Radio.Button value="left">Left</Radio.Button>
                            <Radio.Button value="center">Center</Radio.Button>
                            <Radio.Button value="right">Right</Radio.Button>
                        </Radio.Group>
                        
                    </Card>
                </Col>
            </Row>


            <Layout style={{border:'2px solid black'}}>
                <Header style={{backgroundColor:(logoTheme=='dark'?'#031529':'white'),transition:'300ms',}}>
                    <Row>
                        <Col xs={20} sm={15} md={12} xl={4} xlg={4} order={headerOrientation=="Left to Right"?1:2} style={{textAlign:(headerOrientation=="Left to Right"?'left':'right'),}}>
                            {logoType=="Text" &&
                                <Text style={{color:(logoTheme=='dark'?'white':'#031529'), transition:'1000ms' ,fontWeight:'bold', fontSize:'2em'}} editable={{onChange: setLogo}}>{logo}</Text>
                            }
                            {logoType=="Image" && fileList.length > 0 &&
                            <Image
                                    width={'80%'}
                                    height={'60%'}
                                    src={fileList[0]["thumbUrl"]}
                                />
                                // Need to imrpove quality. 
                                // Need to Back-end process.
                            }

                        </Col>
                        <Col xs={4} sm={9} md={12} xl={20} xlg={20} order={headerOrientation=="Left to Right"?2:1}>
                            <Menu
                                theme={topMenuTheme}
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                items={items1}
                                style={{justifyContent: (headerOrientation=="Left to Right"?'flex-end':'flex-start')}}
                            />
                        </Col>
                    </Row>
                </Header>

                <Layout> 
                    { sideMenuOrientation=="Left" &&
                        <Row style={{backgroundColor:(params.theme=='dark'?'#031529':'white'),transition:'300ms',}}>
                            <Col xs={0} sm={0} md={24}>
                                <Sider>
                                    <Menu
                                    theme={params.theme}
                                    mode="inline"
                                    style={{
                                        height: '100%',
                                        borderRight: 0,
                                    }}
                                    items={params.items}
                                    />
                                </Sider>
                            </Col>
                        </Row>
                    }

                    <Layout>
                        <Col xs={24} sm={24} md={0}>
                            <Menu
                                theme={params.theme}
                                mode="horizontal"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{
                                    height: '100%',
                                    borderRight: 0,
                                }}
                                items={params.items}
                            />
                        </Col>

                        <Content style={{
                            textAlign: 'center',
                            minHeight:'500px',
                            backgroundColor:'white'
                            }}>
                            <div style={{fontSize:'2em', marginTop:'50px'}}>Content of Page</div>
                        </Content>

                    </Layout>

                    { sideMenuOrientation=="Right" &&
                        <Row style={{backgroundColor:(params.theme=='dark'?'#031529':'white'),transition:'300ms',}}>
                            <Col xs={0} sm={0} md={24}>
                                <Sider>
                                    <Menu
                                    theme={params.theme}
                                    mode="inline"
                                    style={{
                                        height: '100%',
                                        borderRight: 0,
                                    }}
                                    items={params.items}
                                    />
                                </Sider>
                            </Col>
                        </Row>
                    }

                </Layout>
                <Footer
                    style={{
                    textAlign: footerPosition,
                    fontWeight:'bold',
                    backgroundColor:(footerTheme=="dark"?'#3E3E3E':'lightgray'),
                    transition:'all 300ms,'
                    }}
                    
                >
                    <Text style={{color:(footerTheme=="dark"?'white':'black'),transition:'1000ms'}} editable={{onChange: setFooter}}>{footer}</Text>
                </Footer>
            </Layout>
        </>
    )
};

export default LiveDemo3;