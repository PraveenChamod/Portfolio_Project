import { useState,useEffect } from "react";
import styled from "styled-components";
import { FaArrowUp } from 'react-icons/fa';
const ScrollToTop = () => {

    const Icon = styled.div`
        &{
            position: fixed;
            bottom: 20px;
            right: 20px;
            font-size: 10px;
            cursor: pointer;
            border: none;
            color: #fff;
            background: linear-gradient(to right, #29e2cc, #00badc);
            z-index: 4;
            border-radius: 50%;
            width: 25px;
            height: 25px;
            display: flex;
            justify-content: center;
            align-items: center;

    }
    &:active{
        transform: scale(0.8);
    }
    @media screen and (max-width:800px){
            bottom: 20px;
            right: 10px;
            width: 35px;
            height: 35px;
            font-size: 18px;
    }
    `

    const[ScrollToTop,setScrollToTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.pageYOffset > 200){
                setScrollToTop(true);
            }
            else{
                setScrollToTop(false)
            }
        })
    }, [])
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return ( 
        <div>
            {ScrollToTop && <Icon onClick = {scrollToTop}>
                    <FaArrowUp/>
                </Icon> }
        </div>
     );
}
 
export default ScrollToTop;