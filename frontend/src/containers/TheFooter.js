import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">CoreUI</a>
        <span className="ml-1">&copy; 2020 creativeLabs.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Edited by</span>
        <a href="https://twitter.com/isa_bot_" target="_blank" rel="noopener noreferrer">M Faris Isa</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
