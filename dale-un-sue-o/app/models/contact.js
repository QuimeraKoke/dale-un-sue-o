exports.definition = {
	config: {
		//URL: "http://192.168.0.2/person",
		columns: {
		    "firstname": "text",
		    "lastname": "text",
		    "phone": "text"
		},
		adapter: {
			type: "restapi",
			name: "contact",
			collection_name: "contact"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
			url:function(){
				return 'http://192.168.0.2:1337/person/'+this.get('id');
			},
			validate:function (attrs) {
				for (var key in attrs) {
				    var value = attrs[key];
				 	
				 	if (key === "firstname") {
				 		if (value.length <= 0) {
				 				return "Error: No firstname!";
				        }
				    }
				 	
				 	if (key === "lastname") {
				 
				 		if (value.length <= 0) {
				 			return "Error: No lastname!";
            			}	
        			}

        			if (key === "phone") {
				 
				 		if (value.length <= 0) {
				 			return "Error: No phone!";
            			}	
        			}	
    			}
            },
            customProperty: 'contact'
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
			url:function(){
				return 'http://192.168.0.2:1337/person';
			}
		});

		return Collection;
	}
};