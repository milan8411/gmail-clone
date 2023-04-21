import React, { useEffect, useState } from 'react'
import './EmailList.css'
import { ArrowDropDown, CheckBox , ChevronLeft,
    ChevronRight, IconButton, Inbox, KeyboardHide, 
    LocalOffer, MoreVert, People, Redo, Settings}
    from '@mui/icons-material'
import Section from './Section';
import EmailRow from './EmailRow';
import { db } from './firebase';
// import { doc } from 'firebase/firestore';
import { keys } from '@mui/system';


function EmailList() {

  const [emails , setEmails] = useState([]);

  useEffect(()=> {
    db.collection('emails')
    .orderBy('timestamp', 'desc')
    .onSnapshot((snapshot) => 
      setEmails(snapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }))
    )
    );
  },[]);


  return (
    <div className='emaillist'>
      <div className='emaillist__settings'>
          <div className='emaillist__settingsleft'>
            <CheckBox></CheckBox>
            {/* <IconButton> */}
                <ArrowDropDown></ArrowDropDown>
                {/* </IconButton> */}
            {/* <IconButton> */}
                <Redo></Redo>
                {/* </IconButton> */}
            {/* <IconButton> */}
                <MoreVert></MoreVert>
                {/* </IconButton> */}
          </div>

          <div className='emaillist__settingsright'>
            {/* <IconButton> */}
                <ChevronLeft></ChevronLeft>
                {/* </IconButton> */}
            {/* <IconButton> */}
                <ChevronRight></ChevronRight>
                {/* </IconButton> */}
            {/* <IconButton> */}
                <KeyboardHide></KeyboardHide>
                {/* </IconButton> */}
            {/* <IconButton> */}
                <Settings></Settings>
                {/* </IconButton> */}
          </div>
      </div>

      <div className='emaillist__sections'>
        <Section Icon={Inbox} title='primary' color='red' selected/>
        <Section Icon={People} title='Social' color='#1A73E8' />
        <Section Icon={LocalOffer} title='Promotions' color='green' />
      </div>
      
      <div className="emailist__List">
      {emails.map(
          ({
            id,
            data: {
              to: { to },
              subject: { subject },
              message: { message },
              // timestamp: { "10 pm" },
            },
          }) => (
            <EmailRow
              id={id}
              key={id}
              title={to}
              subject={subject}
              description={message}
              time={"10pm"}
            />
          )
        )}
        {/* {emails.map(({ id , data: { to, subject, message, timestamp }}) => (
          <EmailRow
          id={id}
          key={id}
          title={to} 
          subject={subject}
          description={message}
          time={new Date(timestamp?.seconds * 1000).toUTCString()} */}
          {/* /> */}
        {/* ))} */}

        <EmailRow title='Twitch'
        subject='Reguarding work'
        description='-submit the code'
        time='10pm'
        />
        <EmailRow title='Twitch'
        subject='Reguarding work'
        description='-submit the code '
        time='10pm'
        />


      </div>
    </div>
  );
}

export default EmailList