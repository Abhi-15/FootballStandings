import {React, useState} from "react";
import SubmitForm from "../../helper/SubmitForm";
import {useNavigate} from "react-router-dom";
import Modal from '../../Modal';
import styles from './signup.css';
import TypoGraphy from '../../atoms/TypoGraphy';

const portal = document.getElementById('portal');

function Signup() {

	const navigate = useNavigate();

	const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [modalShow, setModalShow] = useState(false);

    const changeModalState = (value) => {
        if(value) {
            portal.style.display = 'block';
        }
        else{
            portal.style.display = 'none';
        } 

        setModalShow(value);
    }

    return (<>
        <div className='signup'>
            <TypoGraphy 
                variant='label'
                text='Email: '
            />
            <input value={email} onChange={(event) => {setEmail(event.target.value)}} />

            <TypoGraphy 
                variant='label'
                text='Password: '
            />
            <input value={password} onChange={(event) => {setPassword(event.target.value)}}/>

            <div className="submitButton">
                <TypoGraphy 
                    variant='button'
                    text='submit'
                    onClick={() => {SubmitForm(email, password) ? navigate('/') : changeModalState(true)}}
                /> 
            </div>
        </div>  

        <Modal open={modalShow} onClose={() => changeModalState(false) }>
            username already exists!!
        </Modal>
    </>
    )
}

export default Signup;