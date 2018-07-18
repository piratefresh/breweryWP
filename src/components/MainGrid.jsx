import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

// Images
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'

const GridWrapper = styled.div`
    width: 100%;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(110px,330px));
    grid-auto-rows: minmax(110px,330px);
    grid-auto-flow: dense;
    img {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
    @media (max-width: 700px){
        grid-template-columns: repeat(2, minmax(110px,330px));
    }
    @media (max-width: 450px){
        grid-template-columns: 1fr;
    }
`

const MainGrid = () => (
    <GridWrapper>
        <Grid>
            <img src={img1} className='span-2column' alt="" srcset="" />
            <img src={img2} alt="" srcset="" />
            <img src={img3} alt="" srcset="" />
            <img src={img4} alt="" srcset="" />
            <img src={img1} alt="" srcset="" />
            <img src={img2} alt="" srcset="" />
            <img src={img3} className='span-2row' alt="" srcset="" />
            <img src={img4} alt="" srcset="" />
            <img src={img1} alt="" srcset="" />
            <img src={img1} alt="" srcset="" />
        </Grid>
    </GridWrapper>
)

export default MainGrid;