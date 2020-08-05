import React, { useState } from 'react';
import { Button, Modal,  ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MyModal = ({edit,id ,todot}) => {
  
  const [value , setValue] = useState(todot)
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const onChange=(e)=>{
    e.preventDefault();
    setValue(e.target.value)
}
 
 const  onSubmit = e => {
    e.preventDefault();
    setModal(false)
   edit(id,value);
   setValue("") 
  };
  return (
    <div>
        
          
        <button  className="btn-edit" onClick={()=>setModal(true)}>Edit</button>
    
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        
        <ModalBody>
        
        <input type="text" onChange={onChange} value={value}></input>
        


   
       
       </ModalBody>
        <ModalFooter>
        
          <Button color="primary"   onClick={onSubmit} >Do Something</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default MyModal;

