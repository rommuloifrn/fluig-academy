function beforeTaskSave(colleagueId,nextSequenceId,userList){

    var anexos = hAPI.listAttachments();
    var temAnexo = false;


    for (i = 0; i < anexos.size(); i++) {
        var atual = anexos.get(i);
        if (atual.getDocumentDescription() == "Proposta Comercial.pdf") 
            temAnexo = true;
    }

	if (!temAnexo) {
	    throw ("Proposta comercial não foi anexada")
	}

}