<template>
    <div class="container">
                    <h1>Comentários</h1>
                    <hr>
                    <FormTodo v-on:add-todo="addComment">  </FormTodo>
                    
                    <div class="list-group">
                        <p v-if="comments.length <= 0">
                            Sem comentários...
                        </p>
                        <div class="list-group-item" v-for=" (comment, index) in allComments" :key="index">
                            <span class="comment__author"> Autor: <Strong> {{comment.name}} </Strong></span>
                            <p> {{ comment.message }}</p>
                            <div>
                                <a href="#" title="excluir" v-on:click.prevent="removeCommet(index)"> Excluir</a>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>
    import FormTodo from './FormTodo.vue'
export default {

    components: {
        FormTodo
    },
    data(){
        return{
            comments:[],
        }
    },
    methods:{
        addComment(comment){
            this.comments.push(comment)

        },
        removeCommet(index){
                console.log(index)
                this.comments.splice(index,1)
            }
        },
        computed: {
            allComments(){
                return this.comments.map(comment => ({
                    ...comment,
                    name: comment.name.trim() === '' ? 'Anônimo' : comment.name
                }))
            }
        },
        watch: {
            comments(val){
                console.log('val', val)
            }
    }
}
</script>


n