import React from 'react';

const Home = props => {
    return (
        <div className="profile-sidebar probootstrap-main probootstrap-bar">
        {/* SIDEBAR USERPIC */}
        <h1 className="text-center">Ласкаво просимо!</h1>
        <div className="profile-userpic text-center">
          <img className="rounded" style={{borderRadius: "50%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNRhLCAesvQqb9420RaRCtmb-_khcFOdQWYGXFSNE9DMinR0XS" className="img-responsive" alt />
        </div>
        {/* END SIDEBAR USERPIC */}
        {/* SIDEBAR USER TITLE */}
        <div className="profile-usertitle">
            
          <div className="profile-usertitle-name text-center">
             Ви увійшли як: <h2>Василь Петрович</h2>
          </div>
          <div className="profile-usertitle-job">
            
          </div>
        </div>
        {/* END SIDEBAR USER TITLE */}
        {/* SIDEBAR BUTTONS */}
      </div>
    )
}

export default Home;