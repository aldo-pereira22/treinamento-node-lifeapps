<template>
    <div class="form-todo form-group" >
        <p>
            <input placeholder="nome" type="text" name="nome" id="" class="form-control" v-model="name">
        </p>
        <p>
            <textarea class="form-control" name="message" placeholder="comentario" id="" cols="30" rows="10" v-model="message"></textarea>
        </p>
        <p>
            <button v-on:click="addComment" type="submit" class="btn btn-primary" >Comentar </button>
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name:'',
            message: ''
        }
    },
    methods: {
     addComment(){

            if(this.message.trim() === '') {
                return
            }
            this.$emit('add-todo', {
                name: this.name,
                message: this.message
            })
            this.name = '';
            this.message = ''

        }
    }
}
</script>

<style scoped>

</style>