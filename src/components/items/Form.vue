<template>
    <el-form
        :ref="name"
        :model="model"
        :rules="rules"
        :label-width="labelWidth"
        :class="className"
    >
        <slot name="fillForm" />
    </el-form>
</template>
<script>
export default {
    name: 'CForm',
    props: {
        name: {
            default: '',
            required: true,
            type: String
        },
        model: {
            default: '',
            required: true,
            type: String
        },
        rules: {
            default: () => [],
            required: true,
            type: Array
        },
        labelWidth: {
            default: '100px',
            required: false,
            type: String
        },
        className: {
            default: '',
            required: false,
            type: String
        }

    }

}
</script>
