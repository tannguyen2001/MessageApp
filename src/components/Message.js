import {View} from 'react-native';

import MessageImage from './MessageImage';
import MessageText from './MessageText';
import SendingTime from './SendingTime';

/*

  data example

  {
    attachments: [],
    message: 'It has survived not only five centuries',
    timestamp: '2022-09-29 10:45',
  }


*/

function Message({message}) {
  console.log(message);
  return (
    <View style={{marginVertical: 4}}>
      <SendingTime timestamp={message.timestamp} />
      <MessageImage attachments={message.attachments} />
      <MessageText message={message.message} />
    </View>
  );
}

export default Message;
