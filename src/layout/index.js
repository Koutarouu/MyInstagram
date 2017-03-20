var yo = require('yo-yo');
var translate = require('../translate');

module.exports = function layout (content) {
	return yo`<div class="content">
			${content}
		</div>`;
}
//module.exports = template;//le pasamos de parametro el box