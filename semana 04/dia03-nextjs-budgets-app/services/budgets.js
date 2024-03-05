const API_URL = 'https://mockmentor.4.us-1.fl0.io/api/v1'

export async function fetchBudgets() {
  const url = API_URL + '/budgets'

  const token = localStorage.getItem('auth-token')

  const options = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await fetch(url, options)

  return await response.json()
}

export async function updateBudget(budgetId, form) {
  const url = API_URL + '/budgets/' + budgetId

  const token = localStorage.getItem('auth-token')

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(form)
  } 

  const response = await fetch(url, options)

  return await response.json()
}