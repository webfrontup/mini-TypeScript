<template>
	<div class="todo-page">
		<ul>
			<todo-item 
				v-for="(item,index) in list" 
				:item="item"
				:key="index"
				:index="index"
				:editting-index="edittingIndex"
				@on-save="handSave"
				@on-edit="handEdit"
				@on-cancel="handCancel"
				@on-complete="handComplete"
			/>
			
		</ul>
		<a-button @click="turn">跳转</a-button>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoItem from '../components/todo-item'; // @ is an alias to /src
import { State, Mutation } from 'vuex-class';

@Component({
	name: 'TodoPage',
	components: {
		TodoItem,
	},
})
export default class TodoPage extends Vue {
	public edittingIndex = -1;
	@State('todoList') public list;

	@Mutation('updateTodoList') public updateList;
	@Mutation('todoItemComplete') public handComplete;

	public handSave({index, content}) {
		// this.list[index].text = content;
		this.updateList({index, content});
		this.handCancel();
		this.$message.success('success');
	}
	public handEdit(index) {
		this.edittingIndex = index;
	}
	public handCancel() {
		this.edittingIndex = -1;
	}
	// public handComplete(index) {
	// 	this.list[index].complete = true;
	// }
	public turn() {
		this.$router.push({
			name: 'show',
		});
	}
}
</script>
