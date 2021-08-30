import React from 'react'
import s from './ProfileStatus.module.css';

export class ProfileStatus extends React.Component {
  state = {
    editMode: false

  }

  activateEditeMode = () => {
    this.setState({
      editMode: true
    })
  }

  deActivateEditeMode = () => {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <div>
        {this.state.editMode
          ?
          <div>
            <input autoFocus={true} onBlur={this.deActivateEditeMode}
                   value={this.props.status}/>
          </div>
          :
          <div>
          <span onDoubleClick={this.activateEditeMode}>
            {this.props.status}
          </span>
          </div>
        }
      </div>
    )
  }
}