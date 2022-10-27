import { Col, Layout, Menu, Typography, Row, Divider, Switch, Popover, Button, Affix, Tooltip, Select, Popconfirm, message } from 'antd';
import { PlusCircleOutlined, SettingOutlined, DeleteOutlined, FullscreenOutlined, FullscreenExitOutlined, DragOutlined } from '@ant-design/icons';


import React, { useRef } from 'react';

import MCRow from './MCRow';
import { useEffect } from 'react';
import { useState } from 'react';
import { faL } from '@fortawesome/free-solid-svg-icons';

import Draggable from 'react-draggable';

import { useCookies } from 'react-cookie';

const { Header, Content } = Layout;
const { Text } = Typography
const { Option } = Select

const CreateContent = (params) => {
    // Cookies functionality
    const [cookies, setCookie, removeCookie] = useCookies();

    const [mcrows, setMcrows] = useState([])
    const [rowCounter, setRowCounter] = useState(0)
    const [pageName, setPageName] = useState("")

    const addRow = () => {
        const newRow = { pageId: params.page.id, id: rowCounter + 1, justify: 'space-around', mccols: [], mccolcounter: 0 }
        setMcrows([...mcrows, newRow])
        setRowCounter(rowCounter + 1)
    }

    const [createContentMode, setCreateContentMode] = useState("Edit Mode")
    const handleCreateContentModeChange = (value) => {
        setCreateContentMode(value ? "Edit Mode" : "View Mode")
    }

    const setNewNameForPage = (value) => {
        params.page.name = value
        setPageName(params.page.name)
    }

    // For Edit Name of the Page
    const [open, setOpen] = useState(false);
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
        setPageName(params.page.name)
        // const pageSelector_query = '[data-tag="pageSelector"]'
        // const pageSelector = document.querySelector(pageSelector_query);
        // console.log(pageSelector.value)
        // params.setSelectedPage(params.pages[0].id)
    };

    // For animation on deleting a page
    const [loadings, setLoadings] = useState([]);
    const handleDeletePage = (index) => {
        if (params.pages.length > 1){
            setLoadings((prevLoadings) => {
                // To remove cookies related to this page
                let prefixForCookiesName = params.page.id + "/"
                for (const [key, value] of Object.entries(cookies)) {
                    if (key.startsWith(prefixForCookiesName)){
                        removeCookie(key)
                    }
                }
                const newLoadings = [...prevLoadings];
                newLoadings[index] = true;
                let pagesAfterRemove = params.pages.filter(page => page.id != params.selectedPage)
                params.setPages([...pagesAfterRemove])
                // BUG: If user tries to delete the first page when they have other pages available, it will crash!
                params.setSelectedPage(params.pages[0].id)
                return newLoadings;
            });
            setTimeout(() => {
                setLoadings((prevLoadings) => {
                    const newLoadings = [...prevLoadings];
                    newLoadings[index] = false;
                    setOpen(false)
                    message.success("The page deleted successfully!")
                    return newLoadings;
                });
            }, 1000);
        }else{
            message.error("You should always have at least one page. operation cancelled.")
            setOpen(false)
        }
    };


    // Full screen configs
    const [fullscreen, setFullscreen] = useState(false)
    const makeFullscreen = () => {
        if (fullscreen){
            document.querySelector('[data-tag="mainContentDiv"]').style.height = "500px"
            document.querySelector('[data-tag="mainContentDiv"]').style.maxHeight = "700px"
            document.exitFullscreen();
            setFullscreen(false)
        }else{
            setFullscreen(true)
            document.querySelector('[data-tag="mainContentDiv"]').style.maxHeight = "80vh"
            document.querySelector('[data-tag="mainContentDiv"]').style.height = "80vh"
            document.querySelector('[data-tag="mainLayout"]').requestFullscreen()
        }
        
    }

    return (
        <div data-tag="contentCreator">
            {params.currentGeneralStep === 1 &&
                <Row justify='center' style={{ fontSize: '2em', textAlign: 'center', marginTop: '10%' }}>
                    <Text>Page Content Will be here in the next step!</Text>
                </Row>
            }
            {params.currentGeneralStep === 2 &&
                <div key={params.page.id} data-tag="mainContainer">

                    <Content data-tag="mainContentDiv" style={{ height: '500px', overflowY: 'auto', maxHeight: '850px' }}>
                        {
                            mcrows.filter(mcrow => mcrow.pageId == params.page.id).map(mcrow =>
                                <MCRow createContentMode={createContentMode} key={mcrow.id} mcrows={mcrows} setMcrows={setMcrows} mcrow={mcrow} />
                            )
                        }

                    </Content>
                    <Draggable>
                        <Affix offsetBottom={5} style={{ textAlign: 'center', margin: '10px',}}>
                            <Row justify='center' align='middle'>
                                <Row>
                                    <Button style={{ marginRight: '5px' }} shape="circle" icon={<DragOutlined />} />
                                    {fullscreen && 
                                        <Button style={{ marginRight: '5px' }} onClick={makeFullscreen} shape="circle" icon={<FullscreenExitOutlined />} />
                                    }
                                    {!fullscreen && 
                                        <Button style={{ marginRight: '5px' }} onClick={makeFullscreen} shape="circle" icon={<FullscreenOutlined />} />
                                    }
                                </Row>
                                <Row align='middle' justify='space-around' style={{ width: '380px', padding: '5px', backgroundColor: 'lightgray', borderRadius: '10px',boxShadow:'3px 3px gray' }}>
                                    <Col flex={"120px"}>
                                        <Select
                                            getPopupContainer={()=>document.querySelector('[data-tag="mainContainer"]')}
                                            placement='topLeft'
                                            defaultValue={params.selectedPage}
                                            style={{
                                                margin: '5px',
                                                width: '120px',
                                                zIndex:1000
                                            }}
                                            data-tag="pageSelector"
                                            onChange={(value) => {
                                                if (value !== "newPage") {
                                                    params.setSelectedPage(value)
                                                } else {
                                                    var newPageId = params.addPage()
                                                    params.setSelectedPage(newPageId)
                                                }

                                            }
                                            }
                                        >
                                            {
                                                params.pages.map(page =>
                                                    <Option value={page.id}>{page.name}</Option>
                                                )
                                            }
                                            <Option value={"newPage"}>{"+"}</Option>
                                        </Select>
                                    </Col>
                                    
                                    <Divider type="vertical" />

                                    <Col flex={"auto"}>
                                        <Row style={{ border: '2px solid darkgray', padding: '2px', borderRadius: '5px' }} justify='space-around' align='middle'>
                                            <Popover
                                                getPopupContainer={()=>document.querySelector('[data-tag="mainContainer"]')}
                                                
                                                content={
                                                    <>
                                                        <Text style={{ fontWeight: 'bold', fontSize: 'large' }} editable={{ onChange: setNewNameForPage }}>{pageName}</Text>
                                                        <br/>
                                                        <Popconfirm
                                                            getPopupContainer={()=>document.querySelector('[data-tag="mainContainer"]')}
                                                            title="Are you sure to delete this page?"
                                                            onConfirm={() => handleDeletePage(1)}
                                                            placement="rightBottom"
                                                            okText="Yes"
                                                            cancelText="No"
                                                        >
                                                            <Button
                                                                style={{marginTop:'5px'}}
                                                                type="danger"
                                                                shape='round'
                                                                icon={<DeleteOutlined />}
                                                                loading={loadings[1]}
                                                                >
                                                                Delete Page
                                                            </Button>
                                                        </Popconfirm>
                                                    </>
                                                }
                                                trigger="click"
                                                open={open}
                                                onOpenChange={handleOpenChange}
                                            >
                                                <Button style={{ marginRight: '5px' }} type="primary" shape="circle" icon={<SettingOutlined />} />
                                            </Popover>

                                            <Tooltip placement='top' title="Add a new row">
                                                <Button style={{ marginRight: '5px' }} onClick={() => addRow()} type="primary" shape="circle" icon={<PlusCircleOutlined />} />
                                            </Tooltip>
                                            <Switch
                                                checked={createContentMode === "Edit Mode"}
                                                onChange={handleCreateContentModeChange}
                                                checkedChildren="Edit Mode"
                                                unCheckedChildren="View Mode"
                                            />
                                        </Row>
                                    </Col>
                                </Row>
                            </Row>
                        </Affix>
                    </Draggable>
                </div>
            }
        </div>
    )
}


export default CreateContent;