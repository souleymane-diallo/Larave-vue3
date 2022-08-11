import axios from "axios";
import { ref } from "vue";


export default function useCustomers() {

    const customers = ref([]);

    const getCustomers = async () => {
        let response = await axios.get('/api/customers');

        customers.value = response.data.data;
        console.log(customers.value);
    };

    return {
        customers,
        getCustomers
    }
}
