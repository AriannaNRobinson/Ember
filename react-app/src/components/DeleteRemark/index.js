import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getChant } from '../../store/chants';
import { Modal } from '../context/Modal';
import DeleteRemark from './DeleteRemark';

const DeleteRemarkModal = ({remark}) => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
        dispatch(getChant())
    },[showModal,dispatch])

    return (
        <>
            <button onClick={() => setShowModal(true)} className='modify-chant'>
                <i className='fa-solid fa-ban'></i>
                <p>Delete</p>
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteRemark closeModal={()=> setShowModal(false)} remark={remark}/>
                </Modal>
            )}
        </>
    )
}

export default DeleteRemarkModal;
