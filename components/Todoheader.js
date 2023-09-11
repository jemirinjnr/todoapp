import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/taskSlice";


const Todoheader = () => {

    const [Todo, setTodo] = useState("");

    const dispatch = useDispatch();
    const onSubmitTask = () => {
        if (Todo.trim().length === 0) {
            Alert.alert("Please add a task")
        }
        dispatch(addTodo({task: Todo}))
        setTodo("");
        return;
    }


    return (
        <View>
            <Text style={{
                fontSize: 10,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 10,
            }}
            >
                Todo List
            </Text>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                    style={{
                        borderColor: "gray",
                        borderWidth: 1,
                        padding: 10,
                        margin: 10,
                        width: "90%",
                        borderRadius: 5,
                    }}
                    placeholder="Add todo"
                    onChangeText={setTodo}
                    value={Todo}
                />
                <TouchableOpacity style={{
                    backgroundColor: 'black',
                    padding: 10,
                    margin: 10,
                    width: "90%",
                    borderRadius: 5,
                    alignItems: 'center',
                }}
                    onPress={onSubmitTask}>
                    <Text style={{ color: 'white' }}>Add</Text>
                </TouchableOpacity></View>

        </View>
    )
}

export default Todoheader;

const styles = StyleSheet.create({})