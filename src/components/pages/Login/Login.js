import {useState, React} from "react";
import {useNavigate} from "react-router-dom";
import CheckUserDetails from "../../helper/CheckUserDetails";
import TypoGraphy from '../../atoms/TypoGraphy';
import styles from './login.css';

import {connect} from 'react-redux';
import {userLogin, setUserName, setPassword, getLoginStatus, getUsername, getPassword, getFavoriteLeagues} from '../../../redux';

import Modal from '../../Modal';

const portal = document.getElementById('portal');

function Login(props) {

    const username = props.username;
    const password = props.password;
    const navigate = useNavigate();
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

    return ( <>
        <div className='login'>
            <TypoGraphy 
                variant='label'
                text='Email: '
            />
            <input value={username} onChange={(event) => {props.setUserName(event.target.value)}}/>

            <TypoGraphy 
                variant='label'
                text='Password: '
            />
            <input value={password} onChange={(event) => {props.setPassword(event.target.value)}}/>

            <div className="submitButton">
                <TypoGraphy 
                    text='submit'
                    variant='button'
                    onClick={() => CheckUserDetails(username, password) ? (props.userLogin(true), navigate('/')) : changeModalState(true)}
                />              
            </div>
        </div>

        <Modal open={modalShow} onClose={() => changeModalState(false) }>
            Invalid username or password
        </Modal>  
    </>
    )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: getLoginStatus(state),
        username: getUsername(state),
        password: getPassword(state),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogin: (isLoggedIn) => dispatch(userLogin(isLoggedIn)),
        setUserName: (username) => dispatch(setUserName(username)),
        setPassword: (password) => dispatch(setPassword(password))
    }
}

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(Login);