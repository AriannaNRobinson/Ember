import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


const Flame = ({ chant }) => {
    const chantId = chant?.id
    const [flameCount, setFlameCount] = useState(0)
    const userObj = useSelector(state => state.session.user)
    const test = userObj?.flames?.filter(flame => flame?.user_id == userObj?.id)
    console.log(userObj?.flames, '-------------')
    console.log(test, '-------test')

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

    useEffect(() => {
        getFlameCount(chantId)
    }, [flameCount, test])

    return (
        <div>
            <i className="fa-solid fa-fire-flame-curved icon4"></i>
            {flameCount}
            {test.length > 0
                ? <i onClick={() => deleteFlame(chantId)} className='fa-solid fa-square-minus icon4'></i>
                : <i onClick={() => addFlame(chantId)} className="fa-solid fa-square-plus icon4"></i>
            }
        </div>
    )
}

export default Flame
