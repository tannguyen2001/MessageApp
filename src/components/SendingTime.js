import {View, Text} from 'react-native';

function SendingTime({timestamp}) {
  console.log(timestamp);

  return (
    <View style={{margin: 4}}>
      <Text style={{textAlign: 'center', fontSize: 14}}>{timestamp}</Text>
    </View>
  );
}

export default SendingTime;
