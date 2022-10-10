import {View, Text} from 'react-native';

function MessageText({message}) {
  return (
    <View style={{padding: 6}}>
      {message && (
        <View
          style={{
            width: 180,
            borderRadius: 4,
            backgroundColor: '#00B2FF',
            color: '#fff',
          }}>
          <Text style={{color: '#fff', fontSize: 16}}>{message}</Text>
        </View>
      )}
    </View>
  );
}

export default MessageText;
