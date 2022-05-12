import React, { useState } from 'react';
import SignUpForm from '../auth/SignUpForm';
import { Modal } from '../context/Modal';

const SignUpFormModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='button' onClick={() => setShowModal(true)}>Sign Up</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignUpForm />
                </Modal>
            )}
        </>
    );
}

export default SignUpFormModal;
