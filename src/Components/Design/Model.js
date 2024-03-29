import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Model() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit =(e) => {
    e.preventDefault();
 const form = e.target;
 const title=  form.title.value;
 const desc=  form.desc.value;   
const sendData = {title,desc};
console.log(sendData);




  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Add Data
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
         <input type="text" placeholder='Enter Title' name="title" className='form-control' required/>
         <br/>
         <label>Description</label>
         <textarea placeholder='Enter Desciption' name="desc" className='form-control' required/>
         <br/>
        <input type='submit' onClick={handleClose} className='btn btn-primary text-center'/>
      </form>

        </Modal.Body>
       
      </Modal>
    </>
  );
}

export default Model;