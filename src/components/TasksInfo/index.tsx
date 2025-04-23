import React from 'react';
import { View, Text } from 'react-native';
import { s } from './styles';

type InfoProps = {
    createdLength: number
    finishedLenght?: number
}

export function TasksInfo({ createdLength, finishedLenght }: InfoProps) {
    return (
        <View style={s.tasksHeader}>
            <View style={s.infoContainer}>
                <Text style={s.createdText}>Criadas</Text>
                <View style={s.counterContainer}>
                    <Text style={s.counterText}>{createdLength}</Text>
                </View>
            </View>
            <View style={s.infoContainer}>
                <Text style={s.finishedText}>Concluídas</Text>
                <View style={s.counterContainer}>
                    <Text style={s.counterText}>{finishedLenght}</Text>
                </View>
            </View>
        </View>
    );
};