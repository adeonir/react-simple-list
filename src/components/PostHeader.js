import React from 'react'
import PropTypes from 'prop-types'

const PostHeader = (props) => {
  const { avatar, name, time } = props

  return (
    <div className="post-header">
      <img className="avatar" src={avatar} alt={name} />
      <div className="data">
        <strong className="name">{name}</strong>
        <span className="time">{time}</span>
      </div>
    </div>
  )
}

PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
}

export default PostHeader
