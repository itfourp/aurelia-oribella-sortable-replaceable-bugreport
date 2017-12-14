import { bindable } from "aurelia-framework";

export class SortContainer {
	@bindable sortContainerItems: SortContainerItem[]; 
	
	constructor() {
	
	}
}

export interface SortContainerItem {
	name: string;
	description: string;
}