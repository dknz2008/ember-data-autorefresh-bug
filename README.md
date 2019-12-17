# Ember Data Autorefresh bug

This repo takes some of the code from ["The simplest possible Ember Data CRUD"](https://medium.com/@jenweber) and makes the server auto refresh every 2 seconds to illustrate a bug with ember data not clearing records.

"This app does not connect to a back end. However, using an ember-cli feature
called http-mock, I created a fake server that CRUD requests go to.
That means you can run the project locally and see the network requests and
responses in the Chrome Inspector's Network tab. The entire "server" folder is
not part of a normal Ember app - it's the mocked, fake server. All records will
disappear on refresh."


## Installation

* `git clone <repository-url>` this repository
* `cd simplest-ember-data-crud`
* `npm install`

