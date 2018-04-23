var app = new Vue({
	el: "#app",
	data: {
		name: '',
		form: {
			title: '',
			user: null,
			radio: '',
		},
		a: {x: 11},
		b: {y:22},
		list: [],
	},
	created: function(){
		this.fetchData();
	},
	computed: {
		
	},
	watch: {
		list: function(val, oldVal){
			console.log('list变化了')
			console.log(val, oldVal);
			
		},
	},
	methods: {
		fetchData: function(){
			var data = [
				{name: 'aa', gender: 'male'},
				{name: 'bb', gender: 'male'},
				{name: 'cc', gender: 'male'},
			];
//			this.list.push(data[0]);
			this.list = data;
		},
	},
})
