import {View} from 'react-native';

import MessageImage from './MessageImage';
import MessageText from './MessageText';
import SendingTime from './SendingTime';

function Message() {
  return (
    <View style={{marginVertical: 4}}>
      <SendingTime />
      <MessageImage />
      <MessageText />
    </View>
  );
}

export default Message;
