<template>
    <v-navigation-drawer color="#5558c9" expand-on-hover rail>
        <v-list>
            <v-list-item class="text-white" prepend-avatar="https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg" title="윤관호"
                subtitle="ddw6229@naver.com">
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list class="nav-menu">
            <v-list-item class="text-white" v-for="item in linkItems" v-bind:key="item.id" :to="{path:item.to}"> 
                <div class="d-flex align-center">
                    <v-icon aria-hidden="false" size="large">
                        {{item.icon}}
                    </v-icon>
                    <v-list-item-title class="ml-3">{{item.title}}</v-list-item-title>
                </div>
            </v-list-item>
        </v-list>      
    </v-navigation-drawer>
</template>
  
<script>
export default {
    name: 'Sidebar-vue',
    data: () => ({
        drawer: null,
        linkItems: [
            {
                title: "홈",
                icon: "mdi-home",
                id: 1,
                to: '/'
            },
            {
                title: "경력 / 자격증",
                icon: "mdi-account-tie",
                id: 2,
                to: '/resume'
            },
            {
                title: "능력",
                icon: "mdi-chart-bar",
                id: 3,
                to: '/ability'
            },
            {
                title: "질문 & 답변",
                icon: "mdi-chat",
                id: 7,
                to: '/qna'
            },
        ]
    }),
}
</script>

  