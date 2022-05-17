import EditChantFormModal from '../EditChantFormModal'
import DeleteModal from '../DeleteChantModal'
import { useState } from 'react'
import Remark from './Remark'
import DeleteRemarkModal from '../DeleteRemark'
import EditRemarkFormModal from '../EditRemark'

const SingleChant = ({ chant, userObj }) => {
    const [toggleComment, setToggleComment] = useState('')

    return (
        <div className='chant-container' key={chant.id}>
            <div className='chant-details-container'>
                {/* need to change below to user NAME */}
                {/* <EditChantFormModal */}
                <div className="user1">{chant?.user_id}</div>
                <div className="chant" id='chant-created-at'>
                    {chant?.created_at.split(" ")[0]}{" "}
                    {chant?.created_at.split(" ")[2]}{" "}
                    {chant?.created_at.split(" ")[1]},{" "}
                    {chant?.created_at.split(" ")[3]} at{" "}
                    {Number(
                        chant?.created_at
                            .split(" ")[4]
                            .split(":")[0]
                    ) <= 12
                        ? chant?.created_at
                            .split(" ")[4]
                            .split(":")[0]
                        : Number(
                            chant?.created_at
                                .split(" ")[4]
                                .split(":")[0]
                        ) - 12}
                    :
                    {
                        chant?.created_at
                            .split(" ")[4]
                            .split(":")[1]
                    }
                    {Number(
                        chant?.created_at
                            .split(" ")[4]
                            .split(":")[0]
                    ) > 12 ? 'PM' : 'AM'}
                </div>
            </div>

            <div className="chant">{chant?.content}</div>
            {chant?.user_id === userObj?.id &&
                <div className='modify'>
                    <div><EditChantFormModal chant={chant} /></div>
                    <div><DeleteModal chant={chant} /></div>
                </div>
            }

            <div className='chant-options-container'>
                <div className="chant-options">
                    <i onClick={() => setToggleComment(toggleComment ? '' : chant?.id)} className="fa-solid fa-comment icon4"></i>
                    <div className='num-chants fa-solid'>{chant?.remarks?.length}</div>
                </div>
                <div>
                    <i className="fa-solid fa-fire-flame-curved icon4"></i>
                </div>
            </div>
            {toggleComment !== '' && +toggleComment === +chant?.id && chant?.remarks.map(remark => (
                <div className='remark-container' key={remark.id}>
                    <div className="remark-details-container">
                        {/* need to change below to user NAME */}
                        <div className="user2">{remark?.user_id}</div>
                        <div className="remark" id='remark-created-at'>
                            {remark?.created_at.split(" ")[0]}{" "}
                            {remark?.created_at.split(" ")[2]}{" "}
                            {remark?.created_at.split(" ")[1]},{" "}
                            {remark?.created_at.split(" ")[3]} at{" "}
                            {Number(
                                remark?.created_at
                                    .split(" ")[4]
                                    .split(":")[0]
                            ) <= 12
                                ? remark?.created_at
                                    .split(" ")[4]
                                    .split(":")[0]
                                : Number(
                                    remark?.created_at
                                        .split(" ")[4]
                                        .split(":")[0]
                                ) - 12}
                            :
                            {
                                remark?.created_at
                                    .split(" ")[4]
                                    .split(":")[1]
                            }
                            {Number(
                                remark?.created_at
                                    .split(" ")[4]
                                    .split(":")[0]
                            ) > 12 ? 'PM' : 'AM'}
                        </div>
                    </div>
                    <div className="remark">{remark?.content}</div>
                    {remark?.user_id === userObj?.id &&
                        <div className='modify'>
                            <div><EditRemarkFormModal remark={remark} /></div>
                            <div><DeleteRemarkModal remark={remark} /></div>
                        </div>
                    }
                </div>
            ))}
            {toggleComment !== '' && +toggleComment === +chant?.id &&
                <Remark remarks={chant?.remarks} chantId={chant?.id} />
            }
            <div className='divider'></div>
        </div>
    )
}

export default SingleChant
