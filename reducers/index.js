import { combineReducers } from 'redux'

function selectedTab(state="web" , action) {
  switch (action.type) {
	default:
		return state
	}
}

function reducer2(state=[] , action) {
  switch (action.type) {
	default:
		return state
	}
}

function reducer3(state=[] , action) {
  switch (action.type) {
	default:
		return state
	}
}
const reducers = combineReducers({
	selectedTab,
	reducer2,
	reducer3
})

export default reducers
