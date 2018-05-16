import React from 'react'
import PropTypes from 'prop-types'
import Logo from './logo_horizontal.svg'

import { hasStorage } from 'common/utils/featureTests'
import PlanMenu from './planMenu'
import AdminButtons from './adminButtons'
// import ArticlesBackButton from './articlesBackButton'
import { Bar } from './styles'

let selectedPlan = hasStorage && localStorage.getItem('selectedPlan') ? localStorage.getItem('selectedPlan').toUpperCase() : 'ENTRY'

const NavBar = ({ history, location }) => {
    // if (typeof window === 'undefined') {
    //     return (<Bar><span></span><Logo /></Bar>)
    // }

    const path = location.pathname || ''

    const isPlanPage = path.includes('portfolio') || path.includes('suggestions') || path.includes('trades')
    const isAdminPage = path.includes('admin')
    // const isArticlePage = Router.router.query.title
    // if (!isPlanPage && !isAdminPage && !isArticlePage) return (<Bar><span /><Logo /></Bar>)

    // console.log(location, isPlanPage)

    return (
        <Bar>
            {/* {isArticlePage && <ArticlesBackButton />} */}
            {isPlanPage && <PlanMenu selectedPlan={selectedPlan} className="plan-menu-container" route={path} />}
            {/* {isPlanPage && <PlanButtons selectedPlan={selectedPlan} actions={actions} />} */}
            {isAdminPage && <AdminButtons route={path} history={history} />}
            <Logo onClick={() => history.push('/')} />
        </Bar>
    )
}

NavBar.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
}

export default NavBar
