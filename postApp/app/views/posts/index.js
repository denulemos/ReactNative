import React , {useEffect} from 'react';
import {
    ScrollView,
    View
} from 'react-native';

import Button from '../../components/button';

import {styles} from './styles';

const Posts = () => {

    const arr =[
        {name : 'lala'},
        {name : 'lala'},
        {name : 'lala'},
        {name : 'lala'},
        {name : 'lala'},
        {name : 'lala'},
        {name : 'lala'},
        {name : 'lala'},
        {name : 'lala'},
    ]
    //const [state, setState] = useState(0);

    
    return (
        <View style={styles.container}>
           <ScrollView>
               {arr.map (i => (
                   <Button title={arr.name}
                   action={() => console.log(arr.name)}
                   />
               ))}
           </ScrollView>
        </View>
    );
}

export default Posts;