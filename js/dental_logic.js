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
        if($('#surface_loss_excessive').is(':checked')){
            return 'red';
        }
        if($('#surface_loss_patient_symptoms').is(':checked')) {
            return 'red';
        }
        if($('#surface_loss_moderate').is(':checked')) {
            return 'amber';
        }
        var amber = [
            '#surface_loss_diet',
            '#surface_loss_brushing',
            '#surface_loss_para',
            '#surface_loss_reflux'
        ]
        for(i=0; i<amber.length; i++){
            var item = $(amber[i])
            if(item.is(':checked')) {
                return 'amber';
            }
		}
        return 'green';
	}

	function periodontalRAG (parameters) {
        if($('#periodontal_severe').is(':checked')){
            return 'red';
        }
        if($('#periodontal_patient_symptoms').is(':checked')) {
            return 'red';
        }
        if($('#periodontal_moderate').is(':checked')) {
            return 'amber';
        }
        var amber = [
            '#periodontal_patient_plaque_control',
            '#periodontal_patient_smoking',
            '#periodontal_patient_poor_diabetes'
        ]
        for(i=0; i<amber.length; i++){
            var item = $(amber[i])
            if(item.is(':checked')) {
                return 'amber';
            }
		}
        return 'green';
	}

	function softTissueRAG (parameters) {
        if($('#soft_tissue_referral').is(':checked')){
            return 'red';
        }
        if($('#soft_tissue_patient_symptoms').is(':checked')) {
            return 'red';
        }
        if($('#soft_tissue_lesion').is(':checked')) {
            return 'amber';
        }
        var amber = [
            '#soft_tissue_patient_site',
            '#soft_tissue_patient_tobacco_use',
            '#soft_tissue_patient_alchohol'
        ]
        for(i=0; i<amber.length; i++){
            var item = $(amber[i])
            if(item.is(':checked')) {
                return 'amber';
            }
		}
        return 'green';
	}

	$('#caries_submit').click(function(e){
        $('#caries_result').text(cariesRAG());
    });
	$('#surface_loss_submit').click(function(e){
        $('#surface_loss_result').text(toothSurfaceLossRAG());
    });
	$('#periodontal_submit').click(function(e){
        $('#periodontal_result').text(periodontalRAG());
    });
	$('#cancer_submit').click(function(e){
        $('#cancer_result').text(softTissueRAG());
    });
});
