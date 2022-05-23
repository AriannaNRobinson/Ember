import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getChant } from "../../store/chants"
import { addRemark } from "../../store/remarks"

const Remark = ({ remarks, chantId }) => {
    const dispatch = useDispatch()
    const userObj = useSelector(state => state.session.user)
    const userId = userObj?.id
    const [content, setContent] = useState('')
    const [toggleRemark, setToggleRemark] = useState(false)
    const [fetching, setFetching] = useState(false)

    const [errors, setErrors] = useState([])

    useEffect(() => {
        let errors = []
        if (content.length === 255) {
            errors.push(['Character limit has been reached'])
        }
        setErrors(errors)
    }, [content])

    useEffect(() => {
        dispatch(getChant())
    }, [toggleRemark, dispatch])
    // console.log(chantId)

    const submitRemark = async (e) => {
        e.preventDefault()
            setFetching(true)
        const formData = {
            content,
            user_id: userId,
            chant_id: chantId
        }

        const data = await dispatch(addRemark(formData))
        setFetching(false)
        if (data) {
            setErrors(data)
        } else {
            setContent('')
            setToggleRemark(false)
        }

    }

    return (
        <div>
            <button className="add-remark" onClick={() => setToggleRemark(!toggleRemark)}>
                <i className="fa-solid fa-square-plus"></i>
                <p>Remark</p>
            </button>
            {toggleRemark &&
                <form className="new-remark-container" onSubmit={submitRemark}>
                    <textarea className="remark-container" id='new-remark' placeholder="Add remark..." maxLength='255' onChange={(e) => setContent(e.target.value)} value={content} required></textarea>
                    <button className="submit-btn" disabled={fetching}>
                        Submit
                    </button>
                    <div className='error-container'>
                        {errors && errors.map((error, ind) => (
                            <div className='error' key={ind}>{error}</div>
                        ))}
                    </div>
                </form>
            }
        </div>
    )
}

export default Remark
