#! /usr/bin/env node
import inquirer from "inquirer";
let toDos=[];
let condition=true;
while(condition)
    
{
 let taskadd =await inquirer.prompt(
    [
        {
        name:"todo",
        type:"input",
        message:"add in todos which you want",
    
     },
    {
        name:"addMore",
        type:"confirm",
        message:"do you want to add more",
    default:false,
     }]);
    
    
 

   
toDos.push(taskadd.todo)
condition= taskadd.addMore;
console.log(toDos)}