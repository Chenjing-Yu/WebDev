import React from 'react'
//react icons
import {IconContext} from 'react-icons'
import {FaReact} from 'react-icons/fa'
import {MdAlarm} from 'react-icons/md'
//materials
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons'

export function Icons() {
  return (
    <div>
      <IconContext.Provider value={{color:'blue', size: '5em'}}>
        <FaReact />
        <MdAlarm color='purple' size='10em'/>
      </IconContext.Provider>
    </div>
  )
}

export default Icons
