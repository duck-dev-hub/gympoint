import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as S from './styles';

export default function HelpOrderBox({ data, navigation }) {
  const handleShowDetails = data => {
    console.tron.log(data);
  };

  return (
    <S.Container onPress={() => navigation.navigate('Detail', { data })}>
      <S.BoxInfoHead>
        <S.leftHead>
          <Icon
            name={data.answer ? 'mood' : 'mood-bad'}
            color={data.answer ? '#42CB59' : '#999999'}
            size={25}
          />
          <S.TextLeftHead
            color={data.answer ? '#42CB59' : '#999999'}
            asked={!!data.answer}
          >
            {data.answer ? 'Respondido' : 'Sem resposta'}
          </S.TextLeftHead>
        </S.leftHead>
        <S.HourHead>{data.relativeDate}</S.HourHead>
      </S.BoxInfoHead>

      <S.BoxInfoBody>
        <S.TextBody>{data.question}</S.TextBody>
      </S.BoxInfoBody>
    </S.Container>
  );
}
