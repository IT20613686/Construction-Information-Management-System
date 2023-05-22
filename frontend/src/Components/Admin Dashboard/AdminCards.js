import React from 'react'
import AdminCardItem from './AdminCardItem'
import './AdminCards.css'

function AdminCards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <AdminCardItem
              src="images/construction.jpg"
              text="Construction Management"
              path="/"
            />
            <AdminCardItem
              src="images/hardware.jpg"
              text="Hardware Management"
              path="/hardware-dash"
            />
          </ul>
          <ul className="cards__items">
            <AdminCardItem src="images/water.jpg" text="Water Management" path="/" />
            <AdminCardItem src="images/power.jpg" text="Power Management" path="/" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminCards