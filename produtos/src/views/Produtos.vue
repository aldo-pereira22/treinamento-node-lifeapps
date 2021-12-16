<template>
    <div class="mt-5">
        <div class="principal">
                <h1>Produtos</h1>
                <hr>
            <table class="table table-success table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Produto</th>
                <th scope="col">Preço</th>
                <th scope="col">Quantidade</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dado in dados" :key="dado.id">
                <th scope="row"> {{dado.id}} </th>
                <td>{{dado.name}} </td>
                <td> {{formata(dado.price)}} </td>
                <td>{{dado.amount}} </td>
                </tr>

            </tbody>
            </table>
        </div>
    </div>
</template>

<script>

import dados from './../data/data.json'
export default {
    data(){
        return {
            dados: dados
        }
    },
    methods:{
        formata(valor){
            return 'R$ ' + valor.toFixed(2)
        }
    }
}
</script>

<style scoped>

</style>