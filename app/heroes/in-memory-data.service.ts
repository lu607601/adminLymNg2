import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let heroes = [
		    {"id":1,"name":'lu'},
            {"id":2,"name":'li'},
            {"id":3,"name":'zhang'},
            {"id":4,"name":'guo'},
            {"id":5,"name":'cao'},
            {"id":6,"name":'yong'}
		];
		return {heroes};
	}
}