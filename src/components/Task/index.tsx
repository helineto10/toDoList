import { IconCircle, IconCircleCheck, IconTrash } from "@tabler/icons-react-native";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { s } from "./styles";
import { colors } from "../../styles/theme";

export type TaskProps = {
    id: string
    task: string
    isCompleted: boolean
}

type TaskCardProps = TouchableOpacityProps & TaskProps & {
    onRemove: (id: string) => void
    onTaskDone: (id: string) => void
}

export function Task({ id, task, onTaskDone, onRemove, isCompleted }: TaskCardProps) {
    return (
        <View style={s.container}>
            <TouchableOpacity onPress={() => onTaskDone(id)}>
                {isCompleted === true ? <IconCircleCheck color={colors.purple.dark} size={24} /> : <IconCircle color={colors.blue.light} size={24} />}
            </TouchableOpacity>
            <Text style={isCompleted === true ? s.taskTextChecked : s.taskText}>{task}</Text>
            <TouchableOpacity onPress={() => onRemove(id)}>
                <IconTrash color={colors.gray[300]} size={24} />
            </TouchableOpacity>
        </View>
    )
}