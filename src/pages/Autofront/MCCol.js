import { Col, Layout, Menu, Typography, Row, Select, Popover, Drawer, Space, Input } from 'antd';
import {DeleteOutlined, SettingOutlined, PlusOutlined, CaretUpOutlined, CaretDownOutlined} from '@ant-design/icons';

import React, {useState, useEffect } from 'react';
const { Header, Content } = Layout;
const {Option} = Select
const {Text} = Typography

const MCCol = (params) => {
    const handleRemoveMCCol = (e) => {
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



    // Handle the Modal for choosing the component
    const [openModal, setOpenModal] = useState(false);
    const [sizeOfModal, setSizeofModal] = useState('default')
    const showModal = () => {
        setOpenModal(true);
    };

    const closeModal = () => {
        setOpenModal(false);
    };


    return (
        <Col style={{minHeight:'150px', minWidth:'100px', margin:'5px', border:'1px solid', borderRadius:'5px',borderColor:'gray'}} xs={{span:params.mccol.spanSmall}} sm={{span:params.mccol.spanSmall}} md={{span:params.mccol.spanBig}} lg={{span:params.mccol.spanBig}} xl={{span:params.mccol.spanBig}} xxl={{span:params.mccol.spanBig}}>    
            <Row justify='start' align='middle'>
                {params.createContentMode == "Edit Mode" &&
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
                }
        
            </Row>
            <Row justify='center' align='middle' style={{marginTop:'25px'}}>
                <PlusOutlined onClick={showModal} style={{fontSize:'2em', cursor:'pointer', color:'blue', border:'2px solid blue', borderRadius:'5px'}}/>
            </Row>
            <Drawer
                title={"Items"}
                size={sizeOfModal}
                placement={'bottom'}
                width={600}
                onClose={closeModal}
                open={openModal}
                extra={
                <Space style={{width:200}}>
                    <Input.Search
                            width="100%"
                            allowClear
                            placeholder="Search Here..."
                    />
                    {sizeOfModal==="default" && 
                        <CaretUpOutlined onClick={()=>setSizeofModal('large')} />
                    }
                    {sizeOfModal==="large" &&
                        <CaretDownOutlined onClick={()=>setSizeofModal('default')} />
                    }
                </Space>
                }
            >
                <Text>{params.mccol.id}</Text>
            </Drawer>

        </Col>
    )
}


export default MCCol;