import React from 'react'

// Styles
import './ModulesMenu.css'
import 'primeicons/primeicons.css'


export default function ModulesMenu() {

    const modulesArray = [
        {
            id: 0,
            name: 'Sosyal Hizmetler',
            icon: 'pi pi-apple'
        },
        {
            id: 1,
            name: 'Ameliyathane',
            icon: 'pi pi-calendar'
        }
    ]
    return (
        <div className='modules-menu-container'>
            {
                modulesArray.map((module, index) => {
                    return (
                        <div className='module-box' key={index}>
                            <i className={module.icon} style={{'fontSize': '2em'}}></i>
                            <span>
                                {module.name}
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}
