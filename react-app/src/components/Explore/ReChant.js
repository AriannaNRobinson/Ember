import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addChant } from "../../store/chants"

const ReChant = ({chant}) => {
    const dispatch = useDispatch()
    const [content, setContent] = useState('')
    const [reChanted, setRechanted] = useState(false)

    const chantId = chant?.id 
    const chantUser = chant?.username
    const reChantContent = chant?.content
    const reChant = '%*' + chantUser + '*' + reChantContent
    const userObj = useSelector(state => state.session.user)
    const userId = userObj?.id
    const [errors, setErrors] = useState([])
    
    // console.log(chant)
    const handleClick = async (e) => {
        e.preventDefault();
        setRechanted(true)
        // console.log(chant, chantId, chantUser, content)
        // console.log(reChant)
        const formData = {
            content: reChant,
            user_id: userId
        }

        const data = await dispatch(addChant(formData))
        if (data) {
            setErrors(data)
        } else {
            setContent('')
            setErrors([])
        }
    }

    return (
        <i onClick={handleClick} className="fa-solid fa-retweet icon4"></i>
    )
}

export default ReChant;
