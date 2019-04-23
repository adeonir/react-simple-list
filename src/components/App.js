import React, { Component, Fragment } from 'react'

import Header from './Header'
import Post from './Post'

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Savannah Burton',
        avatar: 'https://randomuser.me/api/portraits/women/75.jpg',
        time: 'há 10 minutos',
        comment:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit saepe quasi rem hic quia aliquam a, quibusdam esse eligendi necessitatibus. Dolore repudiandae minima cum sapiente iure ab at alias accusamus tempore cumque! Iste illum laboriosam voluptatum! Similique sequi, consequuntur, exercitationem at natus doloribus incidunt, pariatur quasi laboriosam quibusdam nam culpa.',
      },
      {
        id: 2,
        name: 'Marc Jackson',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        time: 'há 28 minutos',
        comment:
          'In optio velit ducimus dicta reiciendis ullam libero deserunt hic at accusantium quia molestias incidunt quae voluptatibus dolores accusamus, earum voluptatum. Magnam ad in quas explicabo odio vitae laudantium! Sed facere dolor exercitationem molestiae magni laboriosam quia, fugiat quo maiores repellat fugit non deserunt cupiditate totam libero, modi itaque sunt.',
      },
      {
        id: 3,
        name: 'April Long',
        avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
        time: 'há 45 minutos',
        comment:
          'Illo aspernatur expedita dolor temporibus beatae nostrum id minus! Unde voluptatem non tempora, quisquam, debitis dolores quod excepturi quas facilis in reiciendis sunt atque rem corporis at nesciunt. Consequuntur magnam voluptate eius sequi nostrum quae, consequatur ipsum recusandae voluptas quia assumenda consectetur velit molestiae temporibus voluptates architecto voluptatum maxime. Provident?',
      },
    ],
  }

  render() {
    const { posts } = this.state

    return (
      <Fragment>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </Fragment>
    )
  }
}

export default App
