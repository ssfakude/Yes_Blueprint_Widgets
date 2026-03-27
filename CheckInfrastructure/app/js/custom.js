var EntityId;
var EntityName;

   //Subscribe to the EmbeddedApp onPageLoad event before initializing the widget 
   ZOHO.embeddedApp.on("PageLoad",function(data)
  {
		EntityId=data.EntityId;
		console.log(EntityId);
		entityname=data.Entity;  
  
		ZOHO.CRM.API.getRecord({Entity:entityname,RecordID:EntityId}).then(function(data){
	  dataa=data.data[0];
	  email=dataa.Email;
	  non_Active_Policies=dataa.Non_Active_Policies;
	  number_Of_Claims = dataa.Number_Of_Cliams;
	  active_Policies=  dataa.Active_Policies;

	  active_policies=encodeURIComponent(Active_Policies);
	  document.getElementById("active_policies").value=active_Policies;

	  no_active=encodeURIComponent(Non_Active_Policies);
	  document.getElementById("no_active").value=non_Active_Policies;

	  claims=encodeURIComponent(Number_Of_Cliams);
	  document.getElementById("claims").value=number_Of_Claims;
	  //console.log(document.getElementById("customeremail").value);  
	ZOHO.embeddedApp.init();
})
})
