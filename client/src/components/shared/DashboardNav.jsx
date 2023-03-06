import React from 'react'
import * as n from './DashboardNavElements';

const DashboardNav = () => {
  return (
    <>
      <n.Container>
        <n.NavContainer>
          <n.NavBrand to={'/'} />
          <n.NavLinksContainer>
            {/* <li>link 1</li>          
            <li>link 2</li>           */}
          </n.NavLinksContainer>
        </n.NavContainer>
      </n.Container>
      </>
  )
}

export default DashboardNav