import {
  Add,
  Edit2,
  Element4,
  Notification,
  SearchNormal1,
} from 'iconsax-react-native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AvatarGroup from '../components/AvatarGroup';
import CardComponent from '../components/CardComponent';
import CardImageComponent from '../components/CardImageComponent';
import CicularComponent from '../components/CicularComponent';
import Container from '../components/Container';
import ProgressBarComponent from '../components/ProgressBarComponent';
import RowComponent from '../components/RowComponent';
import SectionComponent from '../components/SectionComponent';
import SpaceComponent from '../components/SpaceComponent';
import TagComponent from '../components/TagComponent';
import TextComponent from '../components/TextComponent';
import TitleComponent from '../components/TitleComponent';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fontFamilies';
import {globalStyles} from '../styles/globalStyles';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Container>
        <SectionComponent>
          <RowComponent justify="space-between">
            <Element4 size={24} color={colors.desc} />
            <Notification size={24} color={colors.desc} />
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
            <TextComponent color="#696B6F" text="Search task"></TextComponent>
            <Text>S</Text>
            <SearchNormal1 size={28} color={colors.desc} />
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <CardComponent>
            <RowComponent>
              <View style={{flex: 1}}>
                <TitleComponent text="Task progress" />
                <TextComponent text="30/40 tasks done" />

                <SpaceComponent height={12} />
                <RowComponent justify="flex-start">
                  <TagComponent
                    text="Match 22"
                    onPress={() => console.log('Hello World')}
                  />
                </RowComponent>
              </View>
              <View>
                <CicularComponent value={80} />
              </View>
            </RowComponent>
          </CardComponent>
        </SectionComponent>
        <SectionComponent>
          <RowComponent styles={{alignItems: 'flex-start'}}>
            <View style={{flex: 1}}>
              <CardImageComponent>
                <TouchableOpacity
                  onPress={() => {}}
                  style={[globalStyles.iconContainer]}>
                  <Edit2 size={20} color={colors.white} />
                </TouchableOpacity>
                <TitleComponent text="UX Design" />
                <TextComponent text="Task management mobile app" size={13} />

                <View style={{marginVertical: 28}}>
                  <AvatarGroup />
                  <ProgressBarComponent
                    percent="70%"
                    color="#0AACFF"
                    size="large"
                  />
                </View>
                <TextComponent
                  text="Due, 2023 March 03"
                  size={12}
                  color={colors.desc}
                />
              </CardImageComponent>
            </View>
            <SpaceComponent width={16} />

            <View style={{flex: 1}}>
              <CardImageComponent color="rgba(33, 150, 243, 0.9)">
                <TouchableOpacity
                  onPress={() => {}}
                  style={[globalStyles.iconContainer]}>
                  <Edit2 size={20} color={colors.white} />
                </TouchableOpacity>
                <TitleComponent text="API Payment" size={18} />
                <AvatarGroup />
                <ProgressBarComponent percent="40%" color="#A2F068" />
              </CardImageComponent>

              <SpaceComponent height={16} />

              <CardImageComponent color="rgba(18, 181, 22, 0.9)">
                <TouchableOpacity
                  onPress={() => {}}
                  style={[globalStyles.iconContainer]}>
                  <Edit2 size={20} color={colors.white} />
                </TouchableOpacity>
                <TitleComponent text="Update work" />
                <TextComponent text="Revision home page" size={13} />
              </CardImageComponent>
            </View>
          </RowComponent>
        </SectionComponent>

        <SectionComponent>
          <TextComponent
            flex={1}
            font={fontFamilies.bold}
            size={21}
            text="Urgents tasks"
          />
          <CardComponent>
            <RowComponent>
              <CicularComponent value={40} radius={36} />
              <View
                style={{flex: 1, justifyContent: 'center', paddingLeft: 12}}>
                <TextComponent text="Title of task" />
              </View>
            </RowComponent>
          </CardComponent>
        </SectionComponent>
      </Container>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={1}
          style={[
            globalStyles.row,
            {
              backgroundColor: 'coral',
              padding: 10,
              borderRadius: 100,
              width: '80%',
            },
          ]}>
          <TextComponent text="Add new task" flex={0} />
          <Add size={22} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
