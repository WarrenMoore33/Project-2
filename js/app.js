// Setting some constants that will always represent what they represent
const page = $('.page');
const studentList = $('.student-item');  //this returns an array from the class name
const tenStudents = 10;
const totalPages = Math.ceil(studentList.length / tenStudents);

//Declaring an 'appendPageLinks' function that creates a page link for each page based on the list of students passed into the function
function appendPageLinks(studentList) {

    const $paginationContainer = $('<div class="pagination" ></div>');
    const $ul = $('<ul></ul>');
    //Looping through each available page
    for (let i = 1; i <= totalPages; i++) {
        let $li = $('<li></li>');
        let $link = $(`<a href="#" >${i}</a>`);
    //adding number for every page in a link inside an li inside the ul
        $li.append($link);
        $ul.append($li);
    }
    //putting the ul in the pagination container at the bottom of the entire page
    $paginationContainer.append($ul);
    page.append($paginationContainer);

    //on click will display 10 students at a time
    $('.pagination a').click(function () {
        let pageNumber = parseInt($(this).text());

        //removing active class from all links then adding it on THIS clicked link
        $('.pagination a').removeClass('active');
        $(this).addClass('active');

        //Calling SHOW PAGE function when link is clicked
        showPage(pageNumber, studentList);
    });
    //adding active class to 1st link and calling the SHOW PAGE function to show the 1st page
    $('.pagination a').first().addClass('active');
    showPage(1, studentList);

}

// SHOW PAGE FUNCTION
function showPage(pageNumber, studentList) {

    //Hiding all students with setting their css to display none
    $(studentList).each(function() {
        this.style.display = "none";
    });
    //For each student index
    for (let studentIndex = 0; studentIndex < studentList.length; studentIndex++) {

        //Checking for each possible page display the matching 10
        for (let i = 1; i <= totalPages; i++) {
            //the page number multiplied by 10 then minus 1 (due to 0 index) and getting the next 9 down from the student index to display on page
            //ie page 2...20...19 and the next 9 down...so student index 10-19 should display on page 2
            if (pageNumber === i && studentIndex >= 0 + (tenStudents * (pageNumber - 1)) && studentIndex <= 9 + (tenStudents * (pageNumber - 1)) ) {
                studentList[studentIndex].style.display = "block";
            }
        }

    }

}
//Calling the APPENDPAGELINKS to run it all for the 1st page
appendPageLinks(studentList);

const header = $('.page-header');
const $searchBar = $('<div class="student-search"></div>');
const $input = $('<input placeholder="Search for students...">');
const $button = $('<button>Search</button>');


$searchBar.append($input);
$searchBar.append($button);

header.append($searchBar);



$button.click(function () {
    let $inputValue = $input.val().toUpperCase();
    // need to put a function here to move the page to the right person
    console.log($inputValue);

    $input.val('');
});




