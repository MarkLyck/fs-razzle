const hasPermissions = (viewingPlan, userPlan, userType) => {
  if (!userType) return 'WAITING'
  if (userType === 'admin' || userType === 'demo') return true

  if (userPlan === 'ENTRY') {
    if (viewingPlan === 'ENTRY') return true
  } else if (userPlan === 'PREMIUM') {
    if (viewingPlan === 'ENTRY') return true
    if (viewingPlan === 'PREMIUM') return true
  } else if (userPlan === 'BUSINESS') {
    if (viewingPlan === 'BUSINESS') return true
  } else if (userPlan === 'FUND') {
    if (viewingPlan === 'FUND') return true
  }
  return false
}

export default hasPermissions
