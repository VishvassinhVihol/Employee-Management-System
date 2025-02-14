//we will set data to local storage

let employees = [
  {
    "id": 1,
    "email": "alice.johnson@example.com",
    "password": "123",
    "name": "Aarav",
    "taskCount": {
      "active": 2,
      "failed": 1,
      "new": 2,
      "completed": 3,
      "total": 8
    },
    "tasks": [
      {
        "title": "Complete Report",
        "description": "Prepare the monthly financial report.",
        "date": "2025-02-01",
        "category": "Finance",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client Meeting",
        "description": "Discuss project updates with the client.",
        "date": "2025-02-03",
        "category": "Meetings",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Budget Analysis",
        "description": "Analyze company expenditures and budget.",
        "date": "2025-02-05",
        "category": "Finance",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Compliance Review",
        "description": "Ensure all financial regulations are met.",
        "date": "2025-02-07",
        "category": "Legal",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Financial Audit",
        "description": "Conduct an internal financial audit.",
        "date": "2025-02-09",
        "category": "Finance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Tax Filing",
        "description": "Submit tax forms for the company.",
        "date": "2025-02-10",
        "category": "Finance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Profitability Review",
        "description": "Review and forecast profitability.",
        "date": "2025-02-12",
        "category": "Finance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Year-End Closing",
        "description": "Close the financial books for the year.",
        "date": "2025-02-15",
        "category": "Finance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "email": "vihaan@example.com",
    "password": "123",
    "name": "Vihaan",
    "taskCount": {
      "active": 2,
      "failed": 1,
      "new": 1,
      "completed": 3,
      "total": 7
    },
    "tasks": [
      {
        "title": "Fix Server Issue",
        "description": "Resolve downtime issue on main server.",
        "date": "2025-02-02",
        "category": "IT",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update Website",
        "description": "Push the latest UI changes to production.",
        "date": "2025-02-04",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Security Audit",
        "description": "Review recent security logs.",
        "date": "2025-02-06",
        "category": "Security",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Server Maintenance",
        "description": "Perform regular server upkeep.",
        "date": "2025-02-08",
        "category": "IT",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Database Backup",
        "description": "Backup all databases.",
        "date": "2025-02-10",
        "category": "IT",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Patch Update",
        "description": "Apply the latest software patch.",
        "date": "2025-02-12",
        "category": "IT",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Code Cleanup",
        "description": "Clean up unused code in the system.",
        "date": "2025-02-14",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "kabir@example.com",
    "password": "123",
    "name": "Kabir",
    "taskCount": {
      "active": 1,
      "failed": 2,
      "new": 1,
      "completed": 2,
      "total": 6
    },
    "tasks": [
      {
        "title": "Prepare Presentation",
        "description": "Create slides for the upcoming seminar.",
        "date": "2025-02-07",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Email Campaign",
        "description": "Schedule promotional emails for the next quarter.",
        "date": "2025-02-08",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Market Research",
        "description": "Analyze competitors' new product launches.",
        "date": "2025-02-09",
        "category": "Research",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Website Redesign",
        "description": "Design the new company website.",
        "date": "2025-02-11",
        "category": "Marketing",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Ad Campaign",
        "description": "Launch a targeted ad campaign.",
        "date": "2025-02-13",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Content Strategy",
        "description": "Develop a content strategy for social media.",
        "date": "2025-02-15",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "email": "dhruv@example.com",
    "password": "123",
    "name": "Dhruv",
    "taskCount": {
      "active": 2,
      "failed": 0,
      "new": 2,
      "completed": 0,
      "total": 4
    },
    "tasks": [
      {
        "title": "Develop API",
        "description": "Work on the new REST API for the mobile app.",
        "date": "2025-02-05",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Code Review",
        "description": "Review pull requests for the latest sprint.",
        "date": "2025-02-10",
        "category": "Development",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Database Optimization",
        "description": "Optimize the company database for speed.",
        "date": "2025-02-12",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Bug Fixes",
        "description": "Fix bugs reported by the QA team.",
        "date": "2025-02-14",
        "category": "Development",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "rudra@example.com",
    "password": "123",
    "name": "Rudra",
    "taskCount": {
      "active": 3,
      "failed": 2,
      "new": 0,
      "completed": 1,
      "total": 6
    },
    "tasks": [
      {
        "title": "Onboard New Employees",
        "description": "Assist with the orientation session.",
        "date": "2025-02-11",
        "category": "HR",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Do charity",
        "description": "Donate food to poor people",
        "date": "2025-02-11",
        "category": "Social",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Make a presentation",
        "description": "make a presentation for water purifier",
        "date": "2025-02-11",
        "category": "Presentation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Payroll Processing",
        "description": "Ensure salaries are processed on time.",
        "date": "2025-02-12",
        "category": "Finance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Employee Feedback Survey",
        "description": "Collect and analyze feedback from employees.",
        "date": "2025-02-13",
        "category": "HR",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Workplace Wellness",
        "description": "Plan activities for employee wellness.",
        "date": "2025-02-14",
        "category": "HR",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  }
];


let admin = [
  {
    "id": 101,
    "email": "admin@example.com",
    "password": "123",
    "name": "Rajesh",
    "taskCount": {
      "active": 1,
      "failed": 0,
      "new": 0,
      "completed": 1,
      "total": 2
    },
    "tasks": [
      {
        "title": "Review System Logs",
        "description": "Check logs for unusual activity.",
        "date": "2025-02-14",
        "category": "Security",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Approve Budget",
        "description": "Finalize and approve the Q1 budget.",
        "date": "2025-02-15",
        "category": "Finance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  }
];



export function setLocalStorage(){
    localStorage.setItem('employees',JSON.stringify(employees))//in localstorage the data is store in the form of string so use JSON .stringify to convert in string
    localStorage.setItem('admin',JSON.stringify(admin))
}
export function getLocalStorage(){
    // console.log('hello');
    
    let employees = JSON.parse(localStorage.getItem("employees"))//fetch data from local storage
    let admin = JSON.parse(localStorage.getItem("admin"))//fetch data from local storage
    // console.log(JSON.parse(employees));//to get data in the form of array
    // console.log(employees);
    // console.log(admin);
    return {employees,admin}
    
}