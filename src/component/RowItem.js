import { Text, View } from "react-native";


const RowItem = (props) => {
    const { name, number,isPrime } = props;
    
    return <View style={{ backgroundColor: isPrime ? '#CDDFA0' : '#78586F', marginTop: 5, marginLeft: 5, marginRight: 5, padding: 8 }}>
        <Text style={{ fontSize: 18, color: '#000' }}>{name}</Text>
        <Text style={{ fontSize: 15, color: '#000' }}>{number}</Text>
    </View>
}

export default RowItem;