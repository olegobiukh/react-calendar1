import React from 'react'
import icons from 'icons'
import styled from 'styleguide/styled';
import { colors } from 'styleguide/theme.json';

const NotificationsContainer = styled.div`
  display: grid;
  grid-gap: 4px;
  width: 300px;
  padding: 24px 16px;
  box-shadow: 0px 18px 50px ${colors.shadow};
  border-radius: 3px;
`
const NotificationsTitle = styled.div`
  margin: 0;
`
const NotificationsSubtitle = styled.div`
  margin-top: 4px;
  color: ${colors.grayDark};
`
const NotificationsAuthorsIcon = styled.img`
  margin-top: 4px;
  border-radius: 50%;
  width: 17px;
  height: 17px;
`
const NotificationsAuthorsDate = styled.span`
  margin-left: 10px;
  color: $c-gray;
`
const NotificationsAuthor = styled.div`
  display: flex;
  align-items: center;
`
const NotificationsStatus = styled.span`
  color: ${colors.red};
  text-transform: uppercase;  
`
const NotificationsMore = styled.p`
  margin: 0;
  text-align: center;
  margin-top: 24px;
  cursor: pointer;
`
const NotificationsMoreText = styled.span`
  font-weight: bold;
`
const NotificationsItem = styled.span`
  background-color: ${colors.grayLight};
  border-radius: 3px;
  padding: 12px 9px;
`

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
    <img src={icons.notifications} alt="notification" />
    <NotificationsContainer>
      {items.map((item, index)=> (
          <NotificationsItem key={index}>
            <NotificationsTitle>
                Effective Date has changed from<br/> {item.from} to {item.to} 
                <NotificationsStatus>new</NotificationsStatus>
            </NotificationsTitle>            
            <NotificationsSubtitle>Non-residential building</NotificationsSubtitle>
            <NotificationsAuthor>
              <NotificationsAuthorsIcon src={icons.author} alt="author" />
              <NotificationsAuthorsDate>{item.date}</NotificationsAuthorsDate>
            </NotificationsAuthor>
          </NotificationsItem>
      ))
      }
      <NotificationsMore>
        <NotificationsMoreText>Show more</NotificationsMoreText> ({amount})
      </NotificationsMore>
    </NotificationsContainer>
    </>
  )
}

export default Notifications
