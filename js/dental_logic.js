$( document ).ready(function() { 

	function cariesRAG() {
		var caries_red = ["#caries_clinical_lesions", "#caries_patient_symptoms"];
		var caries_amber = ["#caries_patient_diet", "#caries_patient_plaque_control", "#caries_patient_sibling"];
		var caries_RAG = "green";
		var caries_problems = [];

		for (i=0; i<caries_amber.length; i++) {
			if ( $( caries_amber[i] ).val() == true) {
				caries_RAG = "amber";
				caries_problems.push("amber: "+caries_amber[i]);
				console.log ($( caries_amber[i] ).val() );
			};
		};

		for (i=0; i<caries_red.length; i++) {
			if ( $( caries_red[i] ).val() == true) {
				caries_RAG = "red";
				caries_problems.push("red: "+caries_red[i]);
			};
		};
		// alert( caries_red+caries_amber );
		return [caries_RAG, caries_problems];

	};

	function toothSurfaceLossRAG() {
		var tooth_surface_loss_red = ["#surface_loss_excessive", "#surface_loss_symptoms"];
		var tooth_surface_loss_amber = ["#"];
	};


	function periodontalRAG() {
		var periodontal_red = ["#"];
	};

	function softTissueRAG() {
	};

	$( "#caries_submit" ).click(function() {
		a = cariesRAG();
		
	});
	
});