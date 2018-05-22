import Errors from '../components/forms/Errors';

export default {
    components: {
        Errors
    },

    props: {
        method: {
            type: String,
            required: true
        },

        action: String,

        item: {
            type: Object,
            default: null
        }
    }
};
