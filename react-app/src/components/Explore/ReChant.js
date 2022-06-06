import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addChant } from "../../store/chants"

const ReChant = ({chant}) => {
    const dispatch = useDispatch()
    const [content, setContent] = useState('')
    const [reChanted, setRechanted] = useState(false)

    const chantId = chant?.id 
    const chantUser = chant?.username
    const chantUserId = chant?.user_id
    console.log(chantUserId)
    const reChantContent = chant?.content
    let reChant = '%*' + chantUser + '*' + chantUserId + '*' + reChantContent
    const userObj = useSelector(state => state.session.user)
    const userId = userObj?.id
    const [errors, setErrors] = useState([])
    
    // console.log(chant)
    const handleClick = async (e) => {
        e.preventDefault();
        setRechanted(true)
        console.log(reChant)
        if (reChant?.split('*')[3] === '%'){
            let rechantArr = reChant.split('*')
            rechantArr.splice(0,3)
            reChant = rechantArr.join('*')
        }
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
