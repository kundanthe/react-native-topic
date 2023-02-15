import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
const ConditionalRendering = () => {
    const [isBlueSelected, setIsBlueSelected] = useState(false);
    const [isGreenSelected, setIsGreenSelected] = useState(false);

    // const [selectedcolor, setSelectedColor] = useState('#0000FF');




    return <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>

        {isBlueSelected ? <View style={{
            width: 100, height: 100, borderRadius: 50,
            backgroundColor: '#0000FF'
        }} /> : null}

        {isGreenSelected ? <View style={{ width: 100, height: 100, 
            backgroundColor: '#00FF00', marginTop: 10 }} /> : null}


        <TouchableOpacity
            onPress={view => { setIsBlueSelected(true); setIsGreenSelected(false) }}
            style={{ backgroundColor: '#0000FF', width: 100, alignItems: 'center', marginTop: 10 }}>
            <Text style={{ fontSize: 20, color: '#ffffff' }}>Blue</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={view => { setIsGreenSelected(true) ; setIsBlueSelected(false)}}
            style={{ backgroundColor: '#00FF00', width: 100, alignItems: 'center', marginTop: 10 }}>
            <Text style={{ fontSize: 20, color: '#ffffff' }}>Green</Text>
        </TouchableOpacity>



    </View>

}

export default ConditionalRendering;