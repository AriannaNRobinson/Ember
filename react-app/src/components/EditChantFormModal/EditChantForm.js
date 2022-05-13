import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editChant } from '../../store/chants'
// import './index.css'

const EditChantForm = ({ chant, setShowModal }) => {
    const dispatch = useDispatch()
    const userObj = useSelector(state => state.session.user)
    // const chantsObj = useSelector(state => state.chants)
    // const chants = Object.values(chantsObj)
    console.log(chant?.id)
    const chantId = chant?.id
    const userId = userObj?.id
    // console.log(userId)
    const [content, setContent] = useState(chant?.content)

    const changeChant = async (e) => {
        e.preventDefault()
        const formData = {
            content,
            user_id: userId,
            id: chantId
        }
        if (content) {
            await dispatch(editChant(formData, chantId))
            setContent('')
            setShowModal(false)
        }
    }

    return (
        <form className="create-form" onSubmit={changeChant}>
            <textarea className='chant-input' maxLength='255' onChange={(e) => setContent(e.target.value)} value={content} required></textarea>
            <button className="create-chant" id='btn' type="submit">
                <i className='fa-solid fa-feather-pointed icon2 icon3'></i>
                <p>Update Shout</p>
            </button>
        </form>
    )
}

export default EditChantForm
