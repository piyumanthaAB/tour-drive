import React from 'react'
import * as o from './SingleTourOverviewElements';
import { GoPrimitiveDot } from "react-icons/go";
import { BiPurchaseTag } from "react-icons/bi";
import { TbTag } from "react-icons/tb";
import { AiOutlineCompass } from "react-icons/ai";
import axios from 'axios'

const SIngleTourOverview = () => {

    const onCheckout = async() => {
        
        const tourData = {
            name: 'sample-tour-1',
            price:'20'
        }

        try {
            const res = await axios.post('/api/v1/booking/create-checkout-session', { tourData })
            
            if (res.status === 201) {
                window.location.href = res.data.data.url;
            }
        } catch (error) {
            console.log(error.response.data);
        }

    }

    return (
        <>
            <o.OverviewSection>
                
                <o.TourBookingContainer>
                    
                    <o.BookingTopContainer>
                        
                        <o.PriceTagContainer>
                            <o.IconContainer color='var(--main-color)' fontsize={'3rem'}>
                                <TbTag />
                            </o.IconContainer>
                            <o.Text margin={'0 1rem'} fontsize={'2rem'} fontweight={'600'}> From</o.Text>
                        </o.PriceTagContainer>

                        <o.Text color='#00bb98' margin={'2rem 1rem'} fontsize={'4rem'} fontweight={'600'}> $339.99</o.Text>
                    </o.BookingTopContainer>

                    {/* <o.HR /> */}

                    <o.BookingBodyContainer>
                        <o.Group>
                            <o.Text color='#555' margin={'1rem 1rem'} fontsize={'1.8rem'} fontweight={'600'}> Check In</o.Text>
                            <o.DateInput type={'date'} />

                        </o.Group>
                        <o.Group>
                            <o.Text color='#555' margin={'1rem 1rem'} fontsize={'1.8rem'} fontweight={'600'}> Check Out</o.Text>
                            <o.DateInput type={'date'} />

                        </o.Group>
                        <o.Group>
                            <o.Text color='#555' margin={'1rem 1rem'} fontsize={'1.8rem'} fontweight={'600'}> Available Seats</o.Text>
                            <o.Banner>
                                <o.Text fontfamily={'var(--secondary-font)'} color='#555' fontsize={'1.5rem'} fontweight={'500'}> 10</o.Text>
                            </o.Banner>
                        </o.Group>
                        


                    </o.BookingBodyContainer>

                    <o.BookNowBtn onClick={onCheckout}>
                        <o.Text color='#fff' margin='0 1rem 0 0' fontsize={'1.7rem'} fontweight='600'>Book Now</o.Text>
                        <o.IconContainer color='#fff' fontsize={'2rem'}>
                            <AiOutlineCompass />
                        </o.IconContainer>
                    </o.BookNowBtn>

                </o.TourBookingContainer>
                
                
                <o.OverviewContainer>
                    <o.Text margin={'1rem 0 2rem 0'} color='#222' fontsize={'4.5rem'} fontweight={'700'} >Overview</o.Text>
                    <o.Text margin={'1rem 0 4rem 0'} color='#333' fontsize={'1.7rem'} fontweight={'500'} fontfamily={'var(--primary-font)'}>
                        The secret journey of Tonkin is designed for travelers who want to touch,
                        taste and feel the souls of Northern Vietnam through their unique highlights and experiences.
                        More than simple whirlwind tours, the secret journey of Tonkin of Tonkin marry iconic destinations
                        and must-see spots with the hidden corners and below-the-skin experiences to discover some of the famous
                        and unique places around the Halong region.
                    </o.Text>
                    <o.Text margin={'1rem 0 4rem 0'} color='#333' fontsize={'1.7rem'} fontweight={'500'} fontfamily={'var(--primary-font)'}>
                        Comprised of a dozen islands in the Discovery Passage between Vancouver Island and the mainland in British Columbia, we will take you kayaking throughout this sparsely inhabited remote group of islands on this kayaking tour.
                    </o.Text>
                    <o.Text margin={'1rem 0 4rem 0'} color='#333' fontsize={'1.7rem'} fontweight={'500'} fontfamily={'var(--primary-font)'}>
                        Paddling around the islands provides the ideal way to get close to nature and be completely enveloped in the beauty of towering trees, remote beaches, and mountains. Discover the wildlife that inhabit this region and the secrets of British Columbia’s rich and plentiful inter-tidal life while exploring magical waterways.‍
                    </o.Text>
                </o.OverviewContainer>
                <o.TourHighlightContainer>
                    <o.Text margin={'1rem 0 2rem 0'} color='#222' fontsize={'2.5rem'} fontweight={'600'} >Tour Highlights</o.Text>
                    
                    <o.HighLightRow>
                        <o.IconContainer fontsize={'1.8rem'} color='var(--main-color)'>
                            <GoPrimitiveDot />
                        </o.IconContainer>
                        <o.Text fontsize={'1.7rem'} margin={'1rem 2rem '} >
                            Be enveloped in the beauty of towering trees, remote beaches, and mountains of the Canadian wilderness
                        </o.Text>
                    </o.HighLightRow>
                    <o.HighLightRow>
                        <o.IconContainer fontsize={'1.8rem'} color='var(--main-color)'>
                            <GoPrimitiveDot />
                        </o.IconContainer>
                        <o.Text fontsize={'1.7rem'} margin={'1rem 2rem '} >
                            Have close encounters with BC’s coastal wildlife; sea lions, seals, pacific white sided dolphins, otters, birds and some of the largest starfish in the world
                        </o.Text>
                    </o.HighLightRow>
                    <o.HighLightRow>
                        <o.IconContainer fontsize={'1.8rem'} color='var(--main-color)'>
                            <GoPrimitiveDot />
                        </o.IconContainer>
                        <o.Text fontsize={'1.7rem'} margin={'1rem 2rem '} >
                            Be on the lookout for Humpback whales that have made a strong resurgence in the Discovery Islands
                        </o.Text>
                    </o.HighLightRow>
                    <o.HighLightRow>
                        <o.IconContainer fontsize={'1.8rem'} color='var(--main-color)'>
                            <GoPrimitiveDot />
                        </o.IconContainer>
                        <o.Text fontsize={'1.7rem'} margin={'1rem 2rem '} >
                            Coastal cuisine designed by a local gourmet chef
                        </o.Text>
                    </o.HighLightRow>
                    <o.HighLightRow>
                        <o.IconContainer fontsize={'1.8rem'} color='var(--main-color)'>
                            <GoPrimitiveDot />
                        </o.IconContainer>
                        <o.Text fontsize={'1.7rem'} margin={'1rem 2rem '} >
                            Quality expedition tents & warm sleeping bags all included in the price of the trip
                        </o.Text>
                    </o.HighLightRow>

                </o.TourHighlightContainer>
            </o.OverviewSection>
          
        </>
    );
}

export default SIngleTourOverview