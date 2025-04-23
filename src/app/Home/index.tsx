import { Alert, FlatList, Text, View } from "react-native";
import { IconClipboardText } from "@tabler/icons-react-native"
import uuid from 'react-native-uuid';
import { s } from "./styles";
import { colors } from "../../styles/theme";
import { useState } from "react";
import { Task, TaskProps } from "../../components/Task";
import { Header } from "../../components/Header";
import { InputTask } from "../../components/InputTask";
import { TasksInfo } from "../../components/TasksInfo";

export default function Home() {
  const [taskInput, setTaskInput] = useState('')
  const [tasks, setTasks] = useState<TaskProps[]>([])

  function handleAddTask() {
    setTasks(prevState => [...prevState, { id: uuid.v4(), task: taskInput, isCompleted: false }])
    setTaskInput('')
  }

  function handleRemoveTask(id: string) {
    Alert.alert("Remover", "Deseja remover essa ação?", [
      {
        text: "Não",
        style: "cancel"
      },
      {
        text: "Sim",
        onPress: () => setTasks(prevState => prevState.filter(taskItem => taskItem.id !== id))
      }
    ])
  }

  function handleTaskDone(id: string) {
    setTasks(task =>
      task.map(task => {
        task.id === id ? task.isCompleted = !task.isCompleted : null
        return task
      }),
    )
  }

  const tasksFinished = tasks.filter(({isCompleted}) => isCompleted).length


  return (
    <View style={s.container}>
      <Header />

      <View style={s.content}>
        <InputTask onChangeText={setTaskInput} value={taskInput} onPress={handleAddTask} />
        <TasksInfo createdLength={tasks.length} finishedLenght={tasksFinished} />

        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Task
              onRemove={() => handleRemoveTask(item.id)}
              onTaskDone={() => handleTaskDone(item.id)}
              key={item.id}
              {...item}
            />
          )}
          ListEmptyComponent={() => (
            <View style={s.listEmptyContainer}>
              <IconClipboardText size={56} color={colors.gray[400]} />
              <Text style={s.listEmptyTitle}>Você ainda não tem tarefas cadastradas</Text>
              <Text style={s.listEmptySubtitle}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}