<template>
    <v-row class="px-3">      
        <v-col cols="12" lg="4">
            <v-list-subheader>업무 능력</v-list-subheader>
            <v-sheet height="350" rounded="lg">
                <DevelChart />
            </v-sheet>
        </v-col>
        <v-col cols="12" lg="4">
            <v-list-subheader>경력 / 학력 리스트</v-list-subheader>
            <v-sheet class="overflow-auto" height="350px" rounded="lg">
                <div class="btn-box mt-3 ml-4">
                    <router-link class="btn-view" to="/resume">
                        <v-icon class="" size="medium">mdi-plus</v-icon>
                        <span>한눈에 보기</span>
                    </router-link>
                </div>
                <Career />     
            </v-sheet>                 
        </v-col>
        <v-col cols="12" lg="4">
            <v-list-subheader>자격증 리스트</v-list-subheader>
            <v-sheet class="overflow-auto" height="350px" rounded="lg">
                <div class="btn-box mt-3 ml-4">
                    <router-link class="btn-view" to="/resume">
                        <v-icon class="" size="medium">mdi-plus</v-icon>
                        <span>한눈에 보기</span>
                    </router-link>
                </div>
                <Certificate />     
            </v-sheet>    
        </v-col>
        <v-col cols="12" md="12">
            <div class="btn-box mb-2">
                    <router-link class="btn-view" to="/ability">
                        <v-icon class="" size="medium">mdi-plus</v-icon>
                        <span>한눈에 보기</span>
                    </router-link>
                </div>
            <v-list-subheader>프로그램 능력</v-list-subheader>
            <Swiper />
        </v-col>
        <v-col cols="12" md="12">
            <v-list-subheader>질문 & 답변</v-list-subheader>
            <v-sheet class="qna-sheet overflow-auto" height="450" rounded="lg">
                <div class="btn-box my-3 ml-4">
                    <router-link class="btn-view" to="/qna">
                        <v-icon class="" size="medium">mdi-plus</v-icon>
                        <span>한눈에 보기</span>
                    </router-link>
                </div>
                <QnA />                   
            </v-sheet>
        </v-col>
    </v-row>
    <div class="mt-3 ml-3">       
        <span color="red-darken-1">* 해당 홈페이지는 PC 및 모바일 해상도를 지원하고 있습니다.</span>    
    </div>
</template>
<script>
import Career from '../views/Career';
import Certificate from '../views/Certificate';
import QnA from '../views/QnA';
import Swiper from '../views/Swiper';
import DevelChart from '../views/chart/DevelChart';
export default {
    components: {
        Career,
        Certificate,
        QnA,
        Swiper,
        DevelChart
    },
    data: () => ({               
    
    }),
    beforeUnmount() {
        clearInterval(this.interval)
    },
    mounted() {
        this.interval = setInterval(() => {
            if (this.value === 80) {
                return (this.value = 80)
            }
            this.value += 10
        }, 100)
    },
}
</script>