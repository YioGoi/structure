import React from 'react'

// Styles
import './ModulesMenu.css'
import 'primeicons/primeicons.css'

// Components
import { Link } from "react-router-dom"

export default function ModulesMenu() {

    const modulesArray = [
        {
            id: 0,
            name: 'Sosyal Hizmetler',
            icon: 'pi pi-apple',
            to: '/sosyal-hizmetler'
        },
        {
            id: 1,
            name: 'Ameliyathane',
            icon: 'pi pi-calendar',
            to: '/ameliyathane'
        }
    ]
    return (
        <div className='modules-menu-container'>
            {
                modulesArray.map((module, index) => {
                    return (
                        <div className='module-box' key={index}>
                            <Link to={module.to}>
                                <i className={module.icon} style={{ 'fontSize': '2em' }}></i>
                                <span>
                                    {module.name}
                                </span>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
