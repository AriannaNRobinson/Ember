import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { getChant } from '../../store/chants'
import { editRemark } from '../../store/remarks'
// import './index.css'

const EditRemarkForm = ({ remark, setShowModal }) => {
    const dispatch = useDispatch()
    const userObj = useSelector(state => state.session.user)
    // const chantsObj = useSelector(state => state.chants)
    // const chants = Object.values(chantsObj)
    // console.log(chant?.id)
    const remarkId = remark?.id
    // console.log(remarkId)
    const chantId = remark?.chant_id
    const userId = userObj?.id
    // console.log(userId)
    const [content, setContent] = useState(remark?.content)

    const [errors, setErrors] = useState([])

    useEffect(() => {
        let errors = []
        if (content.length === 255) {
            errors.push(['Character limit has been reached'])
        }
        setErrors(errors)
    }, [content])

    const changeRemark = async (e) => {
        e.preventDefault()
        const formData = {
            content,
            user_id: userId,
            id: remarkId,
            chant_id: chantId
        }

        const data = await dispatch(editRemark(formData, remarkId))
        if (data) {
            setErrors(data)
        }
        setContent('')
        setShowModal(false)

    }

    return (
        <form className="create-form" onSubmit={changeRemark}>
            <textarea className='chant-input' maxLength='255' onChange={(e) => setContent(e.target.value)} value={content} required></textarea>
            <button className="create-chant" id='btn' type="submit">
                <i className='fa-solid fa-feather-pointed icon2 icon3'></i>
                <p>Update Remark</p>
            </button>
            <div className='error-container'>
                {errors && errors.map((error, ind) => (
                    <div className='error' key={ind}>{error}</div>
                ))}
            </div>
        </form>
    )
}

export default EditRemarkForm
