import profileReducer, {
  addPostFormAC,
  deletePostAC,
  initialStateType
} from "./profileReducer";
import {v1} from "uuid";

let initialState: initialStateType = {
  postsData: [
    {id: '1', name: 'VALERA', post: 'HERLfdE', likesCount: 43},
    {id: '2', name: 'Dimon', post: 'HERdsfLfdE', likesCount: 421},
    {id: '3', name: 'Kukareku', post: 'HEfsdfRLfdE', likesCount: 13},
    {id: '4', name: 'Stop', post: 'NEED POST FOR TEST', likesCount: 5},
  ],
  newPostText: '',
  profile: {
    aboutMe: 'aboutMe',
    contacts: {
      facebook: 'facebook',
      website: 'website',
      vk: 'vk',
      twitter: 'twitter',
      instagram: 'instagram',
      youtube: 'youtube',
      github: 'github',
      mainLink: 'mainLink'
    },
    lookingForAJob: true,
    lookingForAJobDescription: 'lookingForAJobDescription',
    fullName: 'fullName',
    userId: 0,
    photos: {
      small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
      large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
    }
  },
  isFetching: false,
  status: ''
}

it('new post should be added', () => {
  let action = addPostFormAC('new post text it')

  let newState = profileReducer(initialState, action)

  expect(newState.postsData.length).toBe(5)
})

it('new post should be corrected', () => {
  let action = addPostFormAC('new post text it')

  let newState = profileReducer(initialState, action)

  expect(newState.postsData[4].post).toBe('new post text it')
})

it('after deleting post length should be deincrimnet', () => {
  let action = deletePostAC('3')

  let newState = profileReducer(initialState, action)

  expect(newState.postsData.length).toBe(3)
})

it('after deleting post text should be need', () => {
  let action = deletePostAC('3')

  let newState = profileReducer(initialState, action)

  expect(newState.postsData[2].post).toBe('NEED POST FOR TEST')
})

it('no correct id', () => {
  let action = deletePostAC('14')

  let newState = profileReducer(initialState, action)

  expect(newState.postsData.length).toBe(4)
})
