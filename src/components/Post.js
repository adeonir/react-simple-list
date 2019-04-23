import React from 'react'
import PropTypes from 'prop-types'

import PostHeader from './PostHeader'

const Post = ({ data }) => {
  const {
    name, avatar, time, comment,
  } = data

  return (
    <div className="post">
      <PostHeader avatar={avatar} name={name} time={time} />
      <p>{comment}</p>
    </div>
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired,
}

export default Post
