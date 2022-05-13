import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addChant } from '../../store/chants'
import './index.css'

const ChantForm = () => {
    const dispatch = useDispatch()
    const userObj = useSelector(state => state.session.user)
    const userId = userObj.id
    // console.log(userId)
    const [content, setContent] = useState('')

    const submitChant = async (e) => {
        e.preventDefault()
        const formData = {
            content,
            user_id: userId
        }
        if (content) {
            await dispatch(addChant(formData))
            setContent('')
        }
    }

    return (
        <form className="create-form" onSubmit={submitChant}>
        <textarea className='chant-input' placeholder="Create a new shout..." maxLength='255' onChange={(e) => setContent(e.target.value)} value={content} required></textarea>
        <button className="create-chant" id='btn' type="submit">
            <i className='fa-solid fa-feather-pointed icon2 icon3'></i>
            <p>New Shout</p>
        </button>
    </form>
    )
}

export default ChantForm
