import './index.scss'

import React from 'react'
import icons from 'icons'

const Notifications = () => {
  const items = [
    {
      from: '04/08/2019',
      to: '04/10/2019',
      type: 'Non-residential building',
      date: '05/14/2019'
    },
    {
      from: '04/08/2019',
      to: '04/10/2019',
      type: 'Non-residential building',
      date: '05/14/2019'
    },
    {
      from: '04/08/2019',
      to: '04/10/2019',
      type: 'Non-residential building',
      date: '05/14/2019'
    }
  ]

  const amount = 12;

  return (
    <>
    <div className="icon">
      <img src={icons.notifications} alt="notification" />
    </div>
    <div className={`notifications__container`}>
      {items.map((item, index)=> (
          <div className={`notifications__item`} key={index}>
            <p 
              className={`notifications__title`}>
                Effective Date has changed from<br/> {item.from} to {item.to} <span className={`notifications__status`}>new</span>
            </p>            
            <p className={`notifications__subtitle`}>Non-residential building</p>
            <div className={`notifications__author`}>
              <img src={icons.author} alt="author" className={`notifications__author-icon`} />
              <span className={`notifications__author-date`}>{item.date}</span>
            </div>
          </div>
      ))
      }
      <p className={`notifications__more`}><span className={`notifications__more-text`}>Show more</span> ({amount})</p>
    </div>
    </>
  )
}

export default Notifications
