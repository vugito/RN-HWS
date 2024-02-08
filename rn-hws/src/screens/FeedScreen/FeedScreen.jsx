import React from 'react';
import styles from './styles';
import BasicLayout from "../../common/layouts/basic-layout/basic-layout";
import FeedBodyContent from "../../components/sections/Contents/FeedBodyContent/FeedBodyContent";
import FeedFlatListBodyContent
    from "../../components/sections/Contents/FeedFlatListBodyContent/FeedFlatListBodyContent";

const FeedScreen = ({navigation}) => {
    return (
        <BasicLayout
            headerShown={true}
            headerTitle='Feed'
            footerShown={true}
            navigation={navigation}>

            {/* Основная секция. */}
            {/*<FeedBodyContent/>*/}

            {/* Задание ДЗ4 - 5. Отрисуйте страницу Feed используя Flatlist
            Выдает ошибку, я так понял что нельзя использовать вместе с ScrollView.
            Либо я не так понял. И вообще что-то мне самому не понравился результат*/}
            <FeedFlatListBodyContent/>

        </BasicLayout>
    );
};

export default FeedScreen;