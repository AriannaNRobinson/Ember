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
    
    useEffect(()=>{
        dispatch(getChant())
    }, [toggleRemark])
    // console.log(chantId)

    const submitRemark = async (e) => {
        e.preventDefault()
        const formData = {
            content,
            user_id: userId,
            chant_id: chantId
        }
        if (content) {
            await dispatch(addRemark(formData))
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
                    <textarea className="remark-container" id='new-remark' placeholder="Add remark..."maxLength='255' onChange={(e) => setContent(e.target.value)} value={content} required></textarea>
                    <button className="submit-btn">
                        Submit
                    </button>
                </form>
            }
        </div>
    )
}

export default Remark
