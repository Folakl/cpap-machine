import React from 'react'
import Cpapforsleep from '../component/Cpapforsleep'
import Manual from '../component/Manual'
import Topmostpopular from '../component/Topmostpopular'
import Typesofsleepapnea from '../component/Typesofsleepapnea'
import Sleep from '../component/Sleep'
import Whatdoyouneed from '../component/Whatdoyouneed'
import Yourneed from '../component/Yourneed'
import Stayintouch from '../component/Stayintouch'
import Resmed from '../component/Resmed'
import Footer from '../component/Footer'


const CpapMachines = () => {
  return (
    <div>
      <div>
      <Cpapforsleep/>
      </div>
      <div>
      <Manual/>
      </div>
      <div>
      <Topmostpopular/>
      </div>
      <div>
      <Typesofsleepapnea/>
      </div>
      <div className='mt-60'>
      <Sleep/>
      </div>
      <div>
        <Yourneed/>  
      </div>
      <div>
        <Whatdoyouneed/>
      </div>
      <div>
        <Stayintouch/>
      </div>
      <div>
        <Resmed/>
      </div>
      <div className='mt-10'>
      <Footer/>
      </div>
    </div>
  )
}

export default CpapMachines
