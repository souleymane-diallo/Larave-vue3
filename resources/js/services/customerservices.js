//import axios from "axios";
import { ref } from "vue";
import router from '../router';


export default function useCustomers() {
    const customer = ref('')
    const errors = ref('');
    const customers = ref([]);

    const  getCustomers = async () => {
        let response = await axios.get('/api/customers');

        customers.value = response.data.data;
        //console.log(customers.value);
    };

    const getCustomer = async (id) => {
        let response = await axios.get('/api/customers/' + id);
        customer.value = response.data.data;
    };

    const createCustomer = async (data) => {
        errors.value = '';

        try {
            await axios.post('/api/customers', data);
            await router.push({ name: 'customers.index' });
        } catch (error) {
            const createCustomerErrors = error.response.data.errors;

            errors.value = createCustomerErrors;
            //console.log(errors.value);
            /*for (const key in createCustomerErrors) {
                errors.value += createCustomerErrors[key][0] + '\n ';
            }*/
        }
    };

    const updateCustomer = async (id) => {
        errors.value = '';
        try {
            await axios.put('/api/customers/'+ id, customer.value);
            await router.push({ name: 'customers.index' });
        } catch (error) {
            const createCustomerErrors = error.response.data.errors;

            errors.value = createCustomerErrors;
            //console.log(errors.value);
            /*for (const key in createCustomerErrors) {
                errors.value += createCustomerErrors[key][0] + '\n ';
            }*/
        }
    };

    const destroyCustomer = async (id) => {
        if (!window.confirm('Supprimer ce client ?')) return;

        await axios.delete('/api/customers/' + id);
        await getCustomers();
    };

    return {
        customers,
        errors,
        customer,
        getCustomers,
        createCustomer,
        getCustomer,
        updateCustomer,
        destroyCustomer
    }
}
