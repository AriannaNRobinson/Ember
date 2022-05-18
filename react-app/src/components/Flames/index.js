import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateMe } from "../../store/session"

const Flame = ({ chant }) => {
    const dispatch = useDispatch()
    const chantId = chant?.id
    const [flameCount, setFlameCount] = useState(0)
    // const [flame, setFlame] = useState()
    const userObj = useSelector(state => state.session.user)
    const specificFlame = userObj?.flames?.filter(flame => flame?.user_id == userObj?.id && flame?.chant_id == chantId)
    console.log(specificFlame)
    const ref = useRef(null)
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
        const flame = ref.current
        if (flame.className === "fa-solid fa-fire-flame-curved icon5") {
            deleteFlame(chantId)
            console.log('Wahhhhh :(')
            flame.className = "fa-solid fa-fire-flame-curved icon4"
        } else {
            addFlame(chantId)
            console.log("Yay, I'm glad you liked it!")
            flame.className = "fa-solid fa-fire-flame-curved icon5"
        }
    }

    useEffect(() => {
        getFlameCount(chantId)
    }, [flameCount])

    return (
        <div className="chant-options">
            {/* {(userObj?.flames?.filter(flame => flame?.user_id == userObj?.id && flame?.chant_id == chantId))?.length > 0
            ? <i onClick={handleFlame} className="fa-solid fa-fire-flame-curved icon5"></i> 
            : <i onClick={handleFlame} className="fa-solid fa-fire-flame-curved icon4"></i>
            } */}
            {/* <div className="num-chants fa-solid">{flameCount}</div> */}

            <i ref={ref} onClick={handleFlame} className={specificFlame?.length
                ? "fa-solid fa-fire-flame-curved icon5"  //unlike
                : "fa-solid fa-fire-flame-curved icon4"}></i>

            <div className="num-chants fa-solid">{flameCount}</div>
        </div>
    )
}

export default Flame
