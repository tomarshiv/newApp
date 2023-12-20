import React from 'react'
import { View, Text, Button } from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet'
import TextBox from './TextBox'
import { useRef } from 'react'
const RbSheet = ({ backgroundColor,onPress ,title}) => {
    const refRBSheet = useRef();
    return (
        <View
            style={{
                //   flex: 7,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                margin: 14,
                
                
            }}>
            <Button title='title'  onPress={() => refRBSheet.current.open()} />

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: backgroundColor
                    }
                }}
            >
                <TextBox />

            </RBSheet>

        </View>
    )
}
RbSheet.defaultProps = {
    title:'sumbit',
    backgroundColor: "red",
    onPress: () => {
        alert('Please provide onPress function');
         },
       

}






export default RbSheet