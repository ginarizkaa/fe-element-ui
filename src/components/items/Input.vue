<template>
    <el-form-item
        :label="label"
        :prop="propName"
    >
        <el-input :v-model="vmodel" />
    </el-form-item>
</template>
<script>
export default {
    name: 'CInput',
    props: {
        label: {
            default: '',
            required: true,
            type: String
        },
        propName: {
            default: '',
            required: true,
            type: String
        },
        vmodel: {
            default: '',
            required: false,
            type: String
        }
    }

}
</script>
