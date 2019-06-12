import Vue from 'vue';

export interface Item {
    text: string;
	complete: boolean;
}

export declare class TodoItem extends Vue {
    item: Item
    index: number
    edittingIndex: number
    cancel(): void
}