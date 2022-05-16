import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { removeChant } from '../../store/chants'

const Delete = ({ chant }) => {
    const dispatch = useDispatch()
    // const userObj = useSelector(state => state.session.user)
    // const userId = userObj?.id
    const chantId = chant?.id

    const deleteChant = async (e) => {
        e.preventDefault()
        await dispatch(removeChant(chantId))
    }

    return (
        <div className="create-form">
            <p>Are you sure you want to delete this post?</p>
            <button className='create-chant' id='btn' type='submit' onClick={deleteChant}>
                <i className='fa-solid fa-ban icon2 icon3'></i>
                <p>Delete</p>
            </button>
        </div>
    )
}

export default Delete;
