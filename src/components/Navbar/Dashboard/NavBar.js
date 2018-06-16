import React from 'react'
import PropTypes from 'prop-types'
// import Logo from 'media/icons/logo_horizontal.svg'

import { hasStorage } from 'common/utils/featureTests'
import PlanMenu from './planMenu'
import AdminButtons from './adminButtons'
// import ArticlesBackButton from './articlesBackButton'
import { Bar, Logo } from './styles'

let selectedPlan =
  hasStorage && localStorage.getItem('selectedPlan') ? localStorage.getItem('selectedPlan').toUpperCase() : 'ENTRY'

const NavBar = ({ history, location }) => {
  const path = location.pathname || ''

  const isPlanPage = path.includes('portfolio') || path.includes('suggestions') || path.includes('trades')
  const isAdminPage = path.includes('admin')
  // const isArticlePage = Router.router.query.title
  // if (!isPlanPage && !isAdminPage && !isArticlePage) return (<Bar><span /><Logo /></Bar>)

  return (
    <Bar>
      {/* {isArticlePage && <ArticlesBackButton />} */}
      {isPlanPage && <PlanMenu selectedPlan={selectedPlan} className="plan-menu-container" route={path} />}
      {/* {isPlanPage && <PlanButtons selectedPlan={selectedPlan} actions={actions} />} */}
      {isAdminPage && <AdminButtons route={path} history={history} />}
      <Logo onClick={() => history.push('/')} isAdminPage={isAdminPage} />
    </Bar>
  )
}

NavBar.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
}

export default NavBar
