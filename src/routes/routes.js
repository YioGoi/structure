import React from "react"

// Example lazy load
const HBYSView = React.lazy(() => import('../modules/HBYSView/HBYSView'))

const routes = [
  {
    id: 'hbys',
    parent_id: null,
    path: '/hbys',
    exact: false,
    name: 'HBYS',
    icon: 'schedule',
    component: HBYSView,
  }
]

export default routes