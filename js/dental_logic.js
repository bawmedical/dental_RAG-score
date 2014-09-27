$(document).ready(function() {
	function cariesRAG(){
		var caries_red = ["#caries_clinical_lesions",
                          "#caries_patient_symptoms"];
		var caries_amber = ["#caries_patient_diet",
                            "#caries_patient_plaque_control",
                            "#caries_patient_sibling"];
        for(i=0; i<caries_red.length; i++){
            var item = $(caries_red[i])
            if(item.is(':checked')) {
                return 'red';
            }
        }
        for(i=0; i<caries_amber.length; i++){
            var item = $(caries_amber[i])
            if(item.is(':checked')) {
                return 'amber';
            }
		}
        return 'green';
	}

	function toothSurfaceLossRAG (parameters) {
	}

	function periodontalRAG (parameters) {
	}

	function softTissueRAG (parameters) {
	}

	$('#caries_submit').click(function(e){
        $('#caries_result').text(cariesRAG());
    });
});
