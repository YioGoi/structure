import React from "react"

// Example lazy load
const HBYSModule = React.lazy(() => import('../modules/HBYSModule/HBYSModule'))
const SocialServicesModule = React.lazy(() => import('../modules/SocialServicesModule/SocialServicesModule'))
const OperatingRoomModule = React.lazy(() => import('../modules/OperatingRoomModule/OperatingRoomModule'))

const routes = [
  {
    id: 'hbys',
    parent_id: null,
    path: '/hbys',
    exact: false,
    name: 'HBYS',
    icon: 'schedule',
    component: HBYSModule,
  },
  {
    id: 'socialServices',
    parent_id: null,
    path: '/sosyal-hizmetler',
    exact: false,
    name: 'Sosyal Hizmetler',
    icon: 'schedule',
    component: SocialServicesModule,
  },
  {
    id: 'operatingRoom',
    parent_id: null,
    path: '/ameliyathane',
    exact: false,
    name: 'Ameliyathane',
    icon: 'schedule',
    component: OperatingRoomModule,
  }
]

export default routes