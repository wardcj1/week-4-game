    $(document).ready(function() {



      // Variables
      var attacker = " ";
      var defender = " ";
      var operator = " ";
      var attackPower = "";
      var ctrAttackPower = "";
      var health = "";
      var result = 0;
      var hasNumber = false;
      var firstNumberComplete = false;
      var lockButtons = false;

      // Check if any button is clicked...
      $(document).on("click", "button", function() {

        // // Checks if it's a number and that its not the end of the calculation ("!lockButtons")
        // if ($(this).hasClass("number") && !lockButtons) {

        //   // We'll then set our "hasNumber" variable to true to indicate that we can proceed in selecting an operator.
        //   hasNumber = true;

        //   // If we haven't received an operator yet...
        //   if (firstNumberComplete === false) {

            // Then grab the number of the value clicked and build a string with it
            attacker += $(this).attr("value");

            // Print the number to the firstPage
            console.log(attacker);

            // Print it to the div
            $("#attacker-display").html(attacker);
          // }

          // If we have received an operator already...
          // else {

            // Grab the number of the value clicked and build a string with it
            defender += $(this).attr("value");

            // Print the number to the firstPage
            console.log(defender);

            // Print it to the div
            $("#second-number").html(defender);
          // }
        // }

        // // Checks if its an operator (but not "=")
        // if ($(this).hasClass("operator") && hasNumber && !lockButtons) {
        //   firstNumberComplete = true;

        //   // Set the visual to show the operator's symbol
        //   $("#operator").html("<h1>" + $(this).text() + "</h1>");
        //   operator = $(this).attr("value");
        // }

        // // Checks if the equal button has been pressed. If so...
        // if ($(this).hasClass("equal")) {

        //   // Lock the keyboard from being clicked
        //   lockButtons = true;

        //   // Convert the numbers into integers
        //   attacker = parseInt(attacker);
        //   defender = parseInt(defender);

        //   // Then figure out which operator was clicked and perform the necessary functions.
        //   // Then show the result in the HTML
        //   if (operator === "plus") {
        //     result = attacker + defender;
        //   }

        //   if (operator === "minus") {
        //     result = attacker - defender;
        //   }

        //   if (operator === "times") {
        //     result = attacker * defender;
        //   }

        //   if (operator === "divide") {
        //     result = attacker / defender;
        //   }

        //   if (operator === "power") {
        //     result = Math.pow(attacker, defender);
        //   }

          $("#result").html(result);
        // }

        // If clear is selected then wipe away all of the content from the screen and unlock the buttons.
        if ($(this).hasClass("clear")) {

          attacker = " ";
          defender = " ";
          operator = " ";
          result = 0;
          hasNumber = false;
          firstNumberComplete = false;
          lockButtons = false;

          $("#attacker-display, #defender-display, #operator, #result").empty();
        }
      });
    });