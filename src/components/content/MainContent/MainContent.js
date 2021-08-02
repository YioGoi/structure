import React from 'react'

// routes
import routes from '../../../routes/routes'

// Components
import RoutingCenter from '../../RoutingCenter/RoutingCenter'

export default function MainContent() {
    return (
        <div>
            <RoutingCenter
                routes={routes}
                from='/'
                to='/hbys'
            />
        </div>
    )
}
