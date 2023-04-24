import { Button, Form, Input, Modal, Tooltip } from 'antd';
import { useState } from 'react';
import { UserAddOutlined } from '@ant-design/icons';
import { useUser } from '../context/user/UserContext';
function CreateNewUser() {
   const [isModalOpen, setIsModalOpen] = useState(false);
   //context hooks
   const {createUsers} = useUser()
 //form
 const [form] = Form.useForm();
   function showModal() {
      setIsModalOpen(true);
   }
   const handleCancel = () => {
      setIsModalOpen(false);
    };
    const onFinish = (value)=>{
         if(value){
            createUsers(value)
         }
      form.resetFields();
      setIsModalOpen(false);
    }
  return (
   <>
   <Tooltip title="Add More User">
   <Button type='primary' shape="circle" size='large' icon={<UserAddOutlined />} onClick={showModal} />
       </Tooltip>
    
        <Modal title="Basic Modal" open={isModalOpen} footer={null}>    
      <div className="form-container">
       <Form labelCol={{span:7}} form={form} onFinish={onFinish} >
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
          <Button htmlType='submit' type='primary'>Create</Button>
          </div>
         </Form>
      </div>   
      </Modal>
         </>
  )
}

export default CreateNewUser