import React from 'react'
import * as n from './NotFoundComponentElements';

const NotFoundComponent = () => {
    return (
        <>
            <n.Section>
                <n.Container>
                    <n.ImageContainer />
                    <n.TextContainer>
                        <n.MainTitle>
                            Opps! That Links Is Broken.
                        </n.MainTitle>
                        <n.SubTitle>
                            Page does not exist or some <br /> other error occured. Go to our <br /> Home Page
                        </n.SubTitle>
                        <n.HomeBtn to='/'>Go Home</n.HomeBtn>
                    </n.TextContainer>
                </n.Container>
            </n.Section>
        </>
    );
}

export default NotFoundComponent