import React from 'react';
import { Button,Modal } from 'react-bootstrap';
import './modalComponent.css';
function ModalPopup(props) {
    let currentObj = props.data.currentEmployee
    let status = ""
    if(currentObj.employee_age < 60){
        status = "active"
    }else{
       status = "inactive" 
    }
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

  return (
    <div>
      

      <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Employee Status</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`popup ${currentObj.employee_age < 60 ? "active" : "inactive"}`}>
            <div>
                <ul>
                    <li>{currentObj.employee_name}</li>
                    <li>{currentObj.employee_salary}</li>
                    <li>{status}</li>

                </ul>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalPopup;
