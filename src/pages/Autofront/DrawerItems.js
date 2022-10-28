import { Button, Layout, Card, Typography, Drawer, Space, Input, Divider, Row, Col, Slider, message} from 'antd';
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
import tableItem from '../../assets/AutoFront/TemplateBuilder/Items/TableItem.png'
import alerttextItem from '../../assets/AutoFront/TemplateBuilder/Items/AlerttextItem.png'


const { Header, Content } = Layout;
const {Text} = Typography
const { Meta } = Card;

const listOfItems = [
    {id:1, title:'Header', alt:'Header Component', src:headerItem },
    {id:2, title:'Text', alt:'Header Component', src:textItem },
    {id:3, title:'Alert Text', alt:'Alert Text Component', src:alerttextItem },
    {id:4, title:'Button', alt:'Button Component', src:buttonItem },
    {id:5, title:'Divider', alt:'Divider Component', src:dividerItem },
    {id:6, title:'Image', alt:'Image Component', src:imageItem },
    {id:7, title:'Icon', alt:'Icon Component', src:iconItem },
    {id:8, title:'Form', alt:'Form Component', src:formItem },
    {id:9, title:'Text Input', alt:'Text Input Component', src:inputItem },
    {id:10, title:'Checkbox', alt:'Checkbox Component', src:checkboxItem },
    {id:11, title:'Radio', alt:'Radio Component', src:radioItem },
    {id:12, title:'Select', alt:'Select Component', src:selectItem },
    {id:13, title:'Tree Select', alt:'Tree Select Component', src:treeselectItem },
    {id:18, title:'Segment', alt:'Segmented Component', src:segmentItem },
    {id:14, title:'Slider', alt:'Slider Component', src:sliderItem },
    {id:15, title:'Switch', alt:'Switch Component', src:switchItem },
    {id:16, title:'Table', alt:'Table Component', src:tableItem },
    {id:17, title:'Calendar', alt:'Calendar Component', src:calendarItem },
    {id:19, title:'Date Picker', alt:'Date Picker Component', src:datepickerItem },
    {id:20, title:'Timeline', alt:'Timeline Component', src:timelineItem },
    {id:21, title:'Rate', alt:'Rate Component', src:rateItem },
    {id:22, title:'Card', alt:'Slider Component', src:cardItem },
    {id:23, title:'Carousel', alt:'Slider Component', src:carouselItem },
    {id:24, title:'Avatar', alt:'Slider Component', src:avatarItem },

    

]

const DrawerItems = (params) => {
    
    const [mainListOfItems, setMainListOfItems] = useState(listOfItems)
    const handleSearchComponents = (e) => {
        let newList = listOfItems.filter(item=>item.title.toLowerCase().includes(e.target.value.toLowerCase())==true)
        setMainListOfItems([...newList])
    }
    

    return (
        <Drawer
            getContainer={()=>document.querySelector('[data-tag="mainContainer"]')}
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
                        onChange={handleSearchComponents}
                />
                {params.sizeOfModal==="378px" && 
                    <CaretUpOutlined onClick={()=>params.setSizeofModal('528px')} />
                }
                {params.sizeOfModal==="528px" &&
                    <CaretDownOutlined onClick={()=>params.setSizeofModal('378px')} />
                }
            </Space>
                }>

                <Row gutter={[24,24]}>
                    

                    {
                        mainListOfItems.map(item=>{
                            return(
                                <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
                                    <Card
                                        onClick={()=>{
                                            params.mccol.mccomponent = item.id
                                            params.setMccols([...params.mccols])
                                            console.log("I am from drawer: ", item.id)
                                        }}
                                        hoverable
                                        cover={<img alt={item.alt} src={item.src}/>}
                                    >
                                        <Meta title={item.title}/>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                    
                    
                </Row>

        </Drawer>
    )
}


export default DrawerItems;