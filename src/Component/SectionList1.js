import React from 'react'
import { View, Text, SectionList } from 'react-native'

const SectionList1 = () => {

    data = [
        {
            id: 1,
            name: 'Anil',
            data: ['java', "c++", 'Php']
        },
        {
            id: 2,
            name: 'Sumit',
            data: ['dbms', "php", 'C']
        },
        {
            id: 1,
            name: 'rani',
            data: ['native', "react", 'Php']
        },
    ]





    return (
        <View>
            <SectionList
                sections={data}
                renderItem={({ item }) => <Text>{item}</Text>}
                renderSectionHeader={({ section: { name } }) => (
                    <Text style={{ fontSize: 23, color: 'red' }}>{name}</Text>

                )}

            />
        </View>
    )
}
export default SectionList1;