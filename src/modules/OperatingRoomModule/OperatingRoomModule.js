import React from 'react'

// Redux
import { useSelector } from 'react-redux'

export default function OperatingRoomModule() {
    // Global State
    const messageToOperationRoom = useSelector(state => state.message.messageToOperationRoom)

    return (
        <div className="p-grid">
            <div className="p-col"></div>
            <div className="p-col">
                {messageToOperationRoom}
            </div>
            <div className="p-col"></div>
        </div>
    )
}
