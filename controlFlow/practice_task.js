let userRole = "User Role";
let userCategory = userRole;

if (userRole == "Employee"){
    console.log("Access to Dietary Services Granted");
}else if (userRole == "Enrolled Member"){
    console.log("Access to Dietary Services and 1:1 Dietician Recommendation.");
}else if (userRole == "Subscriber"){
    console.log("Partial access to facilitate Dietary Services.")
}else if(userRole == "Non-Subscriber"){
    console.log("Access denied. Please enroll or subscribe first.")
}else{
    console.log("Please specify a user role.")
}