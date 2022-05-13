import React, { useState } from 'react';
import { Modal } from '../context/Modal';
import EditChantForm from './EditChantForm';

const EditChantFormModal = ({chant}) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)} className='menu-item create-chant'>
                <i className='fa-solid fa-feather-pointed icon2'></i>
                <p>Edit</p>
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditChantForm chant={chant}/>
                </Modal>
            )}
        </>
    );
}

export default EditChantFormModal;
