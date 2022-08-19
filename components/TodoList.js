import react,{Component} from "react";
import { Button, FlatList, View, Text } from "react-native-web";

class TodoList extends Component{

    //Lista estatica para teste
    static defaultProps = {

        list:[],

        onRemove: () =>{

        }


    }

    //função que controla estrutura da lista(id vs item)
    handleRow = ({item, index}) =>{

        return(

            <View style={{flexDirection: 'row', margin: 5}}>
                <Text style={{flex: 1}}>
                {this.formatListNumber(index)} - {item.text}
                </Text>   
                <Button  title="delete" color="#000" onPress={() => this.props.onRemove(item)} />
            </View>
            

        )
    }
    //formata id baseado na posição do array
    formatListNumber(number){

        const digito = 2;

        return('0'.repeat(digito) + (number + 1)).slice(-digito)




    }

 render(){
     const {props} =  this;
     const keyExtractor = item => item.id;
    return(

        <View>
            {/* estrutura da lista */}
            <FlatList 
            data={props.list} 
            keyExtractor={keyExtractor}
            renderItem={this.handleRow}
            />
            
        </View>

    )
}
}

export default TodoList;