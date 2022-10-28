import { Col, Layout, Menu, Typography, Row, Select, Popover, Drawer, Space, Input, Divider } from 'antd';
import {DeleteOutlined, SettingOutlined, PlusOutlined, FormOutlined} from '@ant-design/icons';

import React, {useState, useEffect } from 'react';
import DrawerItems from './DrawerItems';

import { useCookies } from 'react-cookie';

// import all the items
import HeaderItem from './MCComponents/HeaderItem';

const { Header, Content } = Layout;
const {Option} = Select
const {Text} = Typography


const MCCol = (params) => {
    // For Cookies functionality
    const [cookies, setCookie, removeCookie] = useCookies();

    const handleRemoveMCCol = (e) => {
        // To remove cookies related to this column
        let prefixForCookiesName = params.mcrow.pageId + "/" + params.mcrow.id + "/" + params.mccol.id
        for (const [key, value] of Object.entries(cookies)) {
            if (key.startsWith(prefixForCookiesName)){
                removeCookie(key)
            }
        }


        const toRemove = e.currentTarget.dataset.tag
        console.log("From me: ",toRemove)
        params.setMccols(params.mccols.filter((mccol)=>(mccol.id != toRemove)))
        setOpen(false);
    }

    // For setting of column popover
    const [open, setOpen] = useState(false);

    const handleScaleChangeBig = (value) => {
        params.mccol.spanBig = value
        params.setMccols([...params.mccols])
    };

    const handleScaleChangeSmall = (value) => {
        params.mccol.spanSmall = value
        params.setMccols([...params.mccols])
    };
    
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };




    // Handle the Modal for choosing the component (item)
    const [openModal, setOpenModal] = useState(false);
    const [sizeOfModal, setSizeofModal] = useState('378px')
    const showModal = () => {
        setOpenModal(true);
    };

    const closeModal = () => {
        setOpenModal(false);
    };


    // Hanlde the Modal for Setting of the selected component (item)
    const [openSettingPanel, setOpenSettingPanel] = useState(false);
    const showSettingPanel = () => {
        setOpenSettingPanel(true);
    };

    const closeSettingPanel = () => {
        setOpenSettingPanel(false);
    };

    return (
        <Col style={{minHeight:'150px', minWidth:'100px', margin:'5px', border:params.createContentMode == "Edit Mode"?'1px solid':'0px', borderRadius:'5px',borderColor:'gray'}} xs={{span:params.mccol.spanSmall}} sm={{span:params.mccol.spanSmall}} md={{span:params.mccol.spanBig}} lg={{span:params.mccol.spanBig}} xl={{span:params.mccol.spanBig}} xxl={{span:params.mccol.spanBig}}>    
            <Row justify='start' align='middle'>
                {params.createContentMode == "Edit Mode" &&
                    <Row align='middle'>
                        <Popover
                            getPopupContainer={()=>document.querySelector('[data-tag="mainContainer"]')}
                            content={
                                <>
                                <DeleteOutlined data-tag={params.mccol.id} onClick={handleRemoveMCCol} style={{cursor:'pointer', margin:'5px'}}/>
                                <Text>Big Screen:</Text>
                                <Select
                                    getPopupContainer={()=>document.querySelector('[data-tag="mainContainer"]')}
                                    defaultValue={params.mccol.spanBig}
                                    style={{
                                        width: 60,
                                        margin:'5px'
                                    }}
                                    onChange={handleScaleChangeBig}
                                    >
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                    <Option value="3">3</Option>
                                    <Option value="4">4</Option>
                                    <Option value="5">5</Option>
                                    <Option value="6">6</Option>
                                    <Option value="7">7</Option>
                                    <Option value="8">8</Option>
                                    <Option value="9">9</Option>
                                    <Option value="10">10</Option>
                                    <Option value="11">11</Option>
                                    <Option value="12">12</Option>
                                    <Option value="13">13</Option>
                                    <Option value="14">14</Option>
                                    <Option value="15">15</Option>
                                    <Option value="16">16</Option>
                                    <Option value="17">17</Option>
                                    <Option value="18">18</Option>
                                    <Option value="19">19</Option>
                                    <Option value="20">20</Option>
                                    <Option value="21">21</Option>
                                    <Option value="22">22</Option>
                                    <Option value="23">23</Option>
                                    <Option value="24">24</Option>
                                </Select>
                                <Text>Small Screen:</Text>
                                <Select
                                    getPopupContainer={()=>document.querySelector('[data-tag="mainContainer"]')}
                                    defaultValue={params.mccol.spanSmall}
                                    style={{
                                        width: 60,
                                        margin:'5px'
                                    }}
                                    onChange={handleScaleChangeSmall}
                                    >
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                    <Option value="3">3</Option>
                                    <Option value="4">4</Option>
                                    <Option value="5">5</Option>
                                    <Option value="6">6</Option>
                                    <Option value="7">7</Option>
                                    <Option value="8">8</Option>
                                    <Option value="9">9</Option>
                                    <Option value="10">10</Option>
                                    <Option value="11">11</Option>
                                    <Option value="12">12</Option>
                                    <Option value="13">13</Option>
                                    <Option value="14">14</Option>
                                    <Option value="15">15</Option>
                                    <Option value="16">16</Option>
                                    <Option value="17">17</Option>
                                    <Option value="18">18</Option>
                                    <Option value="19">19</Option>
                                    <Option value="20">20</Option>
                                    <Option value="21">21</Option>
                                    <Option value="22">22</Option>
                                    <Option value="23">23</Option>
                                    <Option value="24">24</Option>
                                </Select>
                                </>
                        
                            }
                            title="Setting"
                            trigger="click"
                            open={open}
                            onOpenChange={handleOpenChange}
                            >
                                <SettingOutlined style={{cursor:'pointer', margin:'5px'}} />
                        </Popover>
                        <Divider type='vertical'/>
                        {params.mccol.mccomponent !==null &&
                            <Row justify='center'>
                                <DeleteOutlined onClick={()=>{
                                        params.mccol.mccomponent=null
                                        params.setMccols([...params.mccols])
                                    }} 
                                    style={{cursor:'pointer', margin:'5px'}}
                                />
                                <FormOutlined onClick={showSettingPanel} style={{cursor:'pointer', margin:'5px'}} />
                            </Row>
                            
                        }
                    </Row>
                }
        
            </Row>

            {/* If no component is selected yet, show + sign to add one */}
            {params.mccol.mccomponent ===null &&
                <Row justify='center' align='middle' style={{marginTop:'25px'}}>
                    <PlusOutlined onClick={showModal} style={{fontSize:'2em', cursor:'pointer', color:'blue', border:'2px solid blue', borderRadius:'5px'}}/>
                </Row>
            }
            
            <DrawerItems mccols={params.mccols} setMccols={params.setMccols} mccol={params.mccol} sizeOfModal={sizeOfModal} setSizeofModal={setSizeofModal} openModal={openModal} closeModal={closeModal} />


            {/* Actual Component that this MCColumn will have: */}
            {params.mccol.mccomponent===1 &&
                <Row justify='center' align='middle'>
                    <HeaderItem openSettingPanel={openSettingPanel} closeSettingPanel={closeSettingPanel} mcrow={params.mcrow} mccol={params.mccol} createContentMode={params.createContentMode}/>
                </Row>
            }


        </Col>
    )
}


export default MCCol;