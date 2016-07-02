README

The sample data is sourced from:
British Library Catalogue Datasets in RDF and CSV

This repository demonstrates usage of the JQuery DataTable plugin, 
ajax data retrieval, table data filtering and table redraw.

This demo is to take care of the following use case:

"I want data (not much, just 9999 lines) to be loaded all at once,
but *apply filter on some fields from the frontend*. Additionally,
I want to share this filtering state with another user by sending him
a URL that represents the current state of my webpage."

For example, I opened the page with:
    <server_ip>/users/
and searched the term "twins"

and I can pass the following link to others:
    <server_ip>/users/twins

so the other user will be able to see all
of my filtering results just by clicking on
that url.

Install nodejs and npm.

Then run
    npm start
Go to 
    localhost:3000
Enter some terms in the filter box and then hit Share Link.