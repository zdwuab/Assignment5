function GetList()
{
    var objrequest1 = new XMLHttpRequest(); // Create AJAX request object
    
    //Create URL
    var getlisturl = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCustomers";
    
    
      //Checks that the object has returned data 
    objrequest1.onreadystatechange = function() 
    { 
        if (objrequest1.readyState == 4 && objrequest1.status == 200) 
        { 
            var listoutput = JSON.parse(objrequest1.responseText); 
            GenerateListOutput(listoutput); 
        } 
    } 
     
    //Initiate the server request 
    objrequest1.open("GET", getlisturl, true); 
    objrequest1.send(); 
}  
function GenerateListOutput(result) 
{ 
    var count = 0; 
    var displaylisttext = "<table><tr><th>Customer ID</th><th>City</th><th>Company Name</th></tr>";  //Create a table header ; 
     
    //Loop to extract data from the response object 
    for (count = 0; count < result.GetAllCustomersResult.length; count++) 
    { 
       
       displaylisttext += "<tr><td>" + result.GetAllCustomersResult[count].CustomerID + "</td><td>" + result.GetAllCustomersResult[count].City + "</td><td>" + result.GetAllCustomersResult[count].CompanyName + "</td></tr>"; 
    } 
     
    document.getElementById("customerlistlabel").innerHTML = displaylisttext;
    displaylisttext += "</table>"; 
} 

       


    
    //SECTION 2!!!


function GetOrders() 
{ 
    var objRequest = new XMLHttpRequest();  //Create AJAX request object 
     
    //Create URL and Query string 
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/"; 
    url += document.getElementById("custid").value; 
     
    //Checks that the object has returned data 
    objRequest.onreadystatechange = function() 
    { 
        if (objRequest.readyState == 4 && objRequest.status == 200) 
        { 
            var output = JSON.parse(objRequest.responseText); 
            GenerateOutput(output); 
        } 
    } 
     
    //Initiate the server request 
    objRequest.open("GET", url, true); 
    objRequest.send(); 
}  
function GenerateOutput(result) 
{ 
    var count = 0; 
    var displaytext = "<table><tr><th>Order Date</th><th>Order ID</th><th>Ship Address</th><th>Ship City</th><th>Ship Name</th><th>Ship Postcode</th><th>Shipped Date</th></tr>";  //Create a table ; 
     
    //Loop to extract data from the response object 
    for (count = 0; count < result.GetOrdersForCustomerResult.length; count++) 
    { 
       
        displaytext += "<tr><td>" + result.GetOrdersForCustomerResult[count].OrderDate + "</td><td>" + result.GetOrdersForCustomerResult[count].OrderID + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipAddress + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipCity + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipName + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipPostcode + "</td><td>" + result.GetOrdersForCustomerResult[count].ShippedDate + "</td></tr>"; 
    } 
     
    document.getElementById("orderslabel").innerHTML = displaytext;
     displaytext = "</table>";
} 

   

//SECTION 3!!

function GetOrderHistory()
{
    var objRequesthist = new XMLHttpRequest();  //Create AJAX request object 
     
    //Create URL and Query string 
    var histurl = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/"; 
    histurl += document.getElementById("custidhistory").value; 
     
    //Checks that the object has returned data 
    objRequesthist.onreadystatechange = function() 
    { 
        if (objRequesthist.readyState == 4 && objRequesthist.status == 200) 
        { 
            var historyoutput = JSON.parse(objRequesthist.responseText); 
            GenerateHistoryOutput(historyoutput); 
        } 
    } 
     
    //Initiate the server request 
    objRequesthist.open("GET", histurl, true); 
    objRequesthist.send(); 
}  

function GenerateHistoryOutput(result) 
{ 
    var count = 0; 
    var displayhistorytext = "<table><tr><th>Product Name</th><th>Total</th></tr>";
     
    //Loop to extract data from the response object 
    for (count = 0; count < result.length; count++) 
    { 
        displayhistorytext += "<tr><td>" + result[count].ProductName + "</td><td>" + result[count].Total + "</td></tr>";
         
    } 
     
    document.getElementById("orderhistorylabel").innerHTML = displayhistorytext;
    displayhistorytext = "</table>";
} 


//Menu Choice

function Menu()
{
    if (document.getElementById("dropdown").value == "Show Section 1")
    {
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
     }
     
     else if (document.getElementById("dropdown").value == "Show Section 2")
     {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "visible";
        document.getElementById("section3").style.visibility = "hidden";
     }
     else if (document.getElementById("dropdown").value == "Show Section 3")
     {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "visible";
     }
     
     else
     {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
     }
}
