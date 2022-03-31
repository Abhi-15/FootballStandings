import {useState, React} from "react";
import ReactDom from 'react-dom';
import TypoGraphy from './atoms/TypoGraphy';

function Modal(props) {
    
    // console.log(props.open);
    if(!props.open) return null

    else{

        return ReactDom.createPortal(

        <div className='overlayStyles'>
            <div className='modalStyles'>
                <TypoGraphy 
                    variant='button'
                    text='Close'
                    onClick={props.onClose}
                />
                {props.children} 
            </div>     
        </div>,

        document.getElementById('portal')
    )}    
}

export default Modal;