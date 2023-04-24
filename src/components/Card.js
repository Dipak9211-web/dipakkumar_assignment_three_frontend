import '../styles/cart.css'
import { EditOutlined, DeleteOutlined ,HeartFilled,HeartOutlined, MailOutlined, PhoneOutlined, GlobalOutlined} from '@ant-design/icons';
import { Card } from 'antd';
import { useEffect, useState } from 'react';
import { useUser } from '../context/user/UserContext';
import Loader from './Loader';

const src1="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"

  function Cart(props) {
    const [heartBgColor, setHeartBgColor] = useState('false')
    const [avatar , setAvatar] = useState({})
    const HeartHandler = ()=>{
        setHeartBgColor(!heartBgColor)
    }
    //context hooks
   const {users, getAvtImg, deleteUsers} = useUser()
   useEffect(()=>{
    handleAvatar()
   },[props.Users])
   const handleAvatar = async ()=>{
    const Img = await getAvtImg(props.Users.name)
       setAvatar(Img?.config?.url)
   }
   const handleDeleteUser = (id)=>{
    if(id){
      deleteUsers(id)
    }
   }
   
  return (
    <>  
    {!(avatar.length && users)?<Loader/>:(   
  <div className="card-container">
    <Card
    cover={
      <img
        alt="example"
        src={avatar?avatar:src1}
        height="200px"
        width="200px"
        style={{backgroundColor:'#f5f5f5'}}
      />
    }
    
    actions={[
        heartBgColor?<HeartOutlined key="heart" style={{fontSize:'20px', color:'red'}}  onClick={HeartHandler } />:<HeartFilled key="heart" style={{fontSize:'20px', color:'red'}} onClick={HeartHandler }/>,
     <EditOutlined key="edit" style={{fontSize:'20px'}} onClick={()=>props.onClick(props?.Users?._id)} /> ,
      <DeleteOutlined key="delete" style={{fontSize:'20px'}} onClick={()=>handleDeleteUser(props?.Users?._id)} />,
    ]}
  >
  <div className="description-container">
  <h3>{props?.Users?.name}</h3>
  <p ><MailOutlined style={{fontSize:"20px"}} />&nbsp;  {props?.Users?.email} </p>
  <p ><PhoneOutlined style={{fontSize:"20px"}} />&nbsp;  {props?.Users?.phone} </p>
   <p> <GlobalOutlined style={{fontSize:"20px"}} />&nbsp; {props?.Users?.website}</p> 
  </div>
  </Card>
      </div>
      )}
      </>
  )
}

export default Cart