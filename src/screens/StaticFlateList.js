import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import RowItem from "../component/RowItem";
const StaticFlateList = () => {

    const [progess, setProgress] = useState(true);
    const [listData, setListData] = useState([]);


    const dummyData = [{ name: 'Test1', number: '1234555' },
    { name: 'Test2', number: '1234553' },
    { name: 'Test3', number: '1234550' },
    { name: 'Test4', number: '1234554' },
    { name: 'Test5', number: '1234556' },
    { name: 'Test6', number: '1234557' },
    { name: 'Test7', number: '1234558' },
    { name: 'Test8', number: '1234559' },
    { name: 'Test9', number: '12345510' },
    ]

    useEffect(() => {
        
        setTimeout(()=>{
            setListData(dummyData)
            setProgress(false);
        },2000)


    }, []);

    const _renderItem = ({ item, index }) => {
        const { name, number } = item;
        const isPrime = index % 2;
        return <RowItem name={name} number={number} isPrime={isPrime} />
    }



    return <View style={{flex:1}}>
        <FlatList
            data={listData}
            keyExtractor={item => item.number}
            renderItem={_renderItem}
        />

       {progess && <ActivityIndicator color={"#E40066"} size={'large'} style={{ position: 'absolute', 
        left: 0, right: 0, top: 0, bottom: 0 }} /> }
    </View>


}
export default StaticFlateList;