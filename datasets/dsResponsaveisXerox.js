/**
 *
 *
 * @param {string[]} fields Campos Solicitados
 * @param {Constraint[]} constraints Filtros
 * @param {string[]} sorts Campos da Ordenação
 * @returns {Dataset}
 */

function createDataset(fields, constraints, sorts) {

    var ds = DatasetBuilder.newDataset()

    ds.addColumn("login")
    ds.addColumn("nome")

    var filtroGrupo = DatasetFactory.createConstraint(
        "colleagueGroupPK.groupId", 
        "ResponsaveisXerox", 
        "ResponsaveisXerox", 
        ConstraintType.MUST
    );
    
    var datasetGrupo = DatasetFactory.getDataset("colleagueGroup", null, new Array(filtroGrupo), null);

    for (let i = 0; i < datasetGrupo.rowsCount; i++) {
        var colabGrupo = datasetGrupo.getValue(i, "colleagueGroupPK.colleagueId");
        
        var datasetColaborador = DatasetFactory.getDataset("colleague", null, null, null);

        for(j = 0; j < datasetColaborador.rowsCount; j++) {
            var colabCol = datasetColaborador.getValue(j, "colleaguePK.colleagueId");
            var colabNome = datasetColaborador.getValue(j, "colleagueName")

            if (colabCol == colabGrupo) {
                ds.addRow(new Array (colabCol, colabNome))
            }
        }
    }

    return ds;
}