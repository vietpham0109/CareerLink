import React from 'react'
import LeftSide from '../../components/message/LeftSide'
import RightSide from '../../components/message/RightSide'

const Conversation = () => {
    return (
        <div className="message d-flex">
            <div className="col-md-3 border-right px-0 bg-white">
                <LeftSide />
            </div>

            <div className="col-md-9 px-0">
                <RightSide />
            </div>
        </div>
    )
}

export default Conversation
