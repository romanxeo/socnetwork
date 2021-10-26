import React, {ChangeEvent, useEffect, useState} from 'react'


type TProps = {
  status: string
  updateStatus: (userId: string | undefined, status: string) => void
  myUserId: string | undefined
  currentUserId: number
}

const ProfileStatusWithHook: React.FC<TProps> = props => {

  const {
    status,
    updateStatus,
    myUserId,
    currentUserId
  } = props

  let [editMode, setEditMode] = useState<boolean>(false);
  let [statusText, setStatusText] = useState<string>(status);

  useEffect(() => {
    setStatusText(status)
  }, [status])

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatusText(e.currentTarget.value)
  }

  const activateEditeMode = () => {
    if (String(myUserId) === String(currentUserId)) {

      setEditMode(true)
    }
  }

  const deActivateEditeMode = () => {
    setEditMode(false)
    updateStatus(myUserId, statusText)
  }

  return (
    <>
      {editMode
        ?
        <input
          onChange={onStatusChange}
          autoFocus={true}
          onBlur={deActivateEditeMode}
          value={statusText}
        />
        :
        <span onDoubleClick={activateEditeMode}>
          {status
            ?
            ` ${status}`
            :
            ' no status'
          }

        </span>
      }
    </>
  )

}

export default ProfileStatusWithHook

