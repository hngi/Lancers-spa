<template>
    <SelectProject v-if="getEstimateForm.step === 1" />
    <EvaluateEstimate v-else-if="getEstimateForm.step === 2" />
    <SelectClient v-else-if="getEstimateForm.step === 3" />
    <ClientInfo v-else-if="getEstimateForm.step === 4" />
</template>
<script>
import SelectProject from '@/components/new_estimate/SelectProject.vue'
import EvaluateEstimate from '@/components/new_estimate/EvaluateEstimate.vue'
import ClientInfo from '@/components/new_estimate/ClientInfo.vue'
import SelectClient from '@/components/new_estimate/SelectClient.vue'

export default {
    components: {SelectProject, EvaluateEstimate, ClientInfo, SelectClient},
    computed: {
        getEstimateForm(){
            return this.$store.getters.getEstimateForm;
        }
    }
}
</script>

