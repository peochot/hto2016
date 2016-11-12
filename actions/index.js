export function changeTab(key){
  return {
    type:"CHANGE_TAB",
    key
  }
}
export function selectRoom(roomId){
  return {
    type:"SELECT_ROOM",
    roomId
  }
}
