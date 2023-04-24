import React from 'react'
import '../styles/home-page.css'
import EditCard from '../components/EditCard'
import { Row } from 'antd'
import CreateNewUser from '../components/CreateNewUser'


function HomePage() {
  return (
     <div className="cart-container">
   <Row gutter={[16, 16]}>
     <EditCard/>
    </Row>   
    <div className="add-user-btn">
    <CreateNewUser/>
    </div>
     </div>
  )
}

export default HomePage