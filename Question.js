/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
    TouchableOpacity,
    Image,
    Text,
    View, Dimensions
} from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const time = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60

    return (
        <View>
            <View ><Text style={{ fontSize: 14 }}>{remainingTime}</Text></View>

        </View>
    )
}
export default function Question({ no, question,ans ,click,setClick,rc,back,setBack,setIsRq }) {
    const [d, setD] = useState({});
    
    function select(choice){
        if(click==false){
            if(rc==choice){
                setBack('green');
                setIsRq(true);
            }
            else{
                setBack('red');
                setIsRq(false);
            }
            setClick(true);
            
        }
    }
    
    useEffect(() => {

        console.log(question);
        // BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        // return () => {
        //   BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        // };
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{color:'black', fontSize: 23, margin: 20, fontWeight: '500' }}>
                    {no + 1}.
                </Text>
                 {/* <View style={{ margin: 20, alignItems: 'flex-end', flex: 1 }}> */}
                    {/* <CountdownCircleTimer
                        isPlaying
                        duration={60}
                        initialRemainingTime={15}
                        colors="#A30000"
                    /> */}
                    {/* <CountdownCircleTimer
                        onComplete={() => {
                            // do your stuff here
                            return [true, 1500] // repeat animation in 1.5 seconds
                        }}
                        isPlaying={true}
                        duration={60}
                        colors={[["#00af91"], ["#FF0000", 0.33]]}
                        size={30}
                        initialRemainingTime={60}
                        strokeWidth={3}

                    >

                        {time}
                    </CountdownCircleTimer> */}
                {/* </View>  */}
            </View>
            <View >
                <Text  style={{color:'black', fontSize: 23, marginHorizontal: 20, fontWeight: '500' }}>
                        {question}
                </Text>
                
                <TouchableOpacity onPress={()=>select(ans[0])} activeOpacity={0.8} style={{backgroundColor:back,borderRadius:10,borderColor:'#fca831',borderWidth:2,marginHorizontal:20,marginTop:20,paddingStart:10,paddingVertical:5}}>
                    <Text style={{color:'black', fontSize: 18, fontWeight: '400' }}>
                        1. {ans[0]}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>select(ans[1])} activeOpacity={0.8} style={{backgroundColor:back,borderRadius:10,borderColor:'#fca831',borderWidth:2,marginHorizontal:20,marginTop:20,paddingStart:10,paddingVertical:5}}>
                    <Text style={{color:'black', fontSize: 18, fontWeight: '400' }}>
                    2. {ans[1]}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>select(ans[2])} activeOpacity={0.8} style={{backgroundColor:back,borderRadius:10,borderColor:'#fca831',borderWidth:2,marginHorizontal:20,marginTop:20,paddingStart:10,paddingVertical:5}}>
                    <Text style={{color:'black', fontSize: 18, fontWeight: '400' }}>
                    3. {ans[2]}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>select(ans[3])} activeOpacity={0.8} style={{backgroundColor:back,borderRadius:10,borderColor:'#fca831',borderWidth:2,marginHorizontal:20,marginTop:20,paddingStart:10,paddingVertical:5}}>
                    <Text style={{color:'black', fontSize: 18, fontWeight: '400' }}>
                    4. {ans[3]}
                    </Text>
                </TouchableOpacity>
            </View>


        </View>


    );
};


