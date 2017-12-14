import { SortContainerItem } from "src/elements/sort-container";

export class App {
	private appItems: SortContainerItem[];
	private otherAppItems: SortContainerItem[];
	
	constructor() {
		this.appItems = [];
		this.otherAppItems = [];
	}
	
	addElement() {
		this.appItems.push({
			name: "App-Element #" + this.appItems.length,
			description: "App-Element-Description #" + this.appItems.length
		});
	}
	
	addOtherElement() {
		this.otherAppItems.push({
			name: "Other-App-Element #" + this.otherAppItems.length,
			description: "Other-App-Element-Description #" + this.otherAppItems.length
		});
	}
	
	swapElements() {
		let temp: SortContainerItem[] = [];
		temp.push(...this.appItems);
		this.appItems.splice(0, this.appItems.length);
		this.appItems.push(...this.otherAppItems);
		this.otherAppItems.splice(0, this.otherAppItems.length);
		this.otherAppItems.push(...temp);
	}
}