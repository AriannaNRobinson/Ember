import React, { useState } from 'react';
import { Modal } from '../context/Modal';
import EditChantForm from './EditChantForm';

const EditChantFormModal = ({chant}) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)} className='modify-chant'>
                <i className='fa-solid fa-feather-pointed'></i>
                <p>Edit</p>
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditChantForm chant={chant} setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    );
}

export default EditChantFormModal;
