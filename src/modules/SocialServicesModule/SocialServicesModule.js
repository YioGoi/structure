import React, { useState, useEffect } from 'react'

// Styles
import './SocialServicesModule.css'

// Redux
import store from '../../redux/store'
import {
    sendMessage
} from '../../redux'

// API
import getOrganizationList from '../../common/api/getOrganizationList/getOrganizationList'

// Prime Components
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export default function SocialServicesModule() {
    // Local State
    const [value, setValue] = useState('')

    const handleSendButton = e => {
        e.stopPropagation()
        store.dispatch(sendMessage(value)) 
    }

    useEffect(() => {
        getOrganizationList()
    }, [])

    return (
        <div className="social-services-module-container p-d-flex p-jc-center">
            <div className="p-mr-2"></div>
            <div className="p-mr-2">
                <span className="p-float-label">
                    <InputText id="in" value={value} onChange={(e) => setValue(e.target.value)} />
                    <label htmlFor="in">Ameliyathane'ye gönder</label>
                </span>
                <div className='send-button-container'>
                    <Button label="Send" icon="pi pi-send" iconPos="right" onClick={handleSendButton} />
                </div>
            </div>
            <div></div>
        </div>
    )
}
