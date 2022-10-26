import { Button, Layout, Card, Typography, Drawer, Space, Input, Divider, Row, Col} from 'antd';
import {CaretUpOutlined, CaretDownOutlined} from '@ant-design/icons';

import React, {useState, useEffect } from 'react';
import MCCol from './MCCol';

import headerItem from '../../assets/AutoFront/TemplateBuilder/Items/HeaderItem.png'
import textItem from '../../assets/AutoFront/TemplateBuilder/Items/TextItem.png'
import buttonItem from '../../assets/AutoFront/TemplateBuilder/Items/ButtonItem.png'
import dividerItem from '../../assets/AutoFront/TemplateBuilder/Items/DividerItem.png'
import imageItem from '../../assets/AutoFront/TemplateBuilder/Items/ImageItem.png'
import iconItem from '../../assets/AutoFront/TemplateBuilder/Items/IconItem.png'
import formItem from '../../assets/AutoFront/TemplateBuilder/Items/FormItem.png'
import inputItem from '../../assets/AutoFront/TemplateBuilder/Items/inputItem.png'
import checkboxItem from '../../assets/AutoFront/TemplateBuilder/Items/CheckboxItem.png'
import radioItem from '../../assets/AutoFront/TemplateBuilder/Items/RadioItem.png'
import selectItem from '../../assets/AutoFront/TemplateBuilder/Items/SelectItem.png'
import treeselectItem from '../../assets/AutoFront/TemplateBuilder/Items/TreeselectItem.png'
import sliderItem from '../../assets/AutoFront/TemplateBuilder/Items/SliderItem.png'
import switchItem from '../../assets/AutoFront/TemplateBuilder/Items/SwitchItem.png'
import datepickerItem from '../../assets/AutoFront/TemplateBuilder/Items/DatepickerItem.png'
import rateItem from '../../assets/AutoFront/TemplateBuilder/Items/RateItem.png'
import cardItem from '../../assets/AutoFront/TemplateBuilder/Items/CardItem.png'
import carouselItem from '../../assets/AutoFront/TemplateBuilder/Items/CarouselItem.png'
import avatarItem from '../../assets/AutoFront/TemplateBuilder/Items/AvatarItem.png'
import calendarItem from '../../assets/AutoFront/TemplateBuilder/Items/CalendarItem.png'
import segmentItem from '../../assets/AutoFront/TemplateBuilder/Items/SegmentItem.png'
import timelineItem from '../../assets/AutoFront/TemplateBuilder/Items/TimelineItem.png'

const { Header, Content } = Layout;
const {Text} = Typography
const { Meta } = Card;

const DrawerItems = (params) => {
    
    

    return (
        <Drawer
                title={"Items"}
                height={params.sizeOfModal}
                placement={'bottom'}
                width={600}
                onClose={params.closeModal}
                open={params.openModal}
                extra={
                <Space style={{width:200}}>
                    <Input.Search
                            width="100%"
                            allowClear
                            placeholder="Search Here..."
                    />
                    {params.sizeOfModal==="378px" && 
                        <CaretUpOutlined onClick={()=>params.setSizeofModal('528px')} />
                    }
                    {params.sizeOfModal==="528px" &&
                        <CaretDownOutlined onClick={()=>params.setSizeofModal('378px')} />
                    }
                </Space>
                }
            >
                <Row gutter={[24,24]}>
                    
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Card
                            hoverable
                            cover={<img alt="Header Component" src={headerItem}/>}
                        >
                            <Meta title="Header"/>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Card
                            hoverable
                            cover={<img alt="Text Component" src={textItem}/>}
                        >
                            <Meta title="Text"/>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Card
                            hoverable
                            cover={<img alt="Button Component" src={buttonItem}/>}
                        >
                            <Meta title="Button"/>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Card
                            hoverable
                            cover={<img alt="Divider Component" style={{backgroundColor:'white'}} src={dividerItem}/>}
                        >
                            <Meta title="Divider"/>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Card
                            hoverable
                            cover={<img alt="Image Component" src={imageItem}/>}
                        >
                            <Meta title="Image"/>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Card
                            hoverable
                            cover={<img alt="Icon Component" src={iconItem}/>}
                        >
                            <Meta title="Icon"/>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3}> 
                        <Card
                            hoverable
                            cover={<img alt="Form Component" src={formItem}/>}
                        >
                            <Meta title="Form"/>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Card
                            hoverable
                            cover={<img alt="Input Component" src={inputItem}/>}
                        >
                            <Meta title="Text Input"/>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Card
                            hoverable
                            cover={<img alt="Checkbox Component" src={checkboxItem}/>}
                        >
                            <Meta title="Checkbox"/>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Card
                            hoverable
                            cover={<img alt="Radio Component" src={radioItem}/>}
                        >
                            <Meta title="Radio"/>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Card
                            hoverable
                            cover={<img alt="Select Component" src={selectItem}/>}
                        >
                            <Meta title="Select"/>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Card
                            hoverable
                            cover={<img alt="Treeselect Component" src={treeselectItem}/>}
                        >
                            <Meta title="Tree Select"/>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Card
                            hoverable
                            cover={<img alt="Segmented Component" src={segmentItem}/>}
                        >
                            <Meta title="Segment"/>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Card
                            hoverable
                            cover={<img alt="Slider Component" src={sliderItem}/>}
                        >
                            <Meta title="Slider"/>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Card
                            hoverable
                            cover={<img alt="Switch Component" src={switchItem}/>}
                        >
                            <Meta title="Switch"/>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Card
                            hoverable
                            cover={<img alt="Calendar Component" src={calendarItem}/>}
                        >
                            <Meta title="Calendar"/>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Card
                            hoverable
                            cover={<img alt="Date Picker Component" src={datepickerItem}/>}
                        >
                            <Meta title="Date Pick"/>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Card
                            hoverable
                            cover={<img alt="Timeline Component" src={timelineItem}/>}
                        >
                            <Meta title="Timeline"/>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Card
                            hoverable
                            cover={<img alt="Rate Component" src={rateItem}/>}
                        >
                            <Meta title="Rate"/>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Card
                            hoverable
                            cover={<img alt="Card Component" src={cardItem}/>}
                        >
                            <Meta title="Card"/>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Card
                            hoverable
                            cover={<img alt="Carousel Component" src={carouselItem}/>}
                        >
                            <Meta title="Carousel"/>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Card
                            hoverable
                            cover={<img alt="Avatar Component" src={avatarItem}/>}
                        >
                            <Meta title="Avatar"/>
                        </Card>
                    </Col>
                    
                    
                </Row>

        </Drawer>
    )
}


export default DrawerItems;