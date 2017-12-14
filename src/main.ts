import { Aurelia } from 'aurelia-framework';
export function configure(aurelia: Aurelia) {
	aurelia.use.basicConfiguration()
		.plugin( "oribella-aurelia-sortable" )
		.developmentLogging();
	aurelia.start().then(() => aurelia.setRoot());
}