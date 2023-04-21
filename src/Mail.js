import React from 'react'
import './Mail.css'
import { ArrowBack, CheckCircle, Delete, Email,
   Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox,
    Print,
    UnfoldMore,
    WatchLater } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';

function Mail() {
  const selectedMail = useSelector(selectOpenMail);
  const navigate = useNavigate();

  console.log(selectedMail);

  return (
    <div className='mail'>
      <div className='mail__tools'>
        <div className='mail__toolsLeft'>
          <ArrowBack onClick={() => navigate("/")} ></ArrowBack>
          <MoveToInbox/>
          <Error />
          <Delete />
          <Email />
          <WatchLater />
          <CheckCircle/>
          <LabelImportant/>
          <MoreVert />
        </div>


        <div className='mail__toolsRight'>
          <UnfoldMore/>
          <Print/>
          <ExitToApp/>

        </div>
      </div>
      <div className='mail__body'>
        <div className='mail__bodyHeader'>
          <h2>{selectedMail?.subject}</h2>
          <LabelImportant className='mail__important'/>
          <p>{selectedMail?.title}</p>
          <p className='mail__time'>{selectedMail?.time}</p>
        </div>
        <div className='mail__message'>
          <p>
          {selectedMail?.description}
          </p>
          </div>
      </div>
    </div>
  );
}

export default Mail