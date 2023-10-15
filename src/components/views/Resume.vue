<template>
    <v-row class="px-3">
        <v-col cols="12" lg="6">
            <v-list-subheader>경력 / 학력 리스트</v-list-subheader>
            <v-sheet class="overflow-auto" rounded="lg">
                <Career />     
            </v-sheet>                 
        </v-col>
        <v-col cols="12" lg="6">
            <v-list-subheader>자격증 리스트</v-list-subheader>
            <v-sheet class="overflow-auto" rounded="lg">               
                <Certificate />     
            </v-sheet>    
        </v-col>
    </v-row>
</template>
<script>
import Career from '../views/Career';
import Certificate from '../views/Certificate';

export default {
    components: {
        Career,
        Certificate,
    },
    data: () => ({
       
    })
}
</script>
