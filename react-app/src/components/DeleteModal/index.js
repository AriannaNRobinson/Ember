import React, { useState } from 'react';
import { Modal } from '../context/Modal';
import Delete from './Delete';

const DeleteModal = ({chant}) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)} className='modify-chant'>
                <i className='fa-solid fa-ban'></i>
                <p>Delete</p>
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <Delete chant={chant} setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    )
}

export default DeleteModal;
