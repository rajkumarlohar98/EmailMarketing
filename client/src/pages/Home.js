import React  from 'react'
import { useSelector , useDispatch } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'

import { Col, Row } from 'antd'
import Spinner from '../components/Spinner';

function Home() {
 
    const {loading} = useSelector(state=>state.alertsReducer)
   
     return (
        <DefaultLayout>

          <h1>Flow Chart</h1>
          <img src="https://svg.template.creately.com/i8lbzsi61 "width="800" height="600"/>

        </DefaultLayout>
    )
}

export default Home