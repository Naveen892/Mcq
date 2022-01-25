import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
const width = Dimensions.get("screen").width;

export default function result({ route, navigation }) {
    const { qa, rq } = route.params;
    const [color, setColor] = useState([]);
    const [result, setResult] = useState([]);
    const [url,setUrl] =useState('');
    useEffect(() => {
        if (rq > 3) {
            setColor('green');
            setResult('Congratulations You Have Passed the exam And got ' + rq * 10 + "% marks.");
            setUrl("./happiness.png");
        }
        else {
            setColor('red');
            setResult('Sorry You Have Failed the exam And got Only ' + rq * 10 + "% marks.");
            setUrl("./sad.png");
        }
    })
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ backgroundColor: '#00af91', flex: 1 }}>
                <View style={{ justifyContent: 'flex-end', alignItems: 'center',flex:0.8 }}>
                    {/* <Image source={require('/home/naveen/MCQuiz/brain.png')} style={{width:200,height:200,tintColor:'#fca831'}}/>
             */}
                    <Image source={rq<=3?require("./sad.png") : require("./happiness.png") } style={{height:200,width:200,marginBottom:50}}/>
                    <Text style={{ fontSize: 20, fontWeight: '500', color: 'white' }}>
                        Attampted Question : {qa}
                    </Text >
                    <Text style={{ fontSize: 20, fontWeight: '500', color: 'white' }}>
                        Correct Question : {rq}
                    </Text>
                    <Text style={{ fontSize: 30, fontWeight: '500', color: color, margin: 20, textAlign: 'center' }}>
                        {result}
                    </Text>
                </View>
                <View style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>

                    <TouchableOpacity activeOpacity={0.85} onPress={() => navigation.navigate('App')} style={{ width: width / 2, height: 40, marginTop: 40, borderWidth: 2, borderRadius: 10, borderColor: '#fca831', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: '500', color: '#fca831' }}>
                            Return to Home
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}