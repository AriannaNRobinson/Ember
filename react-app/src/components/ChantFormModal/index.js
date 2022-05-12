import React, { useState } from 'react';
import { Modal } from '../context/Modal';
import ChantForm from './ChantForm';

const ChantFormModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)} className='menu-item create-chant'>
                <i className='fa-solid fa-feather-pointed icon2'></i>
                <p>New Shout</p>
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ChantForm />
                </Modal>
            )}
        </>
    );
}

export default ChantFormModal;
