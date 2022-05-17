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
            <button onClick={() => setToggleRemark(!toggleRemark)}>( + )</button>
            {toggleRemark &&
                <form onSubmit={submitRemark}>
                    <textarea placeholder="Add remark..."maxLength='255' onChange={(e) => setContent(e.target.value)} value={content} required></textarea>
                    <button>
                        Submit
                    </button>
                </form>
            }
        </div>
    )
}

export default Remark
