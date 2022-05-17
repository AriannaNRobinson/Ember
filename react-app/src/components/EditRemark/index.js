import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getChant } from '../../store/chants';
import { Modal } from '../context/Modal';
import EditRemarkForm from './EditRemarkForm';

const EditRemarkFormModal = ({remark}) => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);

    useEffect(()=> {
        dispatch(getChant())
    }, [showModal])

    return (
        <>
            <button onClick={() => setShowModal(true)} className='modify-chant'>
                <i className='fa-solid fa-feather-pointed'></i>
                <p>Edit</p>
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditRemarkForm remark={remark} setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    );
}

export default EditRemarkFormModal;
