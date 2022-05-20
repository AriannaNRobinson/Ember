import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addChant } from '../../store/chants'
import './index.css'

const ChantForm = ({ setShowModal }) => {
    const dispatch = useDispatch()
    const userObj = useSelector(state => state.session.user)
    const userId = userObj.id
    // console.log(userId)
    const [content, setContent] = useState('')

    const [errors, setErrors] = useState([])

    useEffect(() => {
        let errors = []
        if (content.length === 255) {
            errors.push(['Character limit has been reached'])
        }
        setErrors(errors)
    }, [content])

    const submitChant = async (e) => {
        e.preventDefault()
        const formData = {
            content,
            user_id: userId
        }

        const data = await dispatch(addChant(formData))
        if (data) {
            setErrors(data)
        } else {
            setContent('')
            setErrors([])
            if (setShowModal) {
                setShowModal(false)
            }
        }

    }

    return (
        <form className="create-form" onSubmit={submitChant}>
            <textarea className='chant-input' placeholder="Create a new shout..." maxLength='255' onChange={(e) => setContent(e.target.value)} value={content} required></textarea>
            <button className="create-chant" id='btn' type="submit">
                <i className='fa-solid fa-feather-pointed icon2 icon3'></i>
                <p>New Shout</p>
            </button>
            <div className='error-container'>
                {errors && errors.map((error, ind) => (
                    <div className='error' key={ind}>{error}</div>
                ))}
            </div>
        </form>
    )
}

export default ChantForm
