<template>
    <v-col class="px-0" cols="12" lg="4">
        <div class="search-box w-100 d-flex align-items-center">
            <select class="w-25 px-2">
                <option>전체</option>
                <option>개발</option>
                <option>디자인</option>
                <option>일본어</option>
            </select>
            <div class="input-group w-75 d-flex align-center justify-space-between ml-2 px-2">
                <v-icon size="large">mdi-magnify</v-icon>
                <input class="w-100 h-100 pl-1" placeholder="검색어를 입력하세요." />
                <button class="btn-delete">
                    <v-icon>mdi-close-circle</v-icon>
                </button>
            </div>
        </div>
    </v-col>
    <div class="total-box d-flex align-items-center my-2">
        <v-list-subheader class="item-box">
            전체
            <span>(30)</span>
        </v-list-subheader>
        <v-list-subheader class="item-box ml-5">
            개발
            <span>(30)</span>
        </v-list-subheader>
        <v-list-subheader class="item-box ml-5">
            디자인
            <span>(30)</span>
        </v-list-subheader>
        <v-list-subheader class="item-box ml-5">
            일본어
            <span>(30)</span>
        </v-list-subheader>
    </div>
    <v-expansion-panels>       
        <v-expansion-panel v-for="item in qnaItems" :key="item">
            <v-expansion-panel-title>
                <span class="type mr-3" color="#5558c9">[{{item.type}}]</span>
                {{ item.title }}
            </v-expansion-panel-title>
            <v-expansion-panel-text>               
                {{ item.text }}
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
    <v-pagination
        v-model="currentPage"
        :length="totalPages"
        @input="handlePageChange"
      ></v-pagination>
</template>

<script>
export default {
    data: () => ({
        message: '',
        loading: false,
        currentPage: 1,
        qnaItems: [
            {   
                type: '개발',
                title: '주로 어떤 언어를 이용하여 코딩하나요?',
                text: '기본적으로 HTML, CSS를 사용하여 기본적인 프레임을 잡고 JQuery와 JAVA Script를 사용해서 이벤트를 넣습니다.',
            },
            {   
                type: '개발',
                title: 'Vue.js 프레임워크를 사용가능한가요?',
                text: '소스트리와 Git을 연동하여 협업을 한 경험이 있습니다.',
            },
            {   
                type: '개발',
                title: 'Bootstrap을 사용가능한가요?',
                text: '소스트리와 Git을 연동하여 협업을 한 경험이 있습니다.',
            },
            {   
                type: '개발',
                title: 'Git을 이용한 협업을 해본 적 있나요?',
                text: '소스트리와 Git을 연동하여 협업을 한 경험이 있습니다.',
            },
            {
                type: '개발',
                title: '반응형 코딩을 하실 수 있나요?',
                text: '예 가능합니다. media screen을 사용한 해상도 조절 및 부트스트랩 라이브러리를 이용한 반응형 코딩 또한 가능합니다.',
            },
            {
                type: '개발',
                title: '인터렉티브 이벤트 어느 정도 하실수 있나요?',
                text: '일반적인 웹에서 사용되는 인터렉티브는 거의 다 가능하며 애니메이션 효과 또한 가능합니다.',
            },
            {
                type: '개발',   
                title: '프론트엔드 개발 경험은 있으신가요?',
                text: '프론트엔드 개발자 역량에는 미치지 못하지만 API통신 경험은 있습니다.',
            },
            {
                type: '개발',
                title: '웹 표준에 맞춰서 코드작성이 가능한가요?',
                text: '',
            },
            {
                type: '개발',
                title: '크로스 브라우징에 맞춰 코드작성이 가능한가요?',
                text: '',
            },
            {
                type: '디자인',
                title: '디자인도 하실수 있나요?',
                text: '편집 디자인과 UI/UX 디자인을 해본 경험이 있습니다.',
            },
            {
                type: '일본어',
                title: '일본어 실력은 어느정도 인가요?',
                text: '2019년 03월 ~ 2020년 05월 까지 체류했으며, 일상에서 사용하는 읽고 듣고 말하기에는 문제 없습니다.',
            },        
        ]
    }),
    methods: {
        clickMe() {
            this.loading = true
            this.message = 'Wait for it...'

            setTimeout(() => {
                this.loading = false
            }, 2000)
        },
        handlePageChange(value) {
      this.currentPage = value;
    }
    },
    computed: {
      startOffset() {
        return ((this.curPageNum - 1) * this.dataPerPage);
      },
      endOffset() {
        return (this.startOffset + this.dataPerPage);
      },
      numOfPages() {
        return Math.ceil(this.qnaItems.length / this.dataPerPage);
      },
      calData() {
        return this.qnaItems.slice(this.startOffset, this.endOffset)
      }
    }
}
</script>