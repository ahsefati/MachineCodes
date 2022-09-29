import { Breadcrumb, Layout, Menu, Row, Col, Image, Typography, Divider, Card, Switch, Upload, Radio } from 'antd';
import ImgCrop from 'antd-img-crop';
import React, { useState, useEffect } from 'react';
const { Header, Content, Footer, Sider } = Layout;
const {Text} = Typography


const LiveDemo2 = (params) => {
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


    // Configs for Menu Customization
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
                    <Card style={{minWidth:'225px'}} title='Menu'>
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
        

            
                <Layout
                    style={{minHeight:'600px', border:'2px black solid'}}
                >   
                    { headerOrientation=="Left to Right" &&
                    
                        <Row style={{backgroundColor:(logoTheme=='dark'?'#031529':'white'),transition:'300ms'}}>
                            <Col sm={0} xs={0} md={23} xl={23} xlg={23}>
                                <Sider style={{backgroundColor:(logoTheme=='dark'?'#031529':'white'),transition:'300ms',}}>
                                    {logoType=="Text" &&
                                        <div style={{textAlign:'center', marginTop:'15px', marginBottom:'15px',}}>
                                            <Text style={{color:(logoTheme=='dark'?'white':'#031529'), transition:'1000ms' ,fontWeight:'bold', fontSize:'2em'}} editable={{onChange: setLogo}}>{logo}</Text>
                                        </div>
                                    }
                                    {logoType=="Image" && fileList.length > 0 &&
                                        <Image
                                            
                                            src={fileList[0]["thumbUrl"]}
                                        />
                                        // Need to imrpove quality. 
                                        // Need to Back-end process.
                                    }
                                    <Menu theme={params.theme} defaultSelectedKeys={['1']} mode="inline" items={params.items} />
                                </Sider>
                            </Col>
                        </Row>            
                    }
                    
                    <Layout>
                        <Col sm={24} md={0} xl={0} xlg={0}>
                            <Header  style={{backgroundColor:(logoTheme=='dark'?'#031529':'white'),transition:'300ms',}}>
                                <Row>
                                    <Col xs={20} sm={8} md={8} xl={0} xlg={0} order={headerOrientation=="Left to Right"?1:2} style={{textAlign:(headerOrientation=="Left to Right"?'left':'right'),}}>
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
                                    <Col xs={4} sm={16} md={16} xl={0} xlg={0} order={headerOrientation=="Left to Right"?2:1}>
                                        <Menu
                                            theme={params.theme}
                                            mode="horizontal"
                                            defaultSelectedKeys={['2']}
                                            items={params.items}
                                            style={{justifyContent: (headerOrientation=="Left to Right"?'flex-end':'flex-start')}}
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
                            <div style={{fontSize:'2em', marginTop:'50px'}}>Content of Page</div>
                        </Content>
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

                    { headerOrientation=="Right to Left" &&

                        <Row style={{backgroundColor:(logoTheme=='dark'?'#031529':'white'),transition:'300ms'}}>
                            <Col sm={0} xs={0} md={23} xl={23} xlg={23}>
                                <Sider style={{backgroundColor:(logoTheme=='dark'?'#031529':'white'),transition:'300ms',}}>
                                    {logoType=="Text" &&
                                        <div style={{textAlign:'center', marginTop:'15px', marginBottom:'15px',}}>
                                            <Text style={{color:(logoTheme=='dark'?'white':'#031529'), transition:'1000ms' ,fontWeight:'bold', fontSize:'2em'}} editable={{onChange: setLogo}}>{logo}</Text>
                                        </div>
                                    }
                                    {logoType=="Image" && fileList.length > 0 &&
                                        <Image
                                            
                                            src={fileList[0]["thumbUrl"]}
                                        />
                                        // Need to imrpove quality. 
                                        // Need to Back-end process.
                                    }
                                    <Menu theme={params.theme} defaultSelectedKeys={['1']} mode="inline" items={params.items} />
                                </Sider>
                            </Col>
                        </Row>
                    }
                </Layout>
            
        </>
    );
  };
  
  export default LiveDemo2;