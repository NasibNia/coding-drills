//1.  Require mysql to use it as a database, inquirer so a user can interact with that database however he/she chooses
//Remember, you'll have to install all the packages we've required here
var mysql = require("mysql");
var inquirer = require("inquirer");

// We're going to manage our nominees in style with this awesome package
 //(https://www.npmjs.com/package/cli-table.)
var Table = require('cli-table');


// 2. Configure our connection with mysql and a local server
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "emmysDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected");
});

//This function will be called multiple times to show us an updated version of our list of nominees
function review() {


    //3.  Let's grab a list of all the nominees
    //TO-DO go to this link and read the documentation: https://www.npmjs.com/package/cli-table.
    //Display all of the nominees and their respective data to the command line using CLI Table
    //Once you've done so, invoke the restart function at the end of this function
    
    var table = new Table({
        head: ['SHOW NAME', '# of SEASONS', 'GENRE', 'RATING']
      , colWidths: [20, 20, 10, 10],
      chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' ,             'top-right': '╗', 'bottom': '═' , 'bottom-mid': '╧' ,             'bottom-left': '╚' , 'bottom-right': '╝', 'left': '║' ,           'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
         , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
    });

    
    connection.query("SELECT * FROM nominees", function(err, data){
        if (err) throw err;
        console.log(data);
        for (var i=0 ; i < data.length ; i++){
            table.push(
                [data[i].show_name , data[i].num_seasons,data[i].genre, data[i].rating]
            );
        }
        console.log(table.toString());

    });

    restart();
}


function manageNominees() {
    inquirer.prompt([
        {
            type: "list",
            name: "userOptions",
            message: "What would you like to do",
            choices: ["Review the nominees", "Add Nominees", "Change a nominee's rating", "Delete a nominee :("]
        }
    ]).then(function (answer) {
        switch (answer.userOptions) {
            //CREATE
            case "Add Nominees":
                add();
                break;

            //READ
            case "Review the nominees":
                review();
                break;

            //UPDATE    
            case "Change a nominee's rating":


           // 4. Call the populate nominees function here, and pass it upddateRating as an argument. This will give us an array of options to give to the user when they want to choose who to update;
                populateNominees(updateRating);
                break;

            //DELETE    
            case "Delete a nominee :(":
            //Oooooh, look! ANOTHER callback


            // 5. Call the populate nominees function here, and pass it remove as an argument. This will give us an array of options to give to the user when they want to choose who to update;
                populateNominees(remove);
                break;

        }
    });
}


//6. 
//Let's make it so that we can add a nominee to our prestigious list. 
//As you can see from the prompt, we'll be filling out every column for our nominees' data.
function add() {
    inquirer.prompt([{
        name: "nomiName",
        message: "\nEnter the name of the show\n"
    }, {
        name: "seasons",
        message: "How many seasons has the show run\n"
    }, {
        name: "genre",
        message: "Enter the genre.\n"
    }, {
        name: "rating",
        message: "Give it a rating out of 10.\n"

    }]).then(function(answers){


        //7. complete the query string:
        var queryString = "INSERT INTO nominees SET ?";
        connection.query(queryString, {
            show_name   : answers.nomiName,
            num_seasons : parseInt(answers.seasons),
            genre       : answers.genre,
            rating      : parseFloat(answers.rating)
         //8.
          //??????
        });
        //Let's have a gander at our updated table (pulling straight from our database!!!!)

        review();
    });
}
//In our inquirer, we could have the user manually type in the name of a show... but what if they mispell?! 


//9.
//Using the values in our table, populate an inquirer list of nominees. 
function populateNominees(crud){
    //We don't wan't this array doubling, tripling, etc.. every time we call this function. 
    var options = [];


    //10. Complete the query string.
    var queryString = "SELECT * FROM nominees";
    connection.query(queryString, function (err, res) {

        
        //11. LOOP through the names of the nominees, and PUSH them into our options array
        for (var i = 0; i < res.length; i++){
            options.push(res[i].show_name);
        }
       
        //Here is our callback. It will call either the update or delete functions depending on what we pass to it in our switch/case
        crud(options);
    });


}

//This function will allow the user to update the rating of a show.

function updateRating(list) {

    inquirer.prompt([{
       name: "nominee",
       type: "list",
       message: "Which show do you want to change the rating for",
       //Remember, list is the options array we passed to this function in our populateNominees function. It is an array containing the most up-to-date list of nominee names
       choices: list
    }, {
        name: "rating",
        message: "Enter the new rating out of 10 (decimals up to two places are accepted)"
    }]).then(function(answers){


        //12. Complete the query string
        var queryString = "UPDATE nominees SET ? WHERE ?";
        connection.query(queryString,[
            //13. Update the rating of the chosen show
          //?????????
            {   
                rating : parseFloat(answers.rating)
            },
            {
                show_name : answers.nominee
            }
        ], 
        function(err, res) {
            console.log("Here is an updated list of the nominees:");
            //Let's have a look at our updated table (pulling straight from our database!!!!)
            review() ;  
        }
    );
    });

    
}

//This function will remove one show from out database
function remove(list) {
    inquirer.prompt([{
        name: "delete",
        type: "list",
        //Remember, list is the options array we passed to this function in our populateNominees function. It is an array containing the most up-to-date list of nominee names
        choices: list,
        message: "Who is getting booted from the nominees?"
    }]).then(function(answer){


        //14. Complete the query string
        var queryString = "DELETE FROM nominees WHERE ?";
        connection.query(queryString,{

            
            //15. Delete the chosen nominee
            //This is the row WHERE we will execute our delete
              //?????
              show_name : answer.delete
        });
        //Let's have a gander at our updated table (pulling straight from our database!!!!)
        review();
       
    });

}

function restart() {
    inquirer.prompt([{
        type: "list",
        name: "continue",
        choices: ["Yes", "No"],
        message: "Would you like to do more?\n"
    }]).then(function(answers) {
        //If we want to manage more nominees, we'll rerun our initial prompt
        if (answers.continue === "Yes") {
            manageNominees();
            //Otherwise, we'll terminate the process
        } else {
           exit();
        }

    });
}


function exit() {
    console.log("Thanks for making the all time Emmy's special! Goodbye.");
    //This will exit out of our command line process
    connection.end();
}

//This is where the magic begins
manageNominees();

//If you've made it here, you should be done!!!!
