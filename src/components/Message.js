import {View} from 'react-native';

import MessageImage from './MessageImage';
import MessageText from './MessageText';
import SendingTime from './SendingTime';

import {useEffect, useRef, useState} from 'react';

/*

  data example

  {
    attachments: [],
    message: 'It has survived not only five centuries',
    timestamp: '2022-09-29 10:45',
  }


*/

function Message({message}) {
  const [showTime, setShowTime] = useState(true);

  useEffect(() => {
    let date = new Date(message.timestamp);
  }, []);

  return (
    <View style={{marginVertical: 4, alignSelf: 'flex-end'}}>
      {showTime && <SendingTime timestamp={message.timestamp} />}
      <MessageImage attachments={message.attachments} />
      <MessageText message={message.message} />
    </View>
  );
}

export default Message;
