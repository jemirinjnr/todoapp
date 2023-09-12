import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { deleteTask } from "../redux/taskSlice";
import { useDispatch } from "react-redux";

const Todolist = () => {
    const dispatch =useDispatch(); 
    const Todos = useSelector((state) => state.tasks);
    console.log(Todos)
    const data = [
        {
            id: 1,
            title: "Learn React Native"
        },
        {
            id: 2,
            title: "Learn Redux Toolkit"
        }
    ]

    const ItemDelete = (id) => {
        dispatch(
            deleteTask({id:id}))
    }
    const renderItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => ItemDelete(item.id)}
                >
                    <Ionicons name="trash" size={24} color="red" />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={Todos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default Todolist

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#e9e9e9',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
    },
    delete: {
        fontSize: 24,
        color: 'red'
    }
})