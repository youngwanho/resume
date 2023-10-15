<template>
    <v-list lines="two">
        <template v-for="(item, i) in certificateItems" :key="i">
            <v-list-item>
                <template v-slot:prepend>
                    <v-avatar>
                        <v-img src="https://freeiconshop.com/wp-content/uploads/edd/certificate-flat.png"></v-img>
                    </v-avatar>
                </template>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.date }}</v-list-item-subtitle>
            </v-list-item>
            <v-divider v-if="i !== 10" :key="`divider-${i}`" inset></v-divider>
        </template>
    </v-list>
</template>
<script>
export default {
    data: () => ({
        certificateItems: [
            { title: '컴퓨터그래픽스운용기능사', date: '2022년 04월 12일' },
            { title: '웹디자인기능사', date: '2022년 04월 12일' },
            { title: 'GTQ(포토샵) 1급', date: '2022년 04월 12일' },
            { title: 'GTQI(일러스트) 1급', date: '2022년 04월 12일' },
            { title: 'JLPT(일본어) 3급', date: '2022년 04월 12일' },
            { title: '조경기능사', date: '2022년 04월 12일' },
            { title: '레크레이션강사', date: '2022년 04월 12일' },
            { title: '웃음치료사', date: '2022년 04월 12일' },
            { title: '펀리더쉽지도자', date: '2022년 04월 12일' },
            { title: '운전면허증 1종', date: '2022년 04월 12일' },
        ],
    }),
}
</script>