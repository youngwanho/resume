<template>
    <v-toolbar id="toolbar" color="#fff">
        <v-btn class="tool-btn" to="" stacked>
            <v-icon icon="mdi-pencil"></v-icon>
            포트폴리오
        </v-btn>
        <v-btn class="tool-btn" to="" stacked>
            <v-icon icon="mdi-github"></v-icon>
            깃허브
        </v-btn>
        <v-btn class="tool-btn" to="" stacked>
            <v-icon icon="mdi-text-box"></v-icon>
            자기소개서
        </v-btn>
        <v-btn class="tool-btn" @click="dialog = true" stacked>
            <v-badge color="error" dot>
                <v-icon icon="mdi-account-box"></v-icon>
            </v-badge>
            연락처보기
        </v-btn>
    </v-toolbar>
    <v-dialog v-model="dialog" width="500">
        <v-card>
            <v-toolbar class="text-white" color="#5558c9">                
               <div class="v-toolbar-title d-flex align-center">
                <v-icon class="mr-1" icon="mdi-account-box"></v-icon>
                    연락처
               </div>
            </v-toolbar>
            <v-card-text>
                <v-text-field class="mt-5" model-value="윤관호" label="이름" prepend-inner-icon="mdi-account" variant="outlined"  readonly></v-text-field>
                <v-text-field class="mt-2" model-value="010-9506-1006" label="휴대폰 번호" prepend-inner-icon="mdi-phone" variant="outlined"  readonly></v-text-field>
                <v-text-field class="mt-2" model-value="ddw6229@naver.com" label="이메일" prepend-inner-icon="mdi-email" variant="outlined" readonly></v-text-field>
                <v-text-field class="mt-2" model-value="youn_mavin" label="인스타그램" prepend-inner-icon="mdi-instagram" variant="outlined" readonly></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn class="btn-close" color="#5558c9" block @click="dialog = false">닫기</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>

export default {
    data() {
        return {
            dialog: false,
        }
    },
}
</script>
