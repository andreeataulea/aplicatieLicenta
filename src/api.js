import axios from 'axios';

export default{
    user:{
        login:credentials => axios.post("/users/login",{credentials}).then(res => res.data),
        register:data => axios.post("/users/register",{data}).then(res => res.data)
    },
    tasks:{
        fetchAll: () =>axios.get("/api/tasks").then(res=>res.data.tasks),
        create: task => axios.post("/api/addTask", {task}).then(res=>res.data.tasks)
    }
};