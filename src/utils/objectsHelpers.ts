/*
state.usersData.map(u => u.id === action.userID ? {
  ...u,
  followed: true
} : u)*/

import {UsersDataArray} from "../redux/usersReducer";

export const updateObjectInArray = (items: any, itemId: any, objPropName: any, newObjProps: any) => {
  return items.map((u: any) => {
    if (u[objPropName] === itemId) {
      return {...u, ...newObjProps}
    }
    return u
  })
}



