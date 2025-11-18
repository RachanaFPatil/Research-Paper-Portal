# Research Paper Publications Portal

## Project Overview
The Research Paper Publications Portal is a web application for browsing, viewing, and uploading research papers by department.  

It consists of:  
- **Frontend:** React.js  
- **Backend:** Node.js + Express  
- **Database:** MongoDB  

Users can:  
- Browse research papers department-wise  
- View paper details including title, authors, publisher, abstract, and DOI  
- Upload new research papers via CSV/Excel files  

---

## Features
- Department-wise listing of research papers  
- Detailed view for each research paper  
- Paper upload functionality  
- Responsive frontend built with React.js  
- REST API backend built with Node.js and Express  
- MongoDB database for storing research papers  

---

## Project Structure

research-project/
│
├── frontend
│ ├──backend/ # Node.js + Express backend
│ │ ├── routes/ # API routes (papers, uploads)
│ │ ├── models/ # MongoDB models
│ │ ├── db.js
│ │ ├── uploads/
