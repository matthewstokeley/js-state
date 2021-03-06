import from './src/StateManager';
import from './src/updateState';

export default var state = function(element) {

	var stateManager = new StateManager({
		element: element,
		current: '',
		options: [],
		name: ''
	});

	this.states = []; 

	/**
	 * the first two properties are lifted from a pattern used by `vue.js`s 
	 */
	return {
		el: element,
		data: {},
		/**
		 * [observer description]
		 * @chainable
		 * @param  {Function} callback 
		 * @return {Object}  
		 */
		observer: function(callback) { 
			element.addEventListener('change', callback);
			return this;
		},
		
		/**
		 * [update description]
		 * @chainable
		 * @param  {String}   state   [description]
		 * @param  {String}   value   optional 
		 * @param  {String}   scope   optional 
		 * @return {[type]}           [description]
		 */
		update: function(state, value, scope) {
			updateState(stateManager, state, value, scope);
			return this;
		},
		setName: function(name) {
			stateManager.setName(name);
			return this;
		},
		states: []

	}

}