import React from 'react';
import Container from '../components/Container';
import RowComponent from '../components/RowComponent';
import SectionComponent from '../components/SectionComponent';
import TextComponent from '../components/TextComponent';
import TitleComponent from '../components/TitleComponent';
import {Text, View} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import CardComponent from '../components/CardComponent';

const HomeScreen = () => {
  return (
    <Container>
      <SectionComponent>
        <RowComponent justify="space-between">
          <TextComponent text="dada" />
          <TextComponent text="dada" />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <TextComponent text="Hi, Jason" />
        <TitleComponent text="Be Productive today" />
      </SectionComponent>
      <SectionComponent>
        <RowComponent
          styles={[globalStyles.inputContainer]}
          onPress={() => console.log('Say Hi')}>
          <TextComponent text="Search"></TextComponent>
          <Text>S</Text>
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <CardComponent>
          <RowComponent>
            <View style={{flex: 1}}>
              <TitleComponent text="Task progress" />
              <TextComponent text="30/40 tasks done" />
              <TextComponent text="Tag" />
            </View>
            <View>
              <TextComponent text="CircleChar" />
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
    </Container>
  );
};

export default HomeScreen;