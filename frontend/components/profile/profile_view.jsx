import React from 'react';

class ProfileView extends React.Component {
  userCreatedAt() {
    if (user.created_at) {
      return "hi";
    }
    return "no";
  }

  render() {
    const user = this.props.currentUser;
    return (
      <div className='profile-container'>
        <section className='prof-username'>
          { user.username }
        </section>
        <section className='prof-time-created'>
          { this.userCreatedAt }
        </section>
      </div>
    )
  }
}

export default ProfileView;
