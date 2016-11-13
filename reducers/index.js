import { combineReducers } from 'redux'

let initRooms =[{id:1,name:"Room 1",average:29, today:25, total: 137},
            {id:2,name:"Room 2",average:31, today:35, total: 153},
            {id:3,name:"Room 3",average:35,today:42, total: 162}];

function rooms(state=initRooms , action) {
  switch (action.type) {
	default:
		return state
	}
}

function selectedRoom(state=0 , action) {
  switch (action.type) {
  case "SELECT_ROOM":
    return action.roomId
	default:
		return state
	}
}

const reducers = combineReducers({
	rooms,
	selectedRoom
})

export default reducers
