<template>
    <auth>
        <errors class="mb-2" :errors="form.errors" v-if="form.errors.any()"></errors>

        <form @submit.prevent="submit">
            <div class="field mb-2">
                <label for="Username" class="is-hidden">Username</label>

                <div class="control">
                    <input type="text" class="input input-primary" placeholder="Username" v-model="form.username">
                </div>
            </div>

            <div class="field mb-2">
                <label for="Password" class="is-hidden">Password</label>

                <div class="control">
                    <input type="password" class="input input-primary" placeholder="Password" v-model="form.password">
                </div>
            </div>

            <div class="field mb-3">
                <div class="control">
                    <button type="submit" class="button is-primary is-big is-fullwidth" :class="{ 'is-loading': form.processing }">Login</button>
                </div>
            </div>

            <div class="columns">
                <div class="column">
                    <input type="checkbox" id="Remember" class="checkbox" v-model="form.remember">
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
                setUser: 'auth/setUser',
                setToken: 'auth/setToken'
            }),

            submit() {
                this.form.post('/api/auth/login').then(response => {
                    let user = response.data;

                    this.setUser({
                        id: user.id,
                        email: user.email,
                        name: user.name
                    });

                    this.setToken(user.access_token);
                });
            }
        }
    }
</script>
