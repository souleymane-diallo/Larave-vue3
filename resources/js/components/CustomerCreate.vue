<template>
    <div class="w-50">

        <form class="space-y-6" @submit.prevent="storeCustomer">
            <div class="mb-3">
                <label for="name" class="block text-sm font-medium text-gray-700">Nom client</label>
                <input type="text" name="name" id="name" v-model="form.name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                <div  v-if="errors.name" style="color: red">
                    {{ errors.name[0] }}
                </div>
            </div>
            <div class="mb-3">
                <label for="tel" class="block text-sm font-medium text-gray-700">Tel. Client</label>
                <input type="text" name="tel" id="first-name" v-model="form.tel" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                <div  v-if="errors.tel" class="text-red">
                    {{ errors.tel[0] }}
                </div>
            </div>
            <div class="flex items-start mb-3">
                <div class="flex items-center h-5">
                    <input id="is_favorite" name="is_favorite" type="checkbox" v-model="form.is_favorite" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                </div>
                <div class="ml-3 text-sm">
                    <label for="is_favorite" class="font-medium text-gray-700">Favorite ?</label>
                </div>
            </div>
            <div  v-if="errors.is_favorite" class="text-red">
                {{ errors.is_favorite[0] }}
            </div>
            <div class="py-3 bg-gray-50 text-right">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600">Enregistrer</button>
            </div>
        </form>
    </div>
</template>


<script>

import { reactive } from 'vue';
import useCustomers from '../services/customerservices.js';

    export default {
        setup() {
            const form  = reactive({
                name: '',
                tel: '',
                is_favorite: ''
            });

            const { createCustomer, errors } = useCustomers();

            const storeCustomer = async () => {
                //console.log({ ...form });
                await createCustomer({...form });
            };

            return {
                form,
                errors,
                storeCustomer
            }
        }
    }

</script>
