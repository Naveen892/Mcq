import React, { useState, useEffect } from 'react';
import {
    TouchableOpacity,
    Image,
    Text,
    View, Dimensions
} from 'react-native';
import Question from './Question';
import StepIndicator from 'react-native-step-indicator';
const labels = [];
const customStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 50,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 5,
    stepStrokeCurrentColor: 'black',
    stepStrokeWidth: 4,
    stepStrokeFinishedColor: 'black',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: 'black',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: 'black',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: 'black',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: "black",

}
function increaseCount() {
    if (x < 3) setX(x + 1);
}


function Quiz({ navigation }) {
    const [x, setX] = useState(0);
    const [q, setQ] = useState([]);
    const [data, setData] = useState([]);
    const [click, setClick] = useState(false);
    const [back, setBack] = useState('white');
    const [ans, setAns] = useState([]);
    const [qA, setQA] = useState([]);
    const [rq, setRQ] = useState([]);
    const [isrq, setIsRq] = useState(false);

    const [rc, setRc] = useState([]);
    function next() {
        if (click) {
            if (x < 9) {
                setX(x + 1);
                setQ(data.results[x + 1].question);
                const t = Math.floor(Math.random() * 4);
                const answer = data.results[x + 1].incorrect_answers;
                answer.splice(t, 0, data.results[x + 1].correct_answer);
                setAns(answer);
                setRc(data.results[x + 1].correct_answer);
                console.log(ans);
                console.log(t + " " + ans.length);
                setBack('white');
                setClick(false);
                setQA(qA + 1);
                if (isrq) {
                    setRQ(rq + 1);
                }
                setIsRq(false);
            }
            else {
                // setQA(qA + 1);
                // if (isrq) {
                //     setRQ(rq + 1);
                // }
                // setIsRq(false);
                navigation.navigate('result', { qa: qA+1, rq: isrq?rq+1:rq });
            }
        }




    }
    function Skip() {

        if (x < 9) {
            setX(x + 1);
            setQ(data.results[x + 1].question);
            const t = Math.floor(Math.random() * 4);
            const answer = data.results[x + 1].incorrect_answers;
            answer.splice(t, 0, data.results[x + 1].correct_answer);
            setAns(answer);
            setRc(data.results[x + 1].correct_answer);
            console.log(ans);
            console.log(t + " " + ans.length);
            setBack('white');
            setClick(false);

        }
        else {
            navigation.navigate('result',{ qa: qA, rq: rq });
        }
        setIsRq(false);





    }

    const getData = async () => {
        const url = 'https://opentdb.com/api.php?amount=10&category=19&type=multiple'
        const res = await fetch(url)

        // setData([{ question: "Which of the following famous mathematicians died in a duel at the age of 20", rightans: "Galois", wrong: ["Abel", "Euler", "Gauss"] },
        // { question: "In the hexadecimal system, what number comes after 9?", rightans: "The Letter A", wrong: ["10", "The Number 0", "16"] },
        // { question: "What is the approximate value of mathematical constant e?", rightans: "2.72", wrong: ["3.14", "1.62", "1.41"] },
        // { question: "What&#039;s the square root of 49?", rightans: "7", wrong: ["4", "12", "9"] },
        //  { question: "Which of these numbers is closest to the total number of possible states for an army standard Enigma Machine?", rightans: "1.58 x 10^20", wrong: ["1.58 x 10^22", "1.58 x  10^18", "1.58 x 10^24"] },

        // ]);
        const d = await res.json();


        setData(d);

        setQ(d.results[x].question);

        const answer = d.results[x].incorrect_answers;
        const t = Math.floor(Math.random() * 4);
        answer.splice(t, 0, d.results[x].correct_answer);
        setAns(answer);
        setRc(d.results[x].correct_answer);
        console.log(ans);
        console.log(t);
        setQA(0);
        setRQ(0);
    }
    useEffect(() => {

        setX(0);
        getData();


        // BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        // return () => {
        //   BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        // };
    }, []);
    return (
        <View style={{ flex: 1, backgroundColor: '#00af91' }}>
            {q && <View style={{ flex: 1, backgroundColor: '#00af91' }}>
                <View style={{ height: 100, backgroundColor: '#00af91', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: '500', marginLeft: 25 }}>
                        MCQuiz
                    </Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ width: 100, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <StepIndicator
                            customStyles={customStyles}
                            labels={labels}
                            direction={'vertical'}
                            currentPosition={x}
                            stepCount={10}
                        />
                    </View>
                    <View style={{ backgroundColor: '#fff', flex: 1, borderTopLeftRadius: 20, elevation: 1 }}>
                        <View style={{ flex: 1 }}>
                            <Question setIsRq={setIsRq} no={x} back={back} setBack={setBack} question={q} ans={ans} click={click} setClick={setClick} rc={rc} />
                        </View>

                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <TouchableOpacity onPress={() => Skip()} activeOpacity={0.85} style={{ borderRadius: 20, elevation: 5, backgroundColor: '#00af91', width: 130, height: 35, marginBottom: 30, alignSelf: 'flex-end', justifyContent: 'center', margin: 10 }}>
                                <Text style={{ fontSize: 20, justifyContent: 'center', alignSelf: 'center', fontWeight: '500' }}>
                                    Skip
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => next()} activeOpacity={0.85} style={{ elevation: 5, borderRadius: 5, backgroundColor: '#00af91', width: 130, height: 35, marginBottom: 30, alignSelf: 'flex-end', justifyContent: 'center', margin: 10, }}>
                                <Text style={{ color: 'white', fontSize: 20, justifyContent: 'center', alignSelf: 'center', fontWeight: '500' }}>
                                    Next
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </View>}


        </View>


    );
};



export default Quiz;