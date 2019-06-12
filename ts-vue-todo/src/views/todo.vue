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
			/>
			
		</ul>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoItem from '../components/todo-item'; // @ is an alias to /src

@Component({
	name: 'TodoPage',
	components: {
		TodoItem,
	},
})
export default class TodoPage extends Vue {
	public edittingIndex = -1;
	public list = [
		{
			text: 'ts全面全民解读',
			complete: false,
		},
		{
			text: '学习全栈okok',
			complete: false,
		},
	];
	public handSave({index, content}) {
		this.list[index].text = content;
		this.handCancel();
	}
	public handEdit(index) {
		this.edittingIndex = index;
	}
	public handCancel() {
		this.edittingIndex = -1;
	}
}
</script>
