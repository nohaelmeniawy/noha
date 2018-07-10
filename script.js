const checkboxes = document.getElementById('list').getElementsByTagName('input');
const nodeList = Array.prototype.slice.call( document.getElementById('list').getElementsByTagName('ul')[0].children );

const multiSelect = {
	box : {
		undefined,
		undefined	
	},
	shift : false,
	addMore : true,
	selectMany: function(){
		let i = this.box[0], x = this.box[1];
		if( i > x ){
			for( ; x<i; x++ ){
				checkboxes[x].checked = this.addMore;
			}
		}
		if( i < x ){
			for( ; i<x; i++ ){
				console.log( i );
				checkboxes[i].checked = this.addMore;
			}
		}
		this.box[0] = undefined;
		this.box[1] = undefined;
	}
};

for( let i=0, x=checkboxes.length; i<x; i++ ){
	checkboxes[i].addEventListener('click', function(){

			multiSelect.addMore = (this.checked)? true : false;	
		
			if( multiSelect.shift ){
				multiSelect.box[1] = nodeList.indexOf( this.parentNode );
				multiSelect.selectMany();
			}else{
				multiSelect.box[0] = nodeList.indexOf( this.parentNode );
			}
		
	});
}

document.body.addEventListener('keydown', function(e){
	let key = window.event? event : e;
	if( !!key.shiftKey ){
		
		multiSelect.shift = true;
	}
});
document.body.addEventListener('keyup', function(e){
	let key = window.event? event : e;
	if( !key.shiftKey ){
		multiSelect.shift = false;
	}
});