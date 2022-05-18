import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateMe } from "../../store/session"

const Flame = ({ chant }) => {
    const dispatch = useDispatch()
    const chantId = chant?.id
    const [flameCount, setFlameCount] = useState(0)
    const userObj = useSelector(state => state.session.user)
    const specificFlame = userObj?.flames?.filter(flame => flame?.user_id == userObj?.id && flame?.chant_id == chantId)

    const getFlameCount = async (chantId) => {
        const response = await fetch(`/api/flames/chant/${chantId}`)
        const data = await response.json()
        setFlameCount(data.flames_count)
    }

    const addFlame = async (chantId) => {
        const response = await fetch(`/api/flames/chant/${chantId}/add`)
        const data = await response.json()
        setFlameCount(data.flames_count)
    }

    const deleteFlame = async (chantId) => {
        const response = await fetch(`/api/flames/chant/${chantId}/delete`)
        const data = await response.json()
        setFlameCount(data.flames_count)
    }

    const handleFlame = async () => {
        if (specificFlame?.length) {
            deleteFlame(chantId)
        } else {
            addFlame(chantId)
        }
        // await dispatch(getChant())
    }

    useEffect(() => {
        getFlameCount(chantId)
        dispatch(updateMe())
    }, [flameCount, dispatch])

    return (
        <div className="chant-options">
            {(userObj?.flames?.filter(flame => flame?.user_id == userObj?.id && flame?.chant_id == chantId))?.length > 0
            ? <i onClick={handleFlame} className="fa-solid fa-fire-flame-curved icon5"></i> 
            : <i onClick={handleFlame} className="fa-solid fa-fire-flame-curved icon4"></i>
            }
            <div className="num-chants fa-solid">{flameCount}</div>
            {/* <i onClick={handleFlame} className={(userObj?.flames?.filter(flame => flame?.user_id == userObj?.id && flame?.chant_id == chantId))?.length 
                ? "fa-solid fa-fire-flame-curved icon5" 
                : "fa-solid fa-fire-flame-curved icon4"}></i>
            <div className="num-chants fa-solid">{flameCount}</div> */}
        </div>
    )
}

export default Flame
