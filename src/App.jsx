import React from "react";
import Card_Parent from "./component/card_parent.jsx";


const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQitAfXpzxbOu0uJFMSdIeJsnZNxp_F56C7Eg&shttps://thumbs.dreamstime.com/b/google-logo-vector-format-white-background-illustration-407571050.jpg",
    companyName: "Google",
    date: "5 days ago",
    postName: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45,
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    date: "7 days ago",
    postName: "React Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 55,
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    date: "10 days ago",
    postName: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 40,
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    date: "3 days ago",
    postName: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    date: "8 days ago",
    postName: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 80,
    location: "Remote",
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    date: "6 days ago",
    postName: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 60,
    location: "Pune, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/salesforce.com",
    companyName: "Salesforce",
    date: "12 days ago",
    postName: "CRM Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 42,
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    date: "4 days ago",
    postName: "UI/UX Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 58,
    location: "Noida, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    date: "9 days ago",
    postName: "Mobile App Developer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: 65,
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    date: "2 days ago",
    postName: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 62,
    location: "Remote",
  },
];

const App = () => {
  return (
    <div className="app">

   {jobOpenings.map((job, index) => (
        <Card_Parent key={index} job={job} />
      ))}    
    </div>
  ); 
};

export default App;
