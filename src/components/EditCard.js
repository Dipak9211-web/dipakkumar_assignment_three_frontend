import '../styles/EditCard.css';
import { Col, Modal, Form, Input, Button } from 'antd';
import { useState } from 'react';
import Cart from './Card';

import { useUser } from '../context/user/UserContext';
function EditCard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [EditedId, setEditedId] = useState("")
    //form
    const [form] = Form.useForm();
    //context hooks
    const {users, updateUsers} = useUser()
    function showModal(id) {
      setIsModalOpen(true);
         setEditedId(id)
      const editUser = users.filter((val)=>val._id === id)
        if(editUser){
          form.setFieldsValue({
             name:`${editUser[0].name}`,
             email:`${editUser[0].email}`,
             phone:`${editUser[0].phone}`,
             website:`${editUser[0].website}`
          });
        }
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const onFinish = (values)=>{
      const user = {...values, id:EditedId}
        if(values && EditedId){
          updateUsers(user)
        }
      form.resetFields();
      setIsModalOpen(false);

    }
  return (
    <>
    
      {users.map((user)=>(
      <Col xs={24} sm={12} md={8} lg={8} xl={6} key={user._id}>
      <Cart onClick={showModal} Users={user}/>
      </Col>
     ))}
      <Modal title="Basic Modal" open={isModalOpen} footer={null}>    
      <div className="form-container">
      <Form labelCol={{span:7}}  form={form} onFinish={onFinish} >
          <Form.Item name='name' label="Name" rules={[{required:true, message:'this field is required'},{whitespace:true}]}>
             <Input />
          </Form.Item>
          <Form.Item  name='email' label="Email" rules={[{required:true, message:'this field is required'},{type:'email', message:'Invalid email'}]}>
             <Input />
          </Form.Item>
          <Form.Item name='phone' label="Phone" rules={[{required:true, message:'this field is required'},{whitespace:true}]}>
             <Input />
          </Form.Item>
          <Form.Item name='website' label="Website" rules={[{required:true, message:'this field is required'},{whitespace:true}]}>
             <Input />
          </Form.Item>
          <div className='form-button'>
          <Button style={{marginRight:"10px"}} onClick={handleCancel}>cancel</Button>
          <Button htmlType='submit' type='primary'>Update</Button>
          </div>
         </Form>
      </div>   
      </Modal>

    </>
  )
}

export default EditCard