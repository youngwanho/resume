<template>
     <v-layout class="bottom-menu overflow-visible" style="height: 56px;">
        <v-bottom-navigation bg-color="#5558c9">
        <v-btn class="text-white" v-for="item in linkItems" v-bind:key="item.id" :to="{path:item.to}">
            <v-icon> {{item.icon}}</v-icon>
            <span>{{item.title}}</span>
        </v-btn>
        </v-bottom-navigation>
  </v-layout>
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

  