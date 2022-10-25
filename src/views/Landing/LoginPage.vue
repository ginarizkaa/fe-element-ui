<template>
    <div class="img-cover">
        <div class="hp100 flex-justify-center">
            <el-row
                type="flex"
                class="row-bg"
                justify="space-around"
            >
                <el-col :span="6">
                    <el-card shadow="always">
                        <center class="mb30">
                            <h3>Sistem Informasi Manajemen</h3>
                            <h3>Klinik Bahagia</h3>
                        </center>
                        <el-form
                            ref="form"
                            label-position="left"
                            label-width="100px"
                            :model="form"
                            :rules="rules"
                        >
                            <el-form-item
                                label="Name"
                                prop="name"
                            >
                                <el-input v-model="form.username" />
                            </el-form-item>
                            <el-form-item
                                label="Password"
                                prop="password"
                            >
                                <el-input v-model="form.password" />
                            </el-form-item>
                            <el-form-item>
                                <el-button
                                    type="primary"
                                    @click="submitForm('form')"
                                >
                                    Create
                                </el-button>
                                <el-button @click="resetForm('form')">
                                    Reset
                                </el-button>
                            </el-form-item>
                        </el-form>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            bgImage: require('@/assets/images/basic/bg-main.png'),
            logoImage: require('@/assets/images/basic/logo-main.png'),
            form: {
                username: '',
                password: ''
            },
            rules: {
                name: {
                    required: true
                },
                password: {
                    required: true
                }
            }
        }
    },
    methods: {
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!')
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        }
    }
}
</script>
