<template>
    <auth>
        <errors
            class="mb-2"
            :errors="form.errors.all()"
            v-if="form.errors.any()"
        ></errors>

        <form @submit.prevent="submit">
            <div class="field mb-2">
                <label for="Username" class="is-hidden">Username</label>

                <div class="control">
                    <input
                        type="text"
                        placeholder="Username"
                        v-model="form.username"
                        class="input input-primary"
                    >
                </div>
            </div>

            <div class="field mb-2">
                <label for="Password" class="is-hidden">Password</label>

                <div class="control">
                    <input
                        type="password"
                        placeholder="Password"
                        v-model="form.password"
                        class="input input-primary"
                    >
                </div>
            </div>

            <div class="field mb-3">
                <div class="control">
                    <button
                        type="submit"
                        :class="{ 'is-loading': form.processing }"
                        class="button is-primary is-big is-fullwidth"
                    >Login</button>
                </div>
            </div>

            <div class="columns">
                <div class="column">
                    <input 
                        id="Remember"
                        type="checkbox"
                        class="checkbox"
                        v-model="form.remember"
                    >
                    <label for="Remember" class="is-size-8">Remember Me</label>
                </div>
            </div>
        </form>
    </auth>
</template>

<script>
    import { mapMutations } from 'vuex';
    import Form from 'form-backend-validation';

    import Auth from '../../components/layout/Auth';
    import Errors from '../../components/forms/Errors';

    export default {
        components: {
            Auth,
            Errors
        },

        data() {
            return  {
                form: new Form({
                    username: '',
                    password: '',
                    remember: false
                })
            }
        },

        methods: {
            ...mapMutations({
                setToken: 'auth/setToken'
            }),

            submit() {
                this.form.post('/api/auth/login').then(response => {
                    this.setToken(response.access_token);
                    
                    this.$router.push({ to: 'home' });
                });
            }
        }
    }
</script>
