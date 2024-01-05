import React from "react";
import { View, Text } from 'react-native'

const Array = () => {

//     const actors = [
//         {
//             name: 'Actor1',
//             payment: 100
//         },
//         {
//             name: 'Actor2',
//             payment: 320
//         },
//         {
//             name: 'Actor3',
//             payment: 220
//         },
//     ]

    // for(let i=0;i<Actor.length;i++)
    // {
    //     // console.log('###',Actor[i].payment)
    //     Actor[i].payment=Actor[i].payment-10
    //     console.log(Actor[1])

    // }


    // actors.forEach((acc)=>{
    //     // console.log('$$$$',acc)
    //     acc.payment=acc.payment-10



    // })
    // console.log(actors)
    // console.log(actors[1])



    // for of loop==========


    // for(let Actor of actors){
    //     // console.log('###',Actor[1])
    //     Actor.payment=Actor.payment-10
    //     console.log('###',Actor)
    // }



//     const student = [
//         {
//             name: 'ani',
//             marks: 45
//         },
//         {
//             name: 'Bani',
//             marks: 75
//         },
//         {
//             name: 'sani',
//             marks: 95
//         }
//     ]

//   student.filter((student)=>{
//     console.log('##',student)

//   })
const  data=[
    {
        fname:'anu',
        lname:'jain'
    },
    {
        fname:'manu',
        lname:'tomar'
    },
    {
        fname:'sanu',
        lname:'sharma'
    }
]

  const finaldata= data.map((user)=>{
    return{
     data:(user.fname + user.lname)
    }

})
console.log('###',data)




    return (
        <View>
            <Text>jjj</Text>
        </View>
    )
}
export default Array;