import {Col, Row, Typography, Card, Divider, Badge, Progress, Steps, Rate, Tooltip } from 'antd';
import backHome from '../assets/backHome.jpg';
import '../css/Home.css';
import {RocketTwoTone, CheckCircleTwoTone, DollarTwoTone, SafetyCertificateTwoTone, CodeTwoTone, RobotOutlined, SettingTwoTone} from '@ant-design/icons';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHtml5, faCss3, faJs, faReact, faVuejs, faAngular, faNodeJs, faPhp, faPython, faJava, faRProject, faSwift } from '@fortawesome/free-brands-svg-icons'

const {Title, Text} = Typography
const {Step} = Steps

const Home = () => {
    const [isCardloading, setIsCardLoading] = useState(true)
    const [currentStep, setCurrentStep] = useState(0)
    const [currentStepPercent, setCurrentStepPercent] = useState(10)

    useEffect(()=>{
        setTimeout(() => {
            setIsCardLoading(false)
        }, 300);
    },[])

    useEffect(()=>{
        const intervalForSteps = setInterval(() => { 
            setCurrentStep(currentStep+1)
            setCurrentStepPercent(currentStepPercent*(currentStep+2))
            if (currentStep>3){
                setCurrentStep(0)
                setCurrentStepPercent(10)
            }     
        },2000)

        return () => clearInterval(intervalForSteps);
    })
    

    return(
        <>
            <Row style={{backgroundImage: `url(${backHome})`, backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
                <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                    <br/>
                    <Text className="title-desc" style={{marginLeft:'5%', marginTop:'10%', color:'white'}}>
                        First Think, Then <Text style={{color:'gray'}} delete>Code</Text>
                    </Text> 
                    <Title className="title" style={{marginLeft:'5%', marginTop:'1%', color:'white'}}>
                        &lt; Let <br/> 
                        The Machine <br/> 
                        Code! /&gt;
                    </Title> 
                </Col>
                <Col xs={0} sm={0} md={0} lg={8} xl={8} style={{textAlign:'center'}}>
                    <Text style={{color:'white', fontSize:'2em'}}>&lt;</Text> <RobotOutlined style={{marginTop:'15%', color:'white', fontSize:'5em'}} /> <Text style={{color:'white', fontSize:'2em'}}>/&gt;</Text>
                    
                    <br/>
                    <Rate style={{fontSize: '4em'}} disabled defaultValue={5} />
                    <br/>
                    <Text style={{fontSize:"2em", color:'white'}}>+0 Codes Generated!</Text>
                </Col>
                
            </Row>
            <Row style={{margin:"5%"}} justify="space-evenly" align="middle">

                <Col className='featuresCard' xs={11} sm={11} md={11} lg={11} xl={4} xxl={4} style={{textAlign:'center', marginBottom:'20px'}}>
                    <Badge.Ribbon text="100%" color="#eb2f96">
                        <Card loading={isCardloading}>
                            <DollarTwoTone style={{fontSize:'350%', marginBottom:'5px'}}/>
                            <Title level={4}>Free</Title>
                            <Col xs={0} sm={0} md={24} lg={24} xl={24}>
                                <Text>Machine works for free, <br/>No costs at all!</Text>   
                            </Col>
                        </Card>
                    </Badge.Ribbon>
                </Col>
                <Col className='featuresCard' xs={11} sm={11} md={11} lg={11} xl={4} xxl={4} style={{textAlign:'center', marginBottom:'20px'}}>
                    <Badge.Ribbon text="Up to 10x" color="#eb2f96">
                        <Card loading={isCardloading}>
                            <RocketTwoTone style={{fontSize:'350%', marginBottom:'5px'}}/>
                            <Title level={4}>Super Fast</Title>
                            <Col xs={0} sm={0} md={24} lg={24} xl={24}>
                                <Text>Machine codes faster,<br/>With much more accuracy!</Text>   
                            </Col>
                        </Card>
                    </Badge.Ribbon>
                </Col>
                <Col className='featuresCard' xs={11} sm={11} md={11} lg={11} xl={4} xxl={4} style={{textAlign:'center', marginBottom:'20px'}}>                    
                    <Card loading={isCardloading}>
                        <CodeTwoTone style={{fontSize:'350%', marginBottom:'5px'}}/>
                        <Title level={4}>Clean</Title>
                        <Col xs={0} sm={0} md={24} lg={24} xl={24}>
                            <Text>Machine knows how to code, <br/>And make it reusable!</Text>   
                        </Col>
                    </Card>                    
                </Col>
                <Col className='featuresCard' xs={11} sm={11} md={11} lg={11} xl={4} xxl={4} style={{textAlign:'center', marginBottom:'20px'}}>
                    <Card loading={isCardloading}>
                        <SafetyCertificateTwoTone style={{fontSize:'350%', marginBottom:'5px'}}/>
                        <Title level={4}>Safe</Title>
                        <Col xs={0} sm={0} md={24} lg={24} xl={24}>
                            <Text>Machine won't steal your idea, <br/> Isn't it great?</Text>   
                        </Col>
                    </Card>
                </Col>
            </Row>
            <Row style={{margin:"5%"}} justify="start">
                <Divider orientation='left'>
                    <Title level={3}>How it works?</Title>
                </Divider>
                <Progress
                    strokeColor={{
                        from: '#108ee9',
                        to: '#87d068',
                    }}
                    percent={currentStepPercent}
                    status="active"
                />
                <Row style={{marginTop:"15px"}}>
                    <Steps direction="vertical" current={currentStep}>
                        <Step title="A Great Idea" description="Do you have a million dollar idea in your mind, or a coding project to do? If you have anything which relates to coding, you don't have to worry anymore!" />
                        <Step title="Focus on your Idea/Project" description="Don't worry about the code, just: 'Think, Imagine, and Structuralize'. You should solve the problem only in your mind, leave the coding part to The Machine." />
                        <Step title="Let The Machine Code" description="Once you know what you want, the machine will commence the coding part! It won't take a lot of time for The Machine to convert your mind to clean, reusable, and fully-functional code!" />
                        <Step title="It's Done!" description="You have the code in your hand. Now, it's time to deploy it. The Machine can do it for you too!" />
                    </Steps>
                </Row>
            </Row>
            <Row style={{marginTop:"5%"}} justify="start">
                <Divider orientation='center'>
                    <Title level={3}><SettingTwoTone /> Supported Tools</Title>
                </Divider>
            </Row>
            <Row style={{marginBottom:"5%"}} justify='space-around' align='middle'>
                <Col className='featuresCard' xs={23} sm={23} md={23} lg={23} xl={11} xxl={11} style={{marginTop:'1%'}}>
                    <Card title="Front-End" extra={<a href="/autofront">More</a>}>
                        <Row justify='space-around' align='middle'>
                            <Tooltip title="HTML5">
                                <FontAwesomeIcon style={{fontSize:'4em', color:'orange'}} icon={faHtml5}/>
                            </Tooltip>
                            <Tooltip title="CSS3">
                                <FontAwesomeIcon style={{fontSize:'4em', color:'blue'}} icon={faCss3}/>
                            </Tooltip>
                            <Tooltip title="JavaScript">
                                <FontAwesomeIcon style={{fontSize:'4em', color:'#fadb14'}} icon={faJs}/>
                            </Tooltip>
                            <Tooltip title="React">
                                <FontAwesomeIcon style={{fontSize:'4em', color:'#69c0ff'}} icon={faReact}/>
                            </Tooltip>
                            <Badge dot={true}>
                                <Tooltip title="VueJS -Soon!">
                                        <FontAwesomeIcon style={{fontSize:'4em', color:'gray'}} icon={faVuejs}/>
                                   
                                </Tooltip>
                            </Badge>   
                        </Row>
                    </Card>
                </Col>
                <Col className='featuresCard' xs={23} sm={23} md={23} lg={23} xl={11} xxl={11} style={{marginTop:'1%'}}>
                    <Badge.Ribbon placement='end' text="Soon!">
                        <Card title="Back-End">
                            <Row justify='space-around' align='middle'>
                                <Tooltip title="NodeJS">
                                    <FontAwesomeIcon style={{fontSize:'4em', color:'gray'}} icon={faNodeJs}/>
                                </Tooltip>
                                <Tooltip title="PHP">
                                    <FontAwesomeIcon style={{fontSize:'4em', color:'gray'}} icon={faPhp}/>
                                </Tooltip>
                                <Tooltip title="Python">
                                    <FontAwesomeIcon style={{fontSize:'4em', color:'gray'}} icon={faPython}/>
                                </Tooltip>
                                <Tooltip title="Java">
                                    <FontAwesomeIcon style={{fontSize:'4em', color:'gray'}} icon={faJava}/>
                                </Tooltip>
                            </Row>
                        </Card>
                    </Badge.Ribbon>
                </Col>
                <Col className='featuresCard' xs={10.5} sm={11} md={7} lg={5} xl={5} xxl={5} style={{marginTop:'1%'}}>
                    <Badge.Ribbon placement='end' text="Soon!">
                        <Card title="Machine Learning">
                            <Row justify='space-around' align='middle'>
                                <Tooltip title="Python">
                                    <FontAwesomeIcon style={{fontSize:'4em', color:'gray'}} icon={faPython}/>
                                </Tooltip>
                            </Row>
                        </Card>
                    </Badge.Ribbon>
                </Col>
                <Col className='featuresCard' xs={10.5} sm={11} md={7} lg={5} xl={5} xxl={5} style={{marginTop:'1%'}}>
                    <Badge.Ribbon placement='end' text="Soon!">
                        <Card title="Data Analysis">
                            <Row justify='space-around' align='middle'>
                                <Tooltip title="Python">
                                    <FontAwesomeIcon style={{fontSize:'4em', color:'gray'}} icon={faPython}/>
                                </Tooltip>
                                <Tooltip title="R Project">
                                    <FontAwesomeIcon style={{fontSize:'4em', color:'gray'}} icon={faRProject}/>
                                </Tooltip>
                            </Row>
                        </Card>
                    </Badge.Ribbon>
                </Col>
                <Col className='featuresCard' xs={23} sm={23} md={9} lg={10} xl={11} xxl={11} style={{marginTop:'1%'}}>
                    <Badge.Ribbon placement='end' text="Soon!">
                        <Card title="Mobile Dev">
                            <Row justify='space-around' align='middle'>
                                <Tooltip title="Python">
                                    <FontAwesomeIcon style={{fontSize:'4em', color:'gray'}} icon={faJava}/>
                                </Tooltip>
                                <Tooltip title="R Project">
                                    <FontAwesomeIcon style={{fontSize:'4em', color:'gray'}} icon={faSwift}/>
                                </Tooltip>
                                <Tooltip title="R Project">
                                    <FontAwesomeIcon style={{fontSize:'4em', color:'gray'}} icon={faJs}/>
                                </Tooltip>
                                <Tooltip title="R Project">
                                    <FontAwesomeIcon style={{fontSize:'4em', color:'gray'}} icon={faPython}/>
                                </Tooltip>
                            </Row>
                        </Card>
                    </Badge.Ribbon>
                </Col>
            </Row>
        </>
    )
};
  
export default Home;