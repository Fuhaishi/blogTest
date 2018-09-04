<template>
    <div id="todo">
        <input type="text"
               class="inputItem"
            placeholder="待做事项"
               @keyup.enter="addItem"
               v-model="newItem"
        >
        <div class="todoListPanel">
            <input type="checkbox"
                   :checked="allChecked"
                   style="margin: 10px;"
                   v-if="todoList.length > 0"
                   @click="selectAll"
            >
            <span v-if="todoList.length > 0">全选</span>
            <ul v-for="(item, index) in todoList">
                <li :key="index">
                    <input type="checkbox" :checked="item.checked" @click="selectOne">
                    <span class="itmeName">{{item.content}}</span>
                    <button style="float: right;" @click="deleteItem(index)">X</button>
                </li>
            </ul>
            <span style="margin: 20px;">{{count}} 条待处理</span>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'todo',
        data(){
            return{
                todoList: [],
                count: 0,
                newItem: '',
                allChecked: false
            }
        },
        methods: {
            addItem(){
                if(this.newItem){
                    this.todoList.push({
                        checked: false,
                        content: this.newItem
                    })
                    this.newItem = ''
                }
            },
            deleteItem(index){
                this.todoList.splice(index, 1)
            },
            selectOne(){
                this.todoList[index].checked = !this.todoList[index].checked
            },
            selectAll(){
                this.allChecked = !this.allChecked
                this.todoList.forEach(item => {
                    item.checked = this.allChecked
                })
            }
        }
    }
</script>

<style>
   .inputItem{
        width: 50%;
        background: white;
        padding: 10px 20px;
        margin: 20px 25%;
        font-size: 18px;
        text-align: left;
    }
    .todoListPanel{
        background: white;
        width: 50%;
        margin: 20px 25%;
        padding: 0 20px;
    }
    .itmeName{
        font-size: 16px;
        margin-left: 20px;
    }
    ul{
        list-style: none;
        padding: 20px;
        margin: 0;
    }
    button{
        border: none;
        background: #fff;
        outline: none;
        cursor: pointer;
    }
</style>