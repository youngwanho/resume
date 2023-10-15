<template>
    <v-row class="px-3">
        <v-col cols="12" md="4">
            <v-list-subheader>개발 능력</v-list-subheader>
            <v-sheet rounded="lg">
                <DevelChart />
            </v-sheet>
        </v-col>
        <v-col cols="12" md="4">
            <v-list-subheader>디자인 능력</v-list-subheader>
            <v-sheet rounded="lg">
                <DesignChart />
            </v-sheet>
        </v-col>
        <v-col cols="12" md="4">
            <v-list-subheader>일본어 능력</v-list-subheader>
            <v-sheet rounded="lg">
                <JapanChart />
            </v-sheet>
        </v-col>
        <v-col cols="12" md="12">
            <v-list-subheader>업무 능력</v-list-subheader>
            <v-tabs v-model="tab" centered stacked>
                <v-tab :class="[item.class]" class="mr-2" v-for="item in tabItems" :key="item" :value="(item.value)">
                    <v-icon size="x-large">{{ item.icon }}</v-icon>
                    <span class="mt-1">{{ item.title }}</span>
                </v-tab>
            </v-tabs>
            <v-window class="w-100 mt-3" rounded="lg" v-model="tab">
                <v-window-item v-for="item in tabItems" :key="item" :value="(item.value)">
                    <v-row>
                        <v-col cols="12" lg="3" v-for="item in item.programItems" :key="item">
                            <v-card class="ability-card" height="150">
                                <v-card-text>
                                    <div class="d-flex justify-space-between">
                                        <div>
                                            <div>{{ item.category }}</div>
                                            <p class="text-h6 text--primary pt-1">{{ item.title }}</p>
                                        </div>
                                        <v-progress-circular :rotate="360" :size="50" :width="10" :model-value="(value)"
                                            :color="(item.color)">
                                            {{ item.value }}
                                        </v-progress-circular>
                                    </div>
                                    <div class="text--primary mt-2">{{ item.slogan }}</div>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-window-item>
            </v-window>
        </v-col>
    </v-row>
</template>
<script>
import BarChart from '../views/chart/BarChart';
import DevelChart from '../views/chart/DevelChart';
import DesignChart from '../views/chart/DesignChart';
import JapanChart from '../views/chart/JapanChart';

export default {
    components: {
        BarChart,
        DevelChart,
        DesignChart,
        JapanChart,
    },
    data: () => ({
        tab: null,
        value: 0,
        tabItems: [
            {
                title: '개발',
                value: 'one',
                icon: 'mdi-developer-board',
                class: 'btn-tab1',
                programItems: [
                    {
                        title: 'HTML',
                        category: '퍼블리싱',
                        slogan: 'HTML을 이용한 하드코딩 및 부트스트랩 프레임워크 기반 코딩가능.',
                        value: '95',
                        color: '#637dd7' 
                    },
                    {
                        title: 'CSS',
                        category: '퍼블리싱',
                        slogan: 'CSS를 이용한 커스텀,애니메이션,포커싱,반응형 및 SCSS를 이용한 효율적인 유지보수 가능.',
                        value: '90',
                        color: '#637dd7' 
                    },
                    {
                        title: 'J-Query',
                        category: '퍼블리싱',
                        slogan: 'JQuery를 이용한 이벤트 구현 및 다양한 라이브러리 사용가능.',
                        value: '70',
                        color: '#637dd7' 
                    },
                    {
                        title: 'JAVA Script',
                        category: '퍼블리싱',
                        slogan: 'JAVA Script를 이용한 이벤트 구현 및 다양한 라이브러리 사용가능.',
                        value: '60',
                        color: '#637dd7' 
                    },
                    {
                        title: 'VUE.js',
                        category: '퍼블리싱',
                        slogan: 'VUE.js프레임워크를 사용한 퍼블리싱 가능 및 다양한 라이브러리 사용가능.',
                        value: '70',
                        color: '#637dd7' 
                    },
                ],
            },
            {
                title: '디자인',
                value: 'two',
                icon: 'mdi-draw',
                class: 'btn-tab2',
                programItems: [
                    {
                        title: '어도비 포토샵',
                        category: '디자인',
                        slogan: '포토샵의 기본적인 툴 사용 및 편집디자인 가능.',
                        value: '80',
                        color: '#fd98a2' 
                    },
                    {
                        title: '어도비 일러스트',
                        category: '디자인',
                        slogan: '일러스트의 기본적인 툴 사용 및 편집디자인 가능.',
                        value: '70',
                        color: '#fd98a2' 
                    },
                    {
                        title: '어도비 XD',
                        category: '디자인',
                        slogan: 'XD의 기본적인 툴 사용 및 UI/UX디자인 가능.',
                        value: '70',
                        color: '#fd98a2' 
                    },
                    {
                        title: '어도비 라이트룸',
                        category: '디자인',
                        slogan: 'XD의 기본적인 툴 사용 및 UI/UX디자인 가능.',
                        value: '40',
                        color: '#fd98a2' 
                    },
                ],
            },
            {
                title: '일본어',
                value: 'three',
                icon: 'mdi-book-open-variant',
                class: 'btn-tab3',
                programItems: [
                    {
                        title: '말하기',
                        category: '디자인',
                        slogan: '포토샵의 기본적인 툴 사용 및 편집디자인 가능.',
                        value: '80',
                        color: '#68cea0' 
                    },
                    {
                        title: '듣기',
                        category: '디자인',
                        slogan: '일러스트의 기본적인 툴 사용 및 편집디자인 가능.',
                        value: '60',
                        color: '#68cea0' 
                    },
                    {
                        title: '읽기',
                        category: '디자인',
                        slogan: 'XD의 기본적인 툴 사용 및 UI/UX디자인 가능.',
                        value: '70',
                        color: '#68cea0' 
                    },
                    {
                        title: '쓰기',
                        category: '디자인',
                        slogan: 'XD의 기본적인 툴 사용 및 UI/UX디자인 가능.',
                        value: '50',
                        color: '#68cea0' 
                    },
                ],
            }
        ],
    }),
    
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 80) {
          return (this.value = 80)
        }
        this.value += 10
      }, 100)
  },
}
</script>
