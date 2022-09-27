import { Breadcrumb, Col, Layout, Menu, Typography, Row, Divider, Switch, Card, Upload, Image, Radio } from 'antd';
import ImgCrop from 'antd-img-crop';
import React, { forwardRef, useState, useEffect } from 'react';
const { Header, Content, Footer } = Layout;
const {Text} = Typography

const LiveDemo4 = (params) => {
    
    
    // Configs for Logo Customization
    const [logoPosition, setLogoPosition] = useState("center")
    const handleLogoPositionChange = (e) => {
        setLogoPosition(e.target.value)
    }
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
    const [menuPosition, setMenuPosition] = useState("center")
    const handleMenuPositionChange = (e) => {
        setMenuPosition(e.target.value)
    }
    


    return (
        <>
            <Row style={{marginBottom:'20px'}} gutter={10}>
                <Divider orientation='center'>Configurations</Divider>
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
                        <Radio.Group style={{marginLeft:'10px'}} onChange={handleMenuPositionChange} defaultValue="center" buttonStyle="solid">
                            <Radio.Button value="left">Left</Radio.Button>
                            <Radio.Button value="center">Center</Radio.Button>
                            <Radio.Button value="right">Right</Radio.Button>
                        </Radio.Group>
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
                        <Radio.Group style={{marginLeft:'10px'}} onChange={handleLogoPositionChange} defaultValue="center" buttonStyle="solid">
                            <Radio.Button value="left">Left</Radio.Button>
                            <Radio.Button value="center">Center</Radio.Button>
                            <Radio.Button value="right">Right</Radio.Button>
                        </Radio.Group>
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
            
            </Row>

            <Layout style={{background: '#fff', border:'2px solid black',}}>
                <Header style={{backgroundColor:(logoTheme=='dark'?'#031529':'white'),transition:'300ms',}}>
                    <Row>
                        <Col xs={24} sm={24} md={24} xl={24} xlg={24} style={{textAlign:logoPosition,}}>
                            {logoType=="Text" &&
                                <Text style={{color:(logoTheme=='dark'?'white':'#031529'), transition:'1000ms' ,fontWeight:'bold', fontSize:'2em'}} editable={{onChange: setLogo}}>{logo}</Text>
                            }
                            {logoType=="Image" && fileList.length > 0 &&
                               <Image
                                    width={'12%'}
                                    style={{minWidth:'100px', minHeight:'60px' }}
                                    height={'65%'}
                                    src={fileList[0]["thumbUrl"]}
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
                    <div style={{fontSize:'2em', marginTop:'50px'}}>Content of Page</div>
                </Content>
                
                <Row>
                    <Col style={{width:'100%'}} xs={0} sm={0} md={24}>
                        <Menu
                            theme={params.theme}
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            items={params.items}
                            style={{justifyContent: menuPosition}}
                        />
                    </Col>

                    <Col style={{width:'100%'}} xs={24} sm={24} md={0}>
                        <Menu
                            theme={params.theme}
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            items={params.itemsWithJustIcon}
                            style={{justifyContent: menuPosition}}
                        />
                    </Col>
                </Row>
                
            </Layout>
        </>
    )
}


export default LiveDemo4;