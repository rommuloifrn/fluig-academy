function validateForm(form){

	var msg = ""

	if (form.getValue("nome") == "") {
		msg += "Campo Nome não foi preenchido"
	}
	if (form.getValue("email") == "") {
		msg += "Campo Email não foi preenchido"
	}
	if (form.getValue("telefone") == "") {
		msg += "Campo Telefone não foi preenchido"
	}
	if (form.getValue("logradouro") == "") {
		msg += "Campo Logradouro não foi preenchido"
	}

	// Dias de funcionamento é (múltiplo, checkbox)
	if (
		form.getValue("segunda") != "on" &&
		form.getValue("terca") != "on" &&
		form.getValue("quarta") != "on" &&
		form.getValue("quinta") != "on" &&
		form.getValue("sexta") != "on" &&
		form.getValue("sabado") != "on" &&
		form.getValue("domingo") != "on"
	) {
		msg += "Nenhum dia de operação foi informado"
	}

	// Responsáveis (é múltiplo, radio)
	var responsaveis = form.getChildrenIndexes("responsaveisTabela");

	if(responsaveis.length == 0) {
		msg += "Campo Responsáveis não foi informado"
	}

	if (msg != "") throw msg
}