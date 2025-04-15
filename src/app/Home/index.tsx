import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { IconCirclePlus, IconClipboardText } from "@tabler/icons-react-native"
import { s } from "./styles";
import { colors } from "../../styles/theme";
import { useState } from "react";

export default function Home() {
    const [taskInput, setTaskInput] = useState('')
    const [tasks, setTasks] = useState<string[]>([])

    function handleAddTask() {
        setTasks(prevState => [...prevState, taskInput])
        setTaskInput('')
    }


    return (
        <>
            <View style={s.header}>
                <Image
                    source={require("../../assets/Logo.png")}
                />
            </View>

            <View style={s.content}>
                <View style={s.inputButton}>
                    <TextInput
                        style={s.input}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor={colors.gray[300]}
                        onChangeText={setTaskInput}
                        value={taskInput}
                    />
                    <TouchableOpacity onPress={handleAddTask} style={s.button}>
                        <IconCirclePlus size={24} color={colors.gray[100]} />
                    </TouchableOpacity>
                </View>
                <View style={s.tasksHeader}>
                    <Text style={s.createdText}>Criadas</Text>
                    <Text style={s.finishedText}>Concluídas</Text>
                </View>
                <View style={s.divisor} />
                <FlatList
                    data={tasks}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Text>{item}</Text>
                    )}
                    ListEmptyComponent={() => (
                      <View style={s.listEmptyContainer}>
                        <IconClipboardText size={56} color={colors.gray[300]}/>
                        <Text style={s.listEmptyTitle}>Você ainda não tem tarefas cadastradas</Text>
                        <Text style={s.listEmptySubtitle}>Crie tarefas e organize seus itens a fazer</Text>
                      </View>  
                    )}
                />
            </View>
        </>
    )
}