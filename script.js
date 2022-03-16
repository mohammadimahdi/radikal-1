// Converted to SCSS. If you want to grab just the CSS, click the `View Compiled` button on the css window over there <-- . That will list out the compiled css for you to use. Grab all the css between the comments and the html between the comments and it should work like a champ anywhere you place it.






var password = document.getElementById('password')
var password_toggle = document.getElementById('password-toggle')

function passwordToggle() {
	if (password.type === 'password') {
		password.type = 'text'
		password_toggle.classList.remove('fa-eye-slash')
		password_toggle.classList.add('fa-eye')
	} else {
		password.type = 'password'
		password_toggle.classList.remove('fa-eye')
		password_toggle.classList.add('fa-eye-slash')
	}
}










// All this jquery is just used for presentation. Not required at all for the radio buttons to work.
$( document ).ready(function(){
    //   Hide the border by commenting out the variable below
        var $on = 'section';
        $($on).css({
          'background':'none',
          'border':'none',
          'box-shadow':'none'
        });
    }); 