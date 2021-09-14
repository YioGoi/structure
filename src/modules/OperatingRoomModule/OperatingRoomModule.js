import React, { useEffect } from 'react'

// Styles
import './OperatingRoomModule.scss'

// history
import history from '../../history'

// Ant Components
import { Modal } from 'antd'

// Other Components
import OperatingRoomMessage from '../../components/OperatingRoomMessage/OperatingRoomMessage'

export default function OperatingRoomModule() {
    // Local State
    const [modal, contextHolder] = Modal.useModal()

    const handleCancelButton = close => {
        history.push('/hbys')
    }

    useEffect(() => {
        modal.info({
            className: 'operating-room-modal',
            title: 'Operating Room',
            content: <OperatingRoomMessage />,
            mask: false,
            maskClosable: false,
            closable: true,
            width: '100%',
            footer: <></>,
            onCancel: handleCancelButton
        })
    }, [modal])

    return (
        <>
           {contextHolder}
        </>
    )
}
