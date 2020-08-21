# ProductCart REST API

## Overview

ProductCart is a e-commerce platform that enables admin to manage the products and orders, similar way a user also has access to buy a particular product and manage their orders. ProductCart rest api is a easy api interface that can be used to develop a basic e-commerce application for multi platforms like, mobile app, website, desktop app etc.

## Tutorial
We provide a [Postman](https://www.getpostman.com/) & [Talend API Tester](https://chrome.google.com/webstore/detail/talend-api-tester-free-ed/aejoelaoggembcahagimdiliamlcdmfm?hl=en) collection with a set of requests that introduce the basic concepts of the API. 
### Installation 
It can be done in three steps:

#### Step 1:
First clone this ProductCart API Repository.
#### Step 2:
go to project directory and type (npm install) by using this package.json will install all the necessary dependencies.
#### Step 3:
run the application : node server.js or nodemon server.js

### Support
For API support, please email a.k3187173@gmail.com


## HTTP requests
All API requests are made by sending a secure HTTPS request using one of the following methods, depending on the action being taken:

* `POST` Create a resource
* `PATCH` Update a resource
* `GET` Get a resource or list of resources
* `DELETE` Delete a resource

For PUT and POST requests the body of your request may include a JSON payload, and the URI being requested may include a query string specifying additional filters or commands, all of which are outlined in the following sections.


## HTTP Response Codes
Each response will be returned with one of the following HTTP status codes:

* `200` `OK` The request was successful
* `201` `OK` Resources has been created Successfully
* `404` `Not found` An attempt was made to access a resource that does not exist in the API
* `500` `Server Error` An error on the server occurred


## Resources
For a description of the available resources see the [Resource Overview](resource_overview.md).



### [Products][]
- **[<code>GET</code> Product list/ Single Product list](/accounts/GET_list.md)**
- **[<code>POST</code> Create Product](/plans/GET_list.md)**
- **[<code>DELETE</code> Delete Products / Delete Single Product](/plans/GET_id.md)**
- **[<code>PATCH</code> UPDATE Product](/plans/GET_id.md)**


[Accounts]: /accounts/
[Services]: /services/
[Channel Types]: /channel-types
[Service Channels]: /service_channels
[Contacts]: /contacts
[Contact Channels]: /contact_channels
[Messages]: /messages
[Contact Custom Fields]: /contact_custom_fields
[Labels]: /labels
[Templates]: /templates
[Automations]: /automations
[Error Codes]: /error_codes.md
