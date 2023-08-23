/**
 * Script to santize user input
 */
import emailjs from 'emailjs-com';
const form = document.getElementById('typebox')
const emailInput = document.getElementById('email_address');
const commentInput = document.getElementById("comment");
let msgs = [];
const displayErrorMsgs = function(msgs) {
    const ul = document.createElement('ul'); //create an element to hold our errors
    ul.classList.add('messages') // add a class to the ul
    // clear the ul before appending new messages
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
    for(let msg of msgs){
        const li = document.createElement('li');
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li)
    }
    const node = document.querySelector('.messages'); // select the node we just made
    if(node == null){
        form.parentNode.insertBefore(ul, form)
    } else{
        node.parentNode.replaceChild(ul, node);
    }
}
const clearErrors = function(){
    const elements = document.getElementsByClassName('messages')
    Array.from(elements).forEach(function(element){
        element.remove()
    });
    msgs = [];
}
let validate = async function() {
    clearErrors()
    // reminder, these are the elements youll pass to the api call, fName, lName etc.
    const email = emailInput.value.trim();
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    if (!emailPattern.test(email)){
        msgs[msgs.length] = "Please enter a valid email address.";
        return
    }else if(commentInput == ""){
         msgs[msgs.length] = "Please enter a valid comment.";
        return
    }
    // Fetch API for making AJAX requests, returns a Promise
        try{
            const templateParams = {
                from_email: email,
                to_email: 'guymorganb@gmail.com',
                subject: 'New Contact Form Submission',
                message: commentInput,
            };
            try{
                const response = await emailjs.send('service_gvf31oy', 'template_z7rig0g', templateParams, 'YOUR_USER_ID')
                 if (response.ok) {
                    const data = await response.json();
                    msgs[msgs.length] = "Message sent successfuly!";
                }
                else {
                    // Display error message from server
                    const data = await response.json();
                    console.log({message: "Server e", Error: data})
                    msgs[msgs.length] = data.message
                }
            }catch(err){
            console.error({message:"Server error", Error: err})
        }
    }catch(err){
        console.error({message:"Server error", Error: err})
    }finally{
        displayErrorMsgs(msgs)
    }
}
const init = () =>{
    document.addEventListener("DOMContentLoaded", function () {
        form.addEventListener("submit", function (event) {
          event.preventDefault();
          validate();
        });
    });
}
init();