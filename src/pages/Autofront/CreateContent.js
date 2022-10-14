import { Col, Layout, Menu, Typography, Row, Divider, Switch, Popover, Button, Affix, Tooltip, Select } from 'antd';
import { PlusCircleOutlined, SettingOutlined, DeleteOutlined } from '@ant-design/icons';


import React from 'react';

import MCRow from './MCRow';
import { useEffect } from 'react';
import { useState } from 'react';

const { Header, Content } = Layout;
const { Text } = Typography
const { Option } = Select

const CreateContent = (params) => {

    const [mcrows, setMcrows] = useState([])
    const [rowCounter, setRowCounter] = useState(0)
    const [pageName, setPageName] = useState("")

    const addRow = () => {
        const newRow = { pageId: params.page.id, id: rowCounter + 1, justify: 'space-around', mccols: [] }
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
        const pageSelector_query = '[data-tag="pageSelector"]'
        const pageSelector = document.querySelector(pageSelector_query);
        params.setSelectedPage(2)
        console.log(pageSelector.value)
    };


    // For animation on deleting a page
    const [loadings, setLoadings] = useState([]);
    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        let pagesAfterRemove = params.pages.filter(page => page.id != params.selectedPage)
        params.setPages([...pagesAfterRemove])
        return newLoadings;
        });
        setTimeout(() => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = false;
            return newLoadings;
        });
        }, 6000);
    };

    return (
        <div>
            {params.currentGeneralStep === 1 &&
                <Row justify='center' style={{ fontSize: '2em', textAlign: 'center', marginTop: '20%' }}>
                    <Text>Page Content Will be here in the next step!</Text>
                </Row>
            }
            {params.currentGeneralStep === 2 &&
                <div key={params.page.id}>

                    <Content style={{ minHeight: '450px', overflowY: 'auto', maxHeight: '450px' }}>
                        {
                            mcrows.filter(mcrow => mcrow.pageId == params.page.id).map(mcrow =>
                                <MCRow createContentMode={createContentMode} key={mcrow.id} mcrows={mcrows} setMcrows={setMcrows} mcrow={mcrow} />
                            )
                        }

                    </Content>
                    <Affix offsetBottom={5} style={{ textAlign: 'center', margin: '10px' }}>
                        <Row justify='center'>
                            <Row align='middle' justify='start' style={{ width: '340px', padding: '5px', backgroundColor: 'lightgray', borderRadius: '10px' }}>
                                <Col flex={"120px"}>
                                    <Select
                                        placement='topLeft'
                                        defaultValue={params.selectedPage}
                                        style={{
                                            margin: '5px',
                                            width: '120px'
                                        }}
                                        data-tag="pageSelector"
                                        onChange={(value) => {
                                            if (value !== "newPage") {
                                                console.log("Page Changes!")
                                                console.log("New page id: ", value)
                                                console.log("Now the pages is: ", params.pages)
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
                                                <Option value={page.id}>{page.id}</Option>
                                            )
                                        }
                                        <Option value={"newPage"}>{"+"}</Option>
                                    </Select>
                                </Col>
                                <Divider type="vertical" />

                                <Col flex={"auto"}>
                                    <Row style={{ border: '2px solid darkgray', padding: '2px', borderRadius: '5px' }} justify='space-around' align='middle'>
                                        <Popover
                                            content={
                                                <>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 'large' }} editable={{ onChange: setNewNameForPage }}>{pageName}</Text>
                                                    <br/>
                                                    <Button
                                                        style={{marginTop:'5px'}}
                                                        type="danger"
                                                        shape='round'
                                                        icon={<DeleteOutlined />}
                                                        loading={loadings[1]}
                                                        onClick={() => enterLoading(1)}
                                                        >
                                                        Delete Page
                                                    </Button>
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
                </div>
            }
        </div>
    )
}


export default CreateContent;