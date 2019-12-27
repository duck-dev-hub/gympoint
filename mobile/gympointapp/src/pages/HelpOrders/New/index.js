import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';

import Background from '~/components/Background';

import api from '~/services/api';
import * as S from './styles';

export default function New({ navigation }) {
  const studentId = useSelector(state => state.auth.idUser);
  const [question, setQuestion] = useState('');

  const handleSendQuestion = async () => {
    try {
      const response = await api.post(`students/${studentId}/help-orders`, {
        question,
      });

      if (response) {
        Alert.alert('Sucesso', 'Pergunta eviada com sucesso.');
        setQuestion('');
      }
    } catch (error) {
      Alert.alert('Falha', 'Falha ao eviar pergunta.');
    }
  };

  return (
    <Background>
      <S.Container>
        <S.QuestionText onChangeText={setQuestion} value={question} />
        <S.SubmitButton onPress={handleSendQuestion}>
          Enviar pedido
        </S.SubmitButton>
      </S.Container>
    </Background>
  );
}
