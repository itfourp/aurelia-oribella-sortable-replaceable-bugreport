import { bindable } from "aurelia-framework";

export class SortContainerNocache {
	@bindable sortContainerItems: SortContainerItem[]; 
	
	constructor() {
	
	}
}

export interface SortContainerItem {
	name: string;
	description: string;
}