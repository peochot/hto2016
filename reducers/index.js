import { combineReducers } from 'redux'

let initRooms =[{id:1,name:"Room 1",average:100,yesterday:50,today:63, total: 356},
            {id:2,name:"Room 2",average:100,yesterday:110,today:147, total: 412},
            {id:3,name:"Room 3",average:80,yesterday:90,today:132, total: 423}];

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
