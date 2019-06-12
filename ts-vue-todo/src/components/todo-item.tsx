import { Component, Prop, Watch, Emit, Vue } from 'vue-property-decorator';

interface Item {
	text: string;
	complete: boolean;
}

@Component({
	name: 'TodoItem',
})


export default class TodoItem extends Vue {
	@Prop(Object) public item!: Item;
	@Prop(Number) public index!: number;
	@Prop(Number) public edittingIndex!: number;

	public edittingContent = '';
	@Watch('edittingIndex')
	public edittingChange(index) {
		if (index === this.index) {
			this.edittingContent = this.item.text;
		} else {
			this.edittingContent = '';
		}
	}
	// public save() {
	// 	this.$emit('on-save', {
	// 		index: this.index,
	// 		content: this.edittingContent,
	// 	});
	// }
	@Emit('on-save')
	public save(index, content) {
		return{
			// index: this.index,
			// content: this.edittingContent,
			index,
			content,
		};
	}
	// public onEdit() {
	//     this.$emit('on-edit', this.index);
	// }
	@Emit()
	public onEdit() {
		return this.index;
	}
	public cancel() {
		this.$emit('on-cancel');
	}


	protected render() {
		return (
			<li key={this.index}>
				{
					this.edittingIndex === this.index
					? (<div>
						<a-input v-model={this.edittingContent} style='width:200px;'></a-input>
						<a-icon type='check' nativeOn-click={this.save.bind(this, this.index, this.edittingContent)}></a-icon>
						<a-icon type='close' nativeOn-click={this.cancel}></a-icon>
					</div>)
					: (<div>
						<span>{ this.item.text }</span>
						<a-icon type='edit' nativeOn-click={this.onEdit}></a-icon>
					</div>)
				}
			</li>
		);
	}
}
