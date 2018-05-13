import React from 'react'
import PropTypes from 'prop-types'
import Logo from './logo_horizontal.svg'
// import PlanButtons from './planButtons'
import PlanMenu from './planMenu'
import AdminButtons from './adminButtons'
// import ArticlesBackButton from './articlesBackButton'
import { Bar } from './styles'

const NavBar = ({ selectedPlan, actions, history, location }) => {
    if (typeof window === 'undefined') {
        return (<Bar><Logo /></Bar>)
    }

    const path = location.pathName || ''

    const isPlanPage = path.includes('portfolio') || path.includes('suggestions') || path.includes('trades')
    const isAdminPage = path.includes('admin')
    // const isArticlePage = Router.router.query.title
    // if (!isPlanPage && !isAdminPage && !isArticlePage) return (<Bar><span /><Logo /></Bar>)

    return (
        <Bar>
            {/* {isArticlePage && <ArticlesBackButton />} */}
            {isPlanPage && <PlanMenu selectedPlan={selectedPlan} actions={actions} className="plan-menu-container" route={path} />}
            {/* {isPlanPage && <PlanButtons selectedPlan={selectedPlan} actions={actions} />} */}
            {isAdminPage && <AdminButtons route={path} history={history} />}
            <Logo onClick={() => history.push('/')} />
        </Bar>
    )
}

NavBar.propTypes = {
    selectedPlan: PropTypes.string,
    actions: PropTypes.object,
}

export default NavBar
