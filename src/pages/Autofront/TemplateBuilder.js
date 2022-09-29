import {Col, Row, Typography, Segmented, Space, Divider, Card, Steps, InputNumber, Button, Result } from 'antd';
import { QuestionCircleOutlined, DownloadOutlined, RightCircleFilled, LeftCircleFilled, HomeOutlined, SettingOutlined, UserOutlined, BarChartOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import '../../css/AutoFrontend.css';

import LiveDemo1 from './LiveDemo1';
import LiveDemo2 from './LiveDemo2';
import LiveDemo3 from './LiveDemo3';
import LiveDemo4 from './LiveDemo4';

import LayoutOptions from './LayoutOptions';
import HeaderOptions from './HeaderOptions'
import MenuCustomization from './MenuCustomization';

const {Title, Text} = Typography
const {Step} = Steps


const TemplateBuilder = () => {
    const [currentGeneralStep, setCurrentGeneralStep] = useState(0)
    const [numberOfRoots, setNumberOfRoots] = useState(1)

    const [selectedLayoutOption, setSelectedLayoutOption] = useState("01")
    const [selectedHeaderOption, setSelectedHeaderOption] = useState(null)


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
          label: (<Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu1}}>{menu1}</Text>),
          key: '1',
          icon: <HomeOutlined style={{color:theme=='light'?'black':'white',fontSize:'1.2em'}} />,
        },
        {
          label: (<><Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu2}}>{menu2} </Text> </>),
          key: '2',
          icon: <SettingOutlined style={{color:theme=='light'?'black':'white',fontSize:'1.2em'}} />,
        },
        {
          label: (<><Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu3}}>{menu3} </Text> </>),
          key: '3',
          icon: <UserOutlined style={{color:theme=='light'?'black':'white',fontSize:'1.2em'}} />,
          children: [ 
            {
                label: (<><Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}}>Info</Text> </>),
                key: '3:1',
                },
            {
                label: (<><Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}}>Bills</Text> </>),
                key: '3:2',
                },
            {
                label: (<><Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}}>Log-out</Text> </>),
                key: '3:3',
                },
          ],
        },
        {
            label: (<><Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu4}}>{menu4} </Text> </>),
            key: '4',
            icon: <BarChartOutlined style={{color:theme=='light'?'black':'white',fontSize:'1.2em'}} />,
            children: [ 
              {
                  label: (<><Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}}>General</Text> </>),
                  key: '4:1',
                  },
              ,
              {
                label: (<><Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}}>Banking</Text> </>),
                key: '4:2',
                },
            {
                label: (<><Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}}>Housing</Text> </>),
                key: '4:3',
                },
            ],
          },
    ]
    const itemsWithoutIcon = [
        {
          label: (<Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu1}}>{menu1}</Text>),
          key: '1',
        },
        {
          label: (<><Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu2}}>{menu2} </Text> </>),
          key: '2',
        },
        {
          label: (<><Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu3}}>{menu3} </Text> </>),
          key: '3',
          children: [ 
            {
                label: (<><Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}}>Info</Text> </>),
                key: '3:1',
                },
            {
                label: (<><Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}}>Bills</Text> </>),
                key: '3:2',
                },
            {
                label: (<><Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}}>Log-out</Text> </>),
                key: '3:3',
                },
          ],
        },
        {
            label: (<><Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu4}}>{menu4} </Text> </>),
            key: '4',
            children: [ 
              {
                  label: (<><Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}}>General</Text> </>),
                  key: '4:1',
                  },
              ,
              {
                label: (<><Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}}>Banking</Text> </>),
                key: '4:2',
                },
            {
                label: (<><Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}}>Housing</Text> </>),
                key: '4:3',
                },
            ],
          },
    ]
    const [items2, setItems2] = useState(itemsWithIcon)

    // items for Layout 4
    const itemsWithIcon_4 = [
        {
          label: (<Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu1}}>{menu1}</Text>),
          key: '1',
          icon: <HomeOutlined style={{color:theme=='light'?'black':'white',fontSize:'1.2em'}} />,
        },
        {
          label: (<><Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu2}}>{menu2} </Text> </>),
          key: '2',
          icon: <SettingOutlined style={{color:theme=='light'?'black':'white',fontSize:'1.2em'}} />,
        },
        {
          label: (<><Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu3}}>{menu3} </Text> </>),
          key: '3',
          icon: <UserOutlined style={{color:theme=='light'?'black':'white',fontSize:'1.2em'}} />,
          
        },
        {
            label: (<><Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu4}}>{menu4} </Text> </>),
            key: '4',
            icon: <BarChartOutlined style={{color:theme=='light'?'black':'white',fontSize:'1.2em'}} />,
          },
    ]
    const itemsWithoutIcon_4 = [
        {
          label: (<Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu1}}>{menu1}</Text>),
          key: '1',
        },
        {
          label: (<><Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu2}}>{menu2} </Text> </>),
          key: '2',
        },
        {
          label: (<><Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu3}}>{menu3} </Text> </>),
          key: '3',
          
        },
        {
            label: (<><Text style={{color:theme=='light'?'black':'white', fontWeight:'bold'}} editable={{onChange: setMenu4}}>{menu4} </Text> </>),
            key: '4',
            
          },
    ]
    const itemsWithJustIcon_4 = [
        {
          key: '1',
          icon: <HomeOutlined style={{color:theme=='light'?'black':'white',fontSize:'1.2em'}} />,
        },
        {
          key: '2',
          icon: <SettingOutlined style={{color:theme=='light'?'black':'white',fontSize:'1.2em'}} />,
        },
        {
          key: '3',
          icon: <UserOutlined style={{color:theme=='light'?'black':'white',fontSize:'1.2em'}} />,
          
        },
        {
            key: '4',
            icon: <BarChartOutlined style={{color:theme=='light'?'black':'white',fontSize:'1.2em'}} />,
          },
    ]
    const [items2_4, setItems2_4] = useState(itemsWithIcon_4)

    return (
        <>
            
            <Row justify='center' align='middle' style={{margin:'1%'}}>
                <Text>After following the steps below, The Machine will generate all the files for you! Automatically and completely FREE!</Text><Text style={{color:'red', marginLeft:'5px'}}>Need Help?</Text>
            </Row>
            <Divider></Divider>
            
            <Row justify='center' gutter={[48,36]} style={{marginBottom:'5%'}}>
                <Col xs={23} sm={23} md={23} lg={23} xl={23} xxl={23}>
                    <Steps direction='horizontal' responsive={false} type='navigation' size='small' current={currentGeneralStep}>
                        <Step title="Layout"/>
                        <Step title="Layout Details"/>
                        <Step title="Pages"/>
                    </Steps>

                    <Row justify='space-around' style={{minHeight:'400px'}} align='middle'>
                        <Col xs={{span:1, order:2}} sm={{span:1, order:2}} md={{span:1, order:2}} lg={{span:1,order:1}}>
                            { currentGeneralStep!=0 &&
                                <LeftCircleFilled onClick={()=>setCurrentGeneralStep(currentGeneralStep-1)} style={{color:'#1890ff', fontSize:'2.5em', marginTop:'20px'}}/>
                            }
                        </Col>

                        <Col xs={{span:24,order:1}} sm={{span:24,order:1}} md={{span:24, order:1}} lg={{span:21, order:2}}>
                            { currentGeneralStep==0 &&
                                <Card style={{marginTop:'1%', minHeight:'400px'}}>
                                    <LayoutOptions setSelectedLayoutOption={setSelectedLayoutOption}/>
                                </Card>
                            }
                            { currentGeneralStep==1 &&
                                <Card style={{marginTop:'1%', minHeight:'400px',}}>
                                    <Title level={4}>Edit to find your desired layout with details.</Title>
                                    { selectedLayoutOption=="01" &&
                                        <LiveDemo1 itemsWithoutIcon={itemsWithoutIcon} itemsWithIcon={itemsWithIcon} theme={theme} setTheme={setTheme} items={items2} setItems2={setItems2}/>
                                    }
                                    { selectedLayoutOption=="02" &&
                                        <LiveDemo2 itemsWithoutIcon={itemsWithoutIcon} itemsWithIcon={itemsWithIcon} theme={theme} setTheme={setTheme} items={items2} setItems2={setItems2}/>
                                    }
                                    { selectedLayoutOption=="03" &&
                                        <LiveDemo3 itemsWithoutIcon={itemsWithoutIcon} itemsWithIcon={itemsWithIcon} theme={theme} setTheme={setTheme} items={items2} setItems2={setItems2}/>
                                    }
                                    { selectedLayoutOption=="04" &&
                                        <LiveDemo4 itemsWithoutIcon={itemsWithoutIcon_4} itemsWithIcon={itemsWithIcon_4} itemsWithJustIcon={itemsWithJustIcon_4} theme={theme} setTheme={setTheme} items={items2} setItems2={setItems2}/>
                                    }
                                </Card>
                            }
                            
                            {currentGeneralStep==5 &&
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