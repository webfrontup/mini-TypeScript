import { Component, Prop, Vue } from 'vue-property-decorator';

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

	protected render() {
		return (
			<li key={this.index}>{ this.item.text }</li>
		);
	}
}
