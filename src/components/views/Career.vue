<template>
      <v-list lines="two">
        <v-list-subheader>경력 리스트</v-list-subheader>
        <template v-for="(item, i) in careerItems" :key="i">
            <v-list-item>
                <template v-slot:prepend>
                    <v-avatar>
                        <v-img src="https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg"></v-img>
                    </v-avatar>
                </template>
                <div class="d-flex align-center justify-space-between">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{ item.date }}</v-list-item-subtitle>
                </div>
                <h4 class="font-weight-medium">{{ item.job }}</h4>
            </v-list-item>
            <v-divider v-if="i !== 10" :key="`divider-${i}`" inset></v-divider>
        </template>
    </v-list>
    <v-list lines="two">
        <v-list-subheader>학력 리스트</v-list-subheader>
        <template v-for="(item, i) in educationItems" :key="i">
            <v-list-item>
                <template v-slot:prepend>
                    <v-avatar>
                        <v-img src="https://cdn-icons-png.flaticon.com/512/194/194931.png"></v-img>
                    </v-avatar>
                </template>
                <div class="d-flex align-center justify-space-between">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{ item.date }}</v-list-item-subtitle>
                </div>
                <h4 class="font-weight-medium">{{ item.job }}</h4>
            </v-list-item>
            <v-divider v-if="i !== 10" :key="`divider-${i}`" inset></v-divider>
        </template>
    </v-list>
</template>
<script>
export default {
    data: () => ({
        careerItems: [
            { title: '제이브로컴퍼니', job: '웹퍼블리셔', date: '2022년 04월 12일' },
            { title: '씽크블락', job: '웹퍼블리셔 / 일본어(번역)', date: '2022년 04월 12일' },
            { title: '도톤플라자(오사카)', job: '일본어(통.번역)', date: '2022년 04월 12일' },
            { title: '돈키호테(오사카)', job: '일본어(통.번역)', date: '2022년 04월 12일' },
            { title: '친절한형제들', job: '레크레이션강사', date: '2022년 04월 12일' },
        ],
        educationItems: [
            { title: '그린컴퓨터아카데미', job: '웹퍼블리셔/디자인', date: '2022년 04월 12일' },
            { title: 'YBM평생교육원(학점은행제)', job: '영어영문학', date: '2022년 04월 12일' },
            { title: '메릭일본어학원(오사카)', job: '일본어학', date: '2022년 04월 12일' },
            { title: '목포대학교', job: '간호학과', date: '2022년 04월 12일' },
            { title: '광주자연과학고등학교', job: '식물학과', date: '2022년 04월 12일' },
        ],
    }),
}
</script>