import {Col, Row, Typography, Divider, Card, Steps, Button, Result, Affix } from 'antd';
import { QuestionCircleOutlined, DownloadOutlined, RightCircleFilled, LeftCircleFilled, HomeOutlined, SettingOutlined, UserOutlined, BarChartOutlined } from '@ant-design/icons';
import { useState } from 'react';
import '../../css/AutoFrontend.css';

import LiveDemo1 from './LiveDemo1';
import LiveContentDemo1 from './LiveContentDemo1'
import LiveDemo2 from './LiveDemo2';
import LiveContentDemo2 from './LiveContentDemo2';
import LiveDemo3 from './LiveDemo3';
import LiveContentDemo3 from './LiveContentDemo3';
import LiveDemo4 from './LiveDemo4';
import LiveContentDemo4 from './LiveContentDemo4';
import LayoutOptions from './LayoutOptions';


const {Text} = Typography
const {Step} = Steps


const TemplateBuilder = () => {


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

    // Configs for Logo Customization - Layout 4
    const [logoPosition, setLogoPosition] = useState("center")
    const handleLogoPositionChange = (e) => {
        setLogoPosition(e.target.value)
    }

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
        setTheme(value ? 'dark' : 'light');
    };
    const [menuWithIcons,setMenuWithIcons] = useState(true)
    const changeMenuWithIcons = (value) => {
        setMenuWithIcons(value?true:false)
    }


    // Configs for Side Menu Configuration (Layout 3)
    const [sideMenuOrientation , setSideMenuOrientation] = useState("Left")
    const changeSideMenuOrientation = (value) => {
        setSideMenuOrientation(value ? "Left" : "Right");
    };


    // Configs for Top Menu Configuration (Layout 3)
    const [topMenuTheme, setTopMenuTheme] = useState("dark")
    const changeTopMenuTheme = (value) => {
        setTopMenuTheme(value ? 'dark' : 'light');
    };

    // Configs for Menu Position - Layout 4
    const [menuPosition, setMenuPosition] = useState("center")
    const handleMenuPositionChange = (e) => {
        setMenuPosition(e.target.value)
    }

    // General Settings for Step-by-Step Auto Front-End
    const [currentGeneralStep, setCurrentGeneralStep] = useState(0)
    const [selectedLayoutOption, setSelectedLayoutOption] = useState("01")


    // For Menu!
    const [menu1, setMenu1] = useState('Home');
    const [menu2, setMenu2] = useState('Setting');
    const [menu3, setMenu3] = useState('Account');
    const [menu4, setMenu4] = useState('Stats');
    // Theme
    const [theme, setTheme] = useState('dark');
    
    // items for Layout 1,2, and 3
    const itemsWithIcon = [
        {
          label: (<Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu1}}>{menu1}</Text>),
          key: '1',
          icon: <HomeOutlined style={{color:theme==='light'?'black':'white',fontSize:'1.2em'}} />,
        },
        {
          label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu2}}>{menu2} </Text> </>),
          key: '2',
          icon: <SettingOutlined style={{color:theme==='light'?'black':'white',fontSize:'1.2em'}} />,
        },
        {
          label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu3}}>{menu3} </Text> </>),
          key: '3',
          icon: <UserOutlined style={{color:theme==='light'?'black':'white',fontSize:'1.2em'}} />,
          children: [ 
            {
                label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>Info</Text> </>),
                key: '3:1',
                },
            {
                label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>Bills</Text> </>),
                key: '3:2',
                },
            {
                label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>Log-out</Text> </>),
                key: '3:3',
                },
          ],
        },
        {
            label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu4}}>{menu4} </Text> </>),
            key: '4',
            icon: <BarChartOutlined style={{color:theme==='light'?'black':'white',fontSize:'1.2em'}} />,
            children: [ 
              {
                  label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>General</Text> </>),
                  key: '4:1',
                },
              {
                label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>Banking</Text> </>),
                key: '4:2',
                },
              {
                label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>Housing</Text> </>),
                key: '4:3',
                },
            ],
          },
    ]
    const itemsWithoutIcon = [
        {
          label: (<Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu1}}>{menu1}</Text>),
          key: '1',
        },
        {
          label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu2}}>{menu2} </Text> </>),
          key: '2',
        },
        {
          label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu3}}>{menu3} </Text> </>),
          key: '3',
          children: [ 
            {
                label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>Info</Text> </>),
                key: '3:1',
                },
            {
                label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>Bills</Text> </>),
                key: '3:2',
                },
            {
                label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>Log-out</Text> </>),
                key: '3:3',
                },
          ],
        },
        {
            label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu4}}>{menu4} </Text> </>),
            key: '4',
            children: [ 
              {
                  label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>General</Text> </>),
                  key: '4:1',
                  },
              {
                label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>Banking</Text> </>),
                key: '4:2',
                },
              {
                label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>Housing</Text> </>),
                key: '4:3',
                },
            ],
          },
    ]

    const itemsWithIconFinal = [
      {
        label: (<Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>{menu1}</Text>),
        key: '1',
        icon: <HomeOutlined style={{color:theme==='light'?'black':'white',fontSize:'1.2em'}} />,
      },
      {
        label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>{menu2} </Text> </>),
        key: '2',
        icon: <SettingOutlined style={{color:theme==='light'?'black':'white',fontSize:'1.2em'}} />,
      },
      {
        label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>{menu3} </Text> </>),
        key: '3',
        icon: <UserOutlined style={{color:theme==='light'?'black':'white',fontSize:'1.2em'}} />,
        children: [ 
          {
              label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>Info</Text> </>),
              key: '3:1',
              },
          {
              label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>Bills</Text> </>),
              key: '3:2',
              },
          {
              label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>Log-out</Text> </>),
              key: '3:3',
              },
        ],
      },
      {
          label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>{menu4} </Text> </>),
          key: '4',
          icon: <BarChartOutlined style={{color:theme==='light'?'black':'white',fontSize:'1.2em'}} />,
          children: [ 
            {
                label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>General</Text> </>),
                key: '4:1',
              },
            {
              label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>Banking</Text> </>),
              key: '4:2',
              },
            {
              label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>Housing</Text> </>),
              key: '4:3',
              },
          ],
        },
    ]

    const itemsWithoutIconFinal = [
      {
        label: (<Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>{menu1}</Text>),
        key: '1',
      },
      {
        label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>{menu2} </Text> </>),
        key: '2',
      },
      {
        label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>{menu3} </Text> </>),
        key: '3',
        children: [ 
          {
              label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>Info</Text> </>),
              key: '3:1',
              },
          {
              label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>Bills</Text> </>),
              key: '3:2',
              },
          {
              label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>Log-out</Text> </>),
              key: '3:3',
              },
        ],
      },
      {
          label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>{menu4} </Text> </>),
          key: '4',
          children: [ 
            {
                label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>General</Text> </>),
                key: '4:1',
                },
            {
              label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>Banking</Text> </>),
              key: '4:2',
              },
            {
              label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}}>Housing</Text> </>),
              key: '4:3',
              },
          ],
        },
  ]

  // Extra menu for layout 3
  const items1_3 = [
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

  // items for Layout 4
  const itemsWithIcon_4 = [
      {
        label: (<Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu1}}>{menu1}</Text>),
        key: '1',
        icon: <HomeOutlined style={{color:theme==='light'?'black':'white',fontSize:'1.2em'}} />,
      },
      {
        label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu2}}>{menu2} </Text> </>),
        key: '2',
        icon: <SettingOutlined style={{color:theme==='light'?'black':'white',fontSize:'1.2em'}} />,
      },
      {
        label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu3}}>{menu3} </Text> </>),
        key: '3',
        icon: <UserOutlined style={{color:theme==='light'?'black':'white',fontSize:'1.2em'}} />,
        
      },
      {
          label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu4}}>{menu4} </Text> </>),
          key: '4',
          icon: <BarChartOutlined style={{color:theme==='light'?'black':'white',fontSize:'1.2em'}} />,
        },
  ]
  const itemsWithoutIcon_4 = [
      {
        label: (<Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu1}}>{menu1}</Text>),
        key: '1',
      },
      {
        label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu2}}>{menu2} </Text> </>),
        key: '2',
      },
      {
        label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu3}}>{menu3} </Text> </>),
        key: '3',
        
      },
      {
          label: (<><Text style={{color:theme==='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu4}}>{menu4} </Text> </>),
          key: '4',
          
        },
  ]
  const itemsWithJustIcon_4 = [
      {
        key: '1',
        icon: <HomeOutlined style={{color:theme==='light'?'black':'white',fontSize:'1.2em'}} />,
      },
      {
        key: '2',
        icon: <SettingOutlined style={{color:theme==='light'?'black':'white',fontSize:'1.2em'}} />,
      },
      {
        key: '3',
        icon: <UserOutlined style={{color:theme==='light'?'black':'white',fontSize:'1.2em'}} />,
        
      },
      {
          key: '4',
          icon: <BarChartOutlined style={{color:theme==='light'?'black':'white',fontSize:'1.2em'}} />,
        },
  ]

  return (
      <>
          
        <Row justify='center' align='middle' style={{margin:'1%'}}>
            <Text>After following the steps below, The Machine will generate all the files for you! Automatically and completely FREE!</Text><Text style={{color:'red', marginLeft:'5px'}}>Need Help?</Text>
        </Row>
        <Divider></Divider>
        
        <Row justify='center' style={{marginBottom:'5%'}}>
            <Col xs={23} sm={23} md={23} lg={23} xl={23} xxl={23}>
                <Affix offsetTop={0}>
                  <Steps style={{backgroundColor:'#DCEBFF'}} direction='horizontal' responsive={false} type='navigation' size='small' current={currentGeneralStep}>
                      <Step title="Layout"/>
                      <Step title="Layout Details"/>
                      <Step title="Pages"/>
                  </Steps>
                </Affix>
                <Row justify='space-around' style={{minHeight:'400px'}} align='middle'>
                    <Col xs={{span:1, order:2}} sm={{span:1, order:2}} md={{span:1, order:2}} lg={{span:1,order:1}}>
                        { currentGeneralStep!==0 &&
                            <LeftCircleFilled onClick={()=>setCurrentGeneralStep(currentGeneralStep-1)} style={{color:'#1890ff', fontSize:'2.5em', marginTop:'20px'}}/>
                        }
                    </Col>

                    <Col xs={{span:24,order:1}} sm={{span:24,order:1}} md={{span:24, order:1}} lg={{span:21, order:2}}>
                        { currentGeneralStep===0 &&
                            <Card style={{marginTop:'1%', minHeight:'400px'}}>
                                <LayoutOptions setSelectedLayoutOption={setSelectedLayoutOption}/>
                            </Card>
                        }
                        { currentGeneralStep===1 &&
                            <Card style={{marginTop:'1%', minHeight:'400px',}}>
                                { selectedLayoutOption==="01" &&
                                    <LiveDemo1 currentGeneralStep={currentGeneralStep} menuWithIcons={menuWithIcons} changeMenuWithIcons={changeMenuWithIcons} itemsWithIcon={itemsWithIcon} itemsWithoutIcon={itemsWithoutIcon} theme={theme} changeTheme={changeTheme}  headerOrientation={headerOrientation} changeHeaderOrientation={changeHeaderOrientation} logo={logo} setLogo={setLogo}  logoType={logoType} logoTheme={logoTheme} changeLogoType={changeLogoType} fileList={fileList} changeLogoTheme={changeLogoTheme} onChange={onChange} onPreview={onPreview} footer={footer} setFooter={setFooter} footerPosition={footerPosition} handleFooterPositionChange={handleFooterPositionChange} footerTheme={footerTheme} changeFooterTheme={changeFooterTheme} />
                                }
                                { selectedLayoutOption==="02" &&
                                    <LiveDemo2 currentGeneralStep={currentGeneralStep} menuWithIcons={menuWithIcons} changeMenuWithIcons={changeMenuWithIcons} itemsWithIcon={itemsWithIcon} itemsWithoutIcon={itemsWithoutIcon} theme={theme} changeTheme={changeTheme}  headerOrientation={headerOrientation} changeHeaderOrientation={changeHeaderOrientation} logo={logo} setLogo={setLogo}  logoType={logoType} logoTheme={logoTheme} changeLogoType={changeLogoType} fileList={fileList} changeLogoTheme={changeLogoTheme} onChange={onChange} onPreview={onPreview} footer={footer} setFooter={setFooter} footerPosition={footerPosition} handleFooterPositionChange={handleFooterPositionChange} footerTheme={footerTheme} changeFooterTheme={changeFooterTheme}/>
                                }
                                { selectedLayoutOption==="03" &&
                                    <LiveDemo3 currentGeneralStep={currentGeneralStep} items1_3={items1_3} sideMenuOrientation={sideMenuOrientation} changeSideMenuOrientation={changeSideMenuOrientation} menuWithIcons={menuWithIcons} changeMenuWithIcons={changeMenuWithIcons} itemsWithIcon={itemsWithIcon} itemsWithoutIcon={itemsWithoutIcon} theme={theme} changeTheme={changeTheme} topMenuTheme={topMenuTheme} changeTopMenuTheme={changeTopMenuTheme} headerOrientation={headerOrientation} changeHeaderOrientation={changeHeaderOrientation} logo={logo} setLogo={setLogo}  logoType={logoType} logoTheme={logoTheme} changeLogoType={changeLogoType} fileList={fileList} changeLogoTheme={changeLogoTheme} onChange={onChange} onPreview={onPreview} footer={footer} setFooter={setFooter} footerPosition={footerPosition} handleFooterPositionChange={handleFooterPositionChange} footerTheme={footerTheme} changeFooterTheme={changeFooterTheme}/>
                                }
                                { selectedLayoutOption==="04" &&
                                    <LiveDemo4 currentGeneralStep={currentGeneralStep} menuWithIcons={menuWithIcons} changeMenuWithIcons={changeMenuWithIcons} itemsWithoutIcon={itemsWithoutIcon_4} itemsWithIcon={itemsWithIcon_4} itemsWithJustIcon={itemsWithJustIcon_4} theme={theme} changeTheme={changeTheme} menuPosition={menuPosition} handleMenuPositionChange={handleMenuPositionChange} logoPosition={logoPosition} handleLogoPositionChange={handleLogoPositionChange}  logo={logo} setLogo={setLogo}  logoType={logoType} logoTheme={logoTheme} changeLogoType={changeLogoType} fileList={fileList} changeLogoTheme={changeLogoTheme} onChange={onChange} onPreview={onPreview}/>                                
                                }
                            </Card>
                        }
                        {currentGeneralStep===2 &&
                          <Card style={{marginTop:'1%', minHeight:'400px',}}>
                            { selectedLayoutOption==="01" &&
                              <LiveContentDemo1 currentGeneralStep={currentGeneralStep} menuWithIcons={menuWithIcons} changeMenuWithIcons={changeMenuWithIcons}  itemsWithoutIconFinal={itemsWithoutIconFinal} itemsWithIconFinal={itemsWithIconFinal} theme={theme} changeTheme={changeTheme} headerOrientation={headerOrientation} changeHeaderOrientation={changeHeaderOrientation} logo={logo}  logoType={logoType} logoTheme={logoTheme} changeLogoType={changeLogoType} fileList={fileList} changeLogoTheme={changeLogoTheme} onChange={onChange} onPreview={onPreview} footer={footer} footerPosition={footerPosition} handleFooterPositionChange={handleFooterPositionChange} footerTheme={footerTheme} changeFooterTheme={changeFooterTheme} />
                            }
                            { selectedLayoutOption==="02" &&
                              <LiveContentDemo2 currentGeneralStep={currentGeneralStep} menuWithIcons={menuWithIcons} changeMenuWithIcons={changeMenuWithIcons}  itemsWithoutIconFinal={itemsWithoutIconFinal} itemsWithIconFinal={itemsWithIconFinal} theme={theme} changeTheme={changeTheme} headerOrientation={headerOrientation} changeHeaderOrientation={changeHeaderOrientation} logo={logo}  logoType={logoType} logoTheme={logoTheme} changeLogoType={changeLogoType} fileList={fileList} changeLogoTheme={changeLogoTheme} onChange={onChange} onPreview={onPreview} footer={footer} footerPosition={footerPosition} handleFooterPositionChange={handleFooterPositionChange} footerTheme={footerTheme} changeFooterTheme={changeFooterTheme} />
                            }
                            { selectedLayoutOption==="03" &&
                              <LiveContentDemo3 currentGeneralStep={currentGeneralStep} items1_3={items1_3} sideMenuOrientation={sideMenuOrientation} changeSideMenuOrientation={changeSideMenuOrientation} menuWithIcons={menuWithIcons} changeMenuWithIcons={changeMenuWithIcons}  itemsWithoutIconFinal={itemsWithoutIconFinal} itemsWithIconFinal={itemsWithIconFinal} theme={theme} changeTheme={changeTheme} topMenuTheme={topMenuTheme} changeTopMenuTheme={changeTopMenuTheme} headerOrientation={headerOrientation} changeHeaderOrientation={changeHeaderOrientation} logo={logo}  logoType={logoType} logoTheme={logoTheme} changeLogoType={changeLogoType} fileList={fileList} changeLogoTheme={changeLogoTheme} onChange={onChange} onPreview={onPreview} footer={footer} footerPosition={footerPosition} handleFooterPositionChange={handleFooterPositionChange} footerTheme={footerTheme} changeFooterTheme={changeFooterTheme} />
                            }
                            { selectedLayoutOption==="04" &&
                              <LiveContentDemo4 currentGeneralStep={currentGeneralStep} menuWithIcons={menuWithIcons} changeMenuWithIcons={changeMenuWithIcons}  itemsWithoutIconFinal={itemsWithoutIconFinal} itemsWithIconFinal={itemsWithIconFinal} itemsWithJustIcon={itemsWithJustIcon_4} theme={theme} changeTheme={changeTheme} logo={logo}  logoType={logoType} logoTheme={logoTheme} changeLogoType={changeLogoType} fileList={fileList} changeLogoTheme={changeLogoTheme} onChange={onChange} onPreview={onPreview} menuPosition={menuPosition} logoPosition={logoPosition} />
                            }
                          </Card>
                        }
                        
                        {currentGeneralStep===3 &&
                            <Result
                                status="success"
                                title="Successfully Finished Declaration!"
                                subTitle="You can now preview the whole thing from the left or click the button below and download the whole project."
                                extra={[
                                <Button type="primary" key="download">
                                    <DownloadOutlined /> Download Code
                                </Button>,
                                <Button key="help"><QuestionCircleOutlined/> How to run it!</Button>,
                                ]}
                            />                         
                        }
                    </Col>

                    <Col xs={{span:1,order:3}} sm={{span:1,order:3}} md={{span:1, order:3}}>
                        { currentGeneralStep < 5 &&
                            <RightCircleFilled onClick={()=>setCurrentGeneralStep(currentGeneralStep+1)} style={{color:'#1890ff', fontSize:'2.5em', marginTop:'20px'}}/>
                        }
                    </Col>
                </Row>
                    
              
                


            </Col>
            
            
        </Row>

      </>

  );
};
  
export default TemplateBuilder;