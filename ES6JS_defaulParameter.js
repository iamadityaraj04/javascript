// default parameter is what we have to set value if we do no pass any parameter.

function book(bookName="Physics") {
    console.log(bookName);
}
book("Mathematics");
//it will return physics because it is set in default parameter.
book();