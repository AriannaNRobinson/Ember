// import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
// import { getChant } from "../../store/chants";
import { removeRemark } from "../../store/remarks";
// import { removeRemark } from '../../store/chants'

const DeleteRemark = ({ remark, closeModal }) => {
    const dispatch = useDispatch()
    // const userObj = useSelector(state => state.session.user)
    // const userId = userObj?.id
    const remarkId = remark?.id

    // useEffect(()=>{
    //     dispatch(getChant())
    // }, [dispatch])

    const deleteRemark = async (e) => {
        e.preventDefault()
        await dispatch(removeRemark(remarkId))
        closeModal()
    }

    return (
        <div className="create-form">
            <p>Are you sure you want to delete this remark?</p>
            <button className='create-chant' id='btn' type='submit' onClick={deleteRemark}>
                <i className='fa-solid fa-ban icon2 icon3'></i>
                <p>Delete</p>
            </button>
        </div>
    )
}

export default DeleteRemark;
