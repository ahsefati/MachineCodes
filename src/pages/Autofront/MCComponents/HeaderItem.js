import {Typography} from 'antd';
import React, {useEffect, useState } from 'react';

import { useCookies } from 'react-cookie';

const {Text, Title} = Typography

const HeaderItem = (params) => {
    // Cookies of this Item (Component)
    const [cookies, setCookie, removeCookie] = useCookies();

    let prefixForCookiesName = params.mcrow.pageId + "/" + params.mcrow.id + "/" + params.mccol.id

    
    const [headerItemCookies, setHeaderItemCookies] = useState( {...cookies[prefixForCookiesName]}|| {
        'headerText': 'Change!',
        'headerSize': '12px',
        'headerColor': 'black',
        'headerBackgroundColor': 'inherit',
        'headerBorder': '0px',
        'headerBorderRadius': '0px',
        'headerFont':'Times New Roman (serif)'
    })

    // if(cookies[prefixForCookiesName]){
    //     // console.log({...cookies[prefixForCookiesName]})
    //     // setHeaderItemCookies({...cookies[prefixForCookiesName]})
    // }
    console.log(headerItemCookies["headerText"])
    useEffect(()=>{
        console.log("I am going to save to the cookies...")
        let cookieStr = JSON.stringify(headerItemCookies)
        console.log("To Save: ", cookieStr)
        setCookie(prefixForCookiesName, cookieStr)
    },[headerItemCookies])

    //     setHeaderItemCookies([rawFeatures])
    // }
    // setHeaderItemCookies({...rawFeatures})
    // setCookie(prefixForCookiesName, JSON.stringify(headerItemCookies))
    


    return (
        <>
            {params.createContentMode === "Edit Mode" &&
                <Title style={{fontSize:'calc(16px + 2vw)'}} editable={{onChange: (value) => setHeaderItemCookies({...headerItemCookies, "headerText":value})}}>{headerItemCookies["headerText"]==null?"change!":headerItemCookies["headerText"]}</Title>
            }

            {/* {params.createContentMode === "View Mode" &&
                <Title style={{fontSize:'calc(16px + 2vw)'}}>{titleText}</Title>
            } */}
        </>
    )
}


export default HeaderItem;