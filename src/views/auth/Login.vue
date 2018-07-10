<template>
    <auth>
        <transition :css="false" @leave="loginLeave">
            <div class="login-wrap has-shadow is-primary" v-if="! isAuthenticated">
                <div class="login-top background is-white px-5 py-6">
                    <h1 class="title is-size-1 is-uppercase">Optimus</h1>
                    <h2 class="subtitle is-size-6 has-text-primary">Managing your content</h2>
                </div>

                <div class="login-bottom background is-secondary p-5">
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
                    </form>
                </div>
            </div>
        </transition>
    </auth>
</template>

<script>
    import Velocity from 'velocity-animate';
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
                isAuthenticated: false,

                form: new Form({
                    username: '',
                    password: ''
                })
            }
        },

        methods: {
            submit() {
                this.form.post('/api/auth/login').then(response => {
                    this.$auth.setToken(response.access_token);
                    this.isAuthenticated = this.$auth.check();
                });
            },

            loginLeave(el, done) {
                Velocity(el, {
                    translateX: '-30%',
                    opacity: 0
                },
                {
                    duration: 350,
                    complete: () => {
                        this.$router.push({
                            name: 'home'
                        });
                    }
                });
            }
        }
    }
</script>
